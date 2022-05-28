import "./VideoInfo.scss"
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";


function VideoInfo({selectedVideo}) {
  return (
    <section className="video-info">
      <h1 className="video-info__title">{selectedVideo.title}</h1>
      <div className="video-info__stats stats">
        <div className="stats__block">
          <p className="stats__text stats__text--color">{selectedVideo.channel}</p>
          <p className="stats__text">{(new Date(selectedVideo.timestamp)).toLocaleDateString()}</p>
        </div>
        <div className="stats__block">
          <p className="stats__text">
            <img className="stats__icon" src={viewsIcon}></img>
            {selectedVideo.views}</p>
          <p className="stats__text">
          <img className="stats__icon" src={likesIcon}></img>
          {selectedVideo.likes}</p>
        </div>
      </div>
      <p className="video-info__description">
      {selectedVideo.description}
      </p>
    </section>
  );
}
export default VideoInfo;
