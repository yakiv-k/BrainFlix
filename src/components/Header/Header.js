import "./Header.scss";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Avatar from "../../assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";
// import testArray from "../../assets/Data/video.json";

function Header() {
  return (
    <header>
      <nav className="nav"> 
      <Link to="/">
        <img className="nav__logo" src={Logo} />
        </Link>
        <form className="nav__search search">
          <div className="nav__division">
          <input className="search__input" placeholder="Search"></input>
          <img
            className="search__avatar"
            src={Avatar}
          />            
          </div>
          <button className="search__button">UPLOAD</button>
        </form>
        <img className="nav__avatar" src={Avatar} />
      </nav>
    </header>
  );
}

export default Header;
