import "./NextVideos.scss";

function NextVideos({suggestedVideos}) {
  return (
    <>
      <h3 className="next-videos__heading">NEXT VIDEOS</h3>
      {suggestedVideos.map((video) => {
        return (
      <article className="next-videos__card">
        <img className="next-videos__image" src={video.image}></img>
        <div className="next-videos__details">
          <p className="next-videos__title">
          {video.title}
          </p>
          <p className="next-videos__author">{video.channel}</p>
        </div>
      </article>          
        )
      })}

    </>
  );
}

export default NextVideos;
