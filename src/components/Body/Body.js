import MainVideoDetails from "../../Data/video-details.json";
import SuggestedVideoDetails from "../../Data/videos.json";
import Video from "../Video/Video";
import VideoInfo from "../VideoInfo/VideoInfo";
import Comments from "../Comments/Comments";
import NextVideos from "../NextVideos/NextVideos";
import React from "react";

class Body extends React.Component {
  state = {
    selectedVideo: MainVideoDetails[0],
    suggestedVideos: SuggestedVideoDetails,
  };

  updateMainVideoHandler = (videoId) => {
    const newSelectedVideo = MainVideoDetails.find((video) => video.id === videoId);

    this.setState({
      selectedVideo: newSelectedVideo
    });
  };

  // FUNCTION: counts the ammount of comments associated with a specific video
  countComments = (arr) => {
    return arr.filter((obj) => obj.comment === obj.comment).length;
};

  render() {
    const nonSelectedVideos = SuggestedVideoDetails.filter((video) => {
      return video.id !== this.state.selectedVideo.id;
    });
    return (
      <>
        <Video selectedVideo={this.state.selectedVideo} />
        <VideoInfo selectedVideo={this.state.selectedVideo} />
        <Comments 
        selectedVideo={this.state.selectedVideo}
        countComments={this.countComments} />
        <NextVideos 
        nextVideos={nonSelectedVideos}
        updateMainVideoHandler={this.updateMainVideoHandler}
         />
      </>
    );
  }
}

export default Body;

// MainVideoDetails.map((video) => {
//   video.id === newSelectedVideo.id;
// })