import "./Video.scss";

function Video({ selectedVideo }) {
  return (
    <>
      <div className="video">
        <video className="video__player"controls poster={selectedVideo.image}>
          <source></source>
        </video>
      </div>
    </>
  );
}

export default Video;
