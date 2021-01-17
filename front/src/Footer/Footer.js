import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagramSquare,
  faLinkedin,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <div className="footer">
    <div className="icons-div">
      <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
      <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
      <FontAwesomeIcon className="icon" icon={faLinkedin} />
    </div>
    <p className="copyright">© 2021 Tolka43</p>
  </div>
);

export default Footer;
