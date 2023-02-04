import "./Upload.scss";
import { Link } from "react-router-dom";
import image from "../../assets/Images/Upload-video-preview.jpg";
import image2 from "../../assets/Images/upload-success.svg";
import axios from "axios";
import React from "react";

class Upload extends React.Component {
  state = {
    isUploaded: false,
  };

  apiBASE = "https://brainflix.fly.dev/videos";

  uploadHandle = (event) => {
    event.preventDefault();
    let newUpload = {
      title: event.target.title.value,
      description: event.target.description.value,
    };

    axios.post(this.apiBASE, newUpload);

    this.setState({
      isUploaded: true,
    });

    setTimeout(() => {
      this.props.history.push("/");
    }, 1000);
  };

  render() {
    if (this.state.isUploaded === true) {
      return (
        <div className="upload__success">
          <img
            className="upload__success-image"
            src={image2}
            alt="upload success"
          ></img>
          <p className="upload__success-title">Success</p>
        </div>
      );
    } else {
      return (
        <section className="upload">
          <div className="upload__title-container">
            <h1 className="upload__title">Upload Video</h1>
          </div>
          <form onSubmit={this.uploadHandle} className="upload__submit submit">
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
              <button className="submit__button" type="submit">
                Publish
              </button>
              <Link to="/" className="submit__button--cancel">
                CANCEL
              </Link>
            </div>
          </form>
        </section>
      );
    }
  }
}

export default Upload;
