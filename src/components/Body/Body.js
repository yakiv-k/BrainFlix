import Video from "../Video/Video";
import VideoDetails from "../../Data/video-details.json";

function Body() {
    return  (
        <>
          <Video  image={VideoDetails[0].image}/>
        </>
    )
};

export default Body;