import Video from "../../components/Video/Video";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";
import React from "react";
import "./Homepage.scss";
import axios from "axios";

class Homepage extends React.Component {
  state = {
    selectedVideo: null,
    suggestedVideos: [],
    serverError: false,
  };

  apiKEY = "8e31db06-5abe-4902-af79-6940f302e934";
  apiBASE = `https://project-2-api.herokuapp.com/videos?api_key=${this.apiKEY}`;

  componentDidMount() {
    axios
      .get(this.apiBASE)
      .then((response) => {
        this.setState({
          suggestedVideos: response.data,
        });

        let videoId;

        if (this.props.match.params.id) {
          videoId = this.props.match.params.id;
        } else {
          videoId = response.data[0].id;
        }

        return this.fetchVideoDataById(videoId);
      })
      .then((response) => {
        this.setState({
          selectedVideo: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          serverError: true,
        });
      });
  }

  componentDidUpdate(prevProps) {
    const selectedVideoId = this.props.match.params.id;
    const prevVideo = prevProps.match.params.id;

    if (typeof selectedVideoId === 'undefined') {
      const defaultVideo = this.state.suggestedVideos[0].id;
      
      this.fetchVideoDataById(defaultVideo)
      .then((response) => {
        this.setState({
          selectedVideo: response.data
        })
      });
    } else if (selectedVideoId !== prevVideo) {
      this.fetchVideoDataById(selectedVideoId)
      .then((response) => {
        this.setState({
          selectedVideo: response.data,
        })
      });
    }
  }

  // FUNCTION: Axios call
  fetchVideoDataById = (Id) => {
    return axios.get(
      `https://project-2-api.herokuapp.com/videos/${Id}?api_key=${this.apiKEY}`
    );
  };

  // FUNCTION: counts the ammount of comments associated with a specific video
  countComments = (arr) => {
    return arr.filter((obj) => obj.comment).length;
  };

  render() {
    if (!this.state.selectedVideo) {
      return <p>Loading....</p>;
    }
    if (!this.state.suggestedVideos) {
      return <p>Loading....</p>;
    }
    // VARIABLE: holds an array of all videos except for the currently selected video

    // NEEDS NEW PATH
    const nonSelectedVideos = this.state.suggestedVideos.filter((video) => {
      console.log(video);
      return video.id !== this.state.selectedVideo.id;
    });
    return (
      <>
        <Video selectedVideo={this.state.selectedVideo} />
        <div className="state">
          <div className="state__comments-division">
            <VideoInfo selectedVideo={this.state.selectedVideo} />
            <Comments
              selectedVideo={this.state.selectedVideo}
              countComments={this.countComments}
            />
          </div>
          <div className="state__next-division">
            <NextVideos nextVideos={nonSelectedVideos} />
          </div>
        </div>
      </>
    );
  }
}

export default Homepage;
