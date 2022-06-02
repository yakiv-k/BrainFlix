import "./Upload.scss";
import image from "../../assets/Images/Upload-video-preview.jpg";

function Upload() {
    return (
<section className="upload">
    <div className="upload__title-container">
        <h1 className="upload__title">Upload Video</h1>
    </div>
    <div className="upload__thumbnail-container">
        <p className="upload__thumbnail-title">VIDEO THUMBNAIL</p>
        <img className="upload__thumbnail" src={image}></img>
    </div>
    <form className="upload__form form">
        <label className="form__label">TITLE YOUR VIDEO</label>
        <input className="form__input" placeholder="Add a description to your video"></input>
        <button className="form__button">PUBLISH</button>
        <a className="form__button--cancel">CANCEL</a>
    </form>
</section>    
    )
};

export default Upload;