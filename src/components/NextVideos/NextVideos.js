import "./NextVideos.scss";
// import { Link } from "react-router-dom"

function NextVideos({ nextVideos }) {
  console.log(nextVideos)
  return (
    <>
      <section className="next-videos">
        <h3 className="next-videos__heading">NEXT VIDEOS</h3>
        {nextVideos.map((video) => {
          return (
            <article
              key={video.id}
              className="next-videos__card"
            >
              <div className="next-videos__image-block">
              <img className="next-videos__image" src={video.image} alt="suggested video"></img>
              </div>
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
