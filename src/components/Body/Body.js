import VideoDetails from "../../Data/video-details.json";
import Video from "../Video/Video";
import VideoInfo from "../VideoInfo/VideoInfo";
import Comments from "../Comments/Comments";

function Body() {
  return (
    <>
      <Video image={VideoDetails[0].image} />
      <VideoInfo />
      <Comments />
    </>
  );
}

export default Body;
