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

  apiBASE = "http://localhost:8080/videos";

  componentDidMount() {
    axios
      .get(this.apiBASE)
      .then((response) => {
        // this.setState({
        //   suggestedVideos: response.data,
        // });

        let videoId;

        if (this.props.match.params.id) {
          videoId = this.props.match.params.id;
        } else {
          videoId = response.data[0].id;
        }

        this.fetchVideoDataById(videoId);

        this.setState({
          selectedVideo: response.data,
          suggestedVideos: response.data,
        });
      })
      // .then((response) => {
      //   this.setState({
      //     selectedVideo: response.data,
      //   });
      // })
      .catch((error) => {
        this.setState({
          serverError: true,
        });
      });
  }

  componentDidUpdate(prevProps) {
    const selectedVideoId = this.props.match.params.id;
    const prevVideo = prevProps.match.params.id;

  // FUNCTION: counts the ammount of comments associated with a specific video
  countComments = (arr) => {
    return arr.filter((obj) => obj.comment).length;
  };

    if (typeof selectedVideoId === "undefined") {
      const defaultVideo = this.state.suggestedVideos[0].id;

      this.fetchVideoDataById(defaultVideo).then((response) => {
        this.setState({
          selectedVideo: response.data,
        });
      });
    } else if (selectedVideoId !== prevVideo) {
      this.fetchVideoDataById(selectedVideoId).then((response) => {
        this.setState({
          selectedVideo: response.data,
        });
      });
      window.scrollTo({ top: 0, behaviour: "smooth" });
    }
  }

  // FUNCTION: Axios call
  fetchVideoDataById = (Id) => {
    return axios.get(`http://localhost:8080/videos/${Id}`);
  };

  render() {
    if (!this.state.selectedVideo) {
      if (!this.state.suggestedVideos) {
        return <p>Loading....</p>;
      }
    } else {
      // VARIABLE: holds an array of all videos except for the currently selected video

      // NEEDS NEW PATH
      const nonSelectedVideos = this.state.suggestedVideos.filter((video) => {
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
}

export default Homepage;
