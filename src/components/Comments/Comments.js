import "./Comments.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
// import { v4 as uuidv4 } from "uuid";
function Comments({ selectedVideo, countComments }) {
  return (
    <>
      <section className="submission">
        <h3 className="submission__counter">
          {countComments(selectedVideo.comments)} comments
        </h3>
        <div className="submission__subdivision">
          <div className="submission__image-block">
            <img className="submission__avatar" alt="users chosen avatar" src={avatar}></img>
          </div>
          <form className="submission__form form">
            <div className="form__tablet-division">
              <label className="form__label">Join the conversation</label>
              <input
                className="form__input"
                placeholder="Add a new comment"
              ></input>
            </div>
            <button className="form__button">Comment</button>
          </form>
        </div>
      </section>
      <div className="comments">
        {selectedVideo.comments.map((comment, index) => {
          return (
            <div className="comments__card" key={index}>
              <div className="comments__image-block">
                <p className="comments__image" atl="default grey avatar"></p>
              </div>
              <div className="comments__text-block">
                <div className="comments__info">
                  <p className="comments__name">{comment.name}</p>
                  <p className="comments__date">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </p>
                </div>
                <p className="comments__content">{comment.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Comments;
