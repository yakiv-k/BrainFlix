import "./Upload.scss";
import { Link } from "react-router-dom";
import image from "../../assets/Images/Upload-video-preview.jpg";
import axios from "axios";

function Upload(props) {
  let apiBASE = "http://localhost:8080/videos";

  const uploadHandle = (event) => {
    event.preventDefault();
    let newUpload = {
      title: event.target.title.value,
      description: event.target.description.value,
    };

    axios.post(apiBASE, newUpload).then((response) => {
      // return home onSubmit
      return props.history.push("/");
    });
  };

  return (
    <section className="upload">
      <div className="upload__title-container">
        <h1 className="upload__title">Upload Video</h1>
      </div>
      <form onSubmit={uploadHandle} className="upload__submit submit">
        <div className="submit__desktop-container">
          <div className="upload__thumbnail-container">
            <p className="upload__thumbnail-title">Video thumbnail</p>
            <img
              className="upload__thumbnail"
              src={image}
              alt="current video thumbnail"
            ></img>
          </div>
          <div className="submit__desktop-container--text">
            <label className="submit__label" htmlFor="title">
              Title your video
            </label>
            <input
              className="submit__input"
              placeholder="Add a title to your video"
              type="text"
              name="title"
            ></input>
            <label className="submit__label" htmlFor="description">
              Add a video description
            </label>
            <input
              className="submit__input--padding"
              placeholder="Add a description to your video"
              type="text"
              name="description"
            ></input>
          </div>
        </div>
        <div className="submit__button-division">
          <button className="submit__button" type="submit">Publish</button>
          <Link to="/" className="submit__button--cancel">
            CANCEL
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Upload;
