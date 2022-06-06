import "./PageHeader.scss";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Avatar from "../../assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function PageHeader() {
  return (
    <header>
      <nav className="nav">
        <Link to="/" className="nav__link">
          <img className="nav__logo" src={Logo} alt="website logo"/>
        </Link>
        <form className="nav__search search">
          <div className="nav__division">
            <input className="search__input" placeholder="Search"></input>
            <img className="search__avatar" src={Avatar} alt="user avatar" />
          </div>
          <Link to="/Upload" className="search__link">
            <button className="search__button">Upload</button>
          </Link>
        </form>
        <img className="nav__avatar" src={Avatar} alt="user avatar" />
      </nav>
    </header>
  );
}

export default PageHeader;
