import MainVideoDetails from "../../Data/video-details.json";
import SuggestedVideoDetails from "../../Data/videos.json";
import Video from "../../components/Video/Video";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";
import React from "react";
import "./Homepage.scss";

class StateSource extends React.Component {
  state = {
    selectedVideo: MainVideoDetails[0],
    suggestedVideos: SuggestedVideoDetails,
  };

  updateMainVideoHandler = (videoId) => {
    const newSelectedVideo = MainVideoDetails.find(
      (video) => video.id === videoId
    );

    this.setState({
      selectedVideo: newSelectedVideo,
    });
  };

  // FUNCTION: counts the ammount of comments associated with a specific video
  countComments = (arr) => {
    return arr.filter((obj) => obj.comment).length;
  };

  render() {
    const nonSelectedVideos = SuggestedVideoDetails.filter((video) => {
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
            <NextVideos
              nextVideos={nonSelectedVideos}
              updateMainVideoHandler={this.updateMainVideoHandler}
            />
          </div>
        </div>
      </>
    );
  }
}

export default StateSource;







// import StateSource from "../../components/StateSource/StateSource";
// import "./Homepage.scss";

// function Homepage() {
//     return (
//         <>
//         <StateSource />
//         </>
//     );
// };

// export default Homepage;