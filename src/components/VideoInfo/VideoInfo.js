import "./VideoInfo.scss"
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";


function VideoInfo() {
  return (
    <section className="video-info">
      <h1 className="video-info__title">BMX Rampage: 2021 Highlights</h1>
      <div className="video-info__stats stats">
        <div className="stats__block">
          <p className="stats__text stats__text--color">By Red Crow</p>
          <p className="stats__text">07/11/2021</p>
        </div>
        <div className="stats__block">
          <p className="stats__text">
            <img className="stats__icon" src={viewsIcon}></img>
            1,001,023</p>
          <p className="stats__text">
          <img className="stats__icon" src={likesIcon}></img>
            110,985</p>
        </div>
      </div>
      <p className="video-info__description">
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers
        blew the doors off what is possible on two wheels, unleashing some of
        the biggest moments the sport has ever seen. While mother nature only
        allowed for one full run before the conditions made it impossible to
        ride, that was all that was needed for event veteran Kyle Strait, who
        won the event for the second time -- eight years after his first Red Cow
        Rampage title
      </p>
    </section>
  );
}
export default VideoInfo;
