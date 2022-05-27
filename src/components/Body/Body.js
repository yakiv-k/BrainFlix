import MainVideoDetails from "../../Data/video-details.json";
import SuggestedVideoDetails from "../../Data/videos.json"
import Video from "../Video/Video";
import VideoInfo from "../VideoInfo/VideoInfo";
import Comments from "../Comments/Comments";
import NextVideos from "../NextVideos/NextVideos";
import React from "react";


class Body extends React.Component {
    state = {
    selectedVideo: MainVideoDetails[0],
    suggestedVideos: SuggestedVideoDetails
    }

    // this.setState({
        
    //   });

    render() {
   return (
    <>
      <Video />
      <VideoInfo selectedVideo={this.state.selectedVideo}/>
      <Comments selectedVideo={this.state.selectedVideo}/>
      <NextVideos suggestedVideos={this.state.suggestedVideos}/>
    </>
  );       
    }
}

export default Body;
