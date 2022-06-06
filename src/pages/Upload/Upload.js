import "./Upload.scss";
import { Link } from "react-router-dom";
import image from "../../assets/Images/Upload-video-preview.jpg";

function Upload() {
  return (
    <section className="upload">
      <div className="upload__title-container">
        <h1 className="upload__title">Upload Video</h1>
      </div>
      <form className="upload__form form">
        <div className="form__desktop-container">
        <div className="upload__thumbnail-container">
          <p className="upload__thumbnail-title">Video thumbnail</p>
          <img
            className="upload__thumbnail"
            src={image}
            alt="current video thumbnail"
          ></img>
        </div>
        <div className="form__desktop-container--text">
          <label className="form__label" for="title">Title your video</label>
          <input
            className="form__input"
            placeholder="Add a title to your video"
            type="text"
            name="title"
          ></input>
          <label className="form__label" for="description">Add a video description</label>
          <input
            className="form__input--padding"
            placeholder="Add a description to your video"
            type="text"
            name="description"
          ></input>
        </div>
        </div>
        <div className="form__button-division">
          <button className="form__button">Publish</button>
          <Link
            to="/"
            className="form__button--cancel"
            href="../Homepage/Homepage.js"
          >
            CANCEL
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Upload;
