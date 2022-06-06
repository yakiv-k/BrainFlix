import "./Upload.scss";
import { Link } from "react-router-dom";
import image from "../../assets/Images/Upload-video-preview.jpg";

function Upload() {
    return (
<section className="upload">
    <div className="upload__title-container">
        <h1 className="upload__title">Upload Video</h1>
    </div>
    <div className="upload__thumbnail-container">
        <p className="upload__thumbnail-title">VIDEO THUMBNAIL</p>
        <img className="upload__thumbnail" src={image} alt="current video thumbnail"></img>
    </div>
    <form className="upload__form form">
        <label className="form__label">TITLE YOUR VIDEO</label>
        <input className="form__input" placeholder="Add a title to your video"></input>
        <label className="form__label">ADD A VIDEO DESCRIPTION</label>
        <input className="form__input--padding" placeholder="Add a description to your video"></input>
        <div className="form__button-division">
        <button className="form__button">PUBLISH</button>
        {/* VERIFY THE HREF PATH */}
        <Link to="/" className="form__button--cancel" href="../Homepage/Homepage.js">CANCEL</Link>            
        </div>
    </form>
</section>    
    )
};

export default Upload;