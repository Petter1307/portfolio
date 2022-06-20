import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
// import { logo } from "../../assets/logo.svg";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faEnvelope,
  faNewspaper,
  faHdd,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
const SideBar = () => {
  return (
    <div className="nav-bar">
      <FontAwesomeIcon className="logo" icon={faHdd} />
      <nav>
        <a>
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a>
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a>
          <FontAwesomeIcon icon={faNewspaper} />
        </a>
      </nav>

      <ul>
        <li>
          <a>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
