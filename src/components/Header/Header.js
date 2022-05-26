import "./Header.scss";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Avatar from "../../assets/Images/Mohan-muruge.jpg";
// import testArray from "../../assets/Data/video.json";

function Header() {
  return (
    <header>
      <nav className="nav"> 
        <img className="nav__logo" src={Logo} />
        <form className="nav__form form">
          <div className="nav__division">
          <input className="form__input" placeholder="Search"></input>
          <img
            className="form__avatar"
            src={Avatar}
          />            
          </div>
          <button className="form__button">UPLOAD</button>
        </form>
        <img className="nav__avatar" src={Avatar} />
      </nav>
    </header>
  );
}

export default Header;
