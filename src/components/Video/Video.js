import "./Video.scss";

function Video({ selectedVideo }) {
  return (
    <>
      <div className="video">
        <div className="video__wrapper">
        <video className="video__player"controls poster={selectedVideo.image}>
          <source></source>
        </video>          
        </div>
      </div>
    </>
  );
}

export default Video;
