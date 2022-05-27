import VideoDetails from "../../Data/video-details.json";
import Video from "../Video/Video";
import VideoInfo from "../VideoInfo/VideoInfo";

function Body() {
  return (
    <>
      <Video image={VideoDetails[0].image} />
      <VideoInfo />
    </>
  );
}

export default Body;
