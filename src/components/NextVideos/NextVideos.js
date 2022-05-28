import "./NextVideos.scss";

function NextVideos({ nextVideos, updateMainVideoHandler }) {
  return (
    <>
      <section className="next-videos">
        <h3 className="next-videos__heading">NEXT VIDEOS</h3>
        {nextVideos.map((video) => {
          return (
            <article
              key={video.id}
              className="next-videos__card"
              onClick={() => {
                updateMainVideoHandler(video.id)
              }}
            >
              <img className="next-videos__image" src={video.image}></img>
              <div className="next-videos__details">
                <p className="next-videos__title">{video.title}</p>
                <p className="next-videos__author">{video.channel}</p>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default NextVideos;
