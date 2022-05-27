import "./Comments.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

function Comments() {
  return (
    <>
      <section className="form">
        <h3 className="form__comments-counter">3 comments</h3>
        <div>
          <img className="form__avatar" src={avatar}></img>
          <form className="comments__form form">
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
        <div className="comments__card">
          <div classname="commments__image-block">
            <img className="comments__image"></img>
          </div>
          <div className="comments__text-block">
            <div className="comments__info">
              <p className="comments__name">Micheal Lyons</p>
              <p className="comments__date">08/09/2021</p>
            </div>
            <p className="comments__content">
              They BLEW the ROOF off at their last event, once everyone started
              figuring out they were going. This is still simply the greatest
              opening of an event I have EVER witnessed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
