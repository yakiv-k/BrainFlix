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

  apiBASE = "https://brainflix.fly.dev/videos";

  componentDidMount() {
    axios
      .get(this.apiBASE)
      .then((response) => {


        let videoId;
        // set videoId to the id within url if it exists
        if (this.props.match.params.id) {
          videoId = this.props.match.params.id;
        } else {
          // display default
          videoId = response.data[0].id;
        }

        this.fetchVideoDataById(videoId);

        // Update state
        this.setState({
          suggestedVideos: response.data,
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

    //Condition: set default video at index [0] if the id is undefined
    if (typeof selectedVideoId === "undefined") {
      const defaultVideo = this.state.suggestedVideos[0].id;

      this.fetchVideoDataById(defaultVideo).then((response) => {
        this.setState({
          selectedVideo: response.data,
        });
      });
      // Change the main video if the data changes
    } else if (selectedVideoId !== prevVideo) {
      this.fetchVideoDataById(selectedVideoId).then((response) => {
        this.setState({
          selectedVideo: response.data,
        });
      });
      // Scroll to main video upon selection
      window.scrollTo({ top: 0, behaviour: "smooth" });
    }
  }

  // FUNCTION: Axios call
  fetchVideoDataById = (Id) => {
    return axios.get(`https://brainflix.fly.dev/videos/${Id}`);
  };


  render() {
    // Display message before asynchronous request is fulfilled
    if (!this.state.selectedVideo) {
      if (!this.state.suggestedVideos) {
        return <p>Loading....</p>;
      }
    } else {
      // VARIABLE: holds an array of all videos except for the currently selected videos
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
