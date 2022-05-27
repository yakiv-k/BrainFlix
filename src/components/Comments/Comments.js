import "./Comments.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

function Comments({ selectedVideo }) {
  return (
    <>
      <section className="submission">
        <h3 className="submission__counter">3 comments</h3>
        <div className="submission__subdivision">
          <div className="submission__image-block">
          <img className="submission__avatar" src={avatar}></img>
          </div>
          <form className="submission__form form">
            <label className="form__label">JOIN THE CONVERSATION</label>
            <input
              className="form__input"
              placeholder="Add a new comment"
            ></input>
            <button className="form__button">COMMENT</button>
          </form>
        </div>
      </section>
      <div className="comments">
        {selectedVideo.comments.map((video) => {
          return (
            <div className="comments__card">
              <div className="commments__image-block">
                <img className="comments__image"></img>
              </div>
              <div className="comments__text-block">
                <div className="comments__info">
                  <p className="comments__name">{video.name}</p>
                  <p className="comments__date">{video.timestamp}</p>
                </div>
                <p className="comments__content">{video.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Comments;
