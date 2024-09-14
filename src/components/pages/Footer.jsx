import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerLogo from "../../assets/footer.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerRow">
            <div className="footrLogo">
              <img src={footerLogo} alt="Footer logo" />
            </div>
            <div className="footerLinks">
              <div>
                <p>Product</p>
                <div>
                  <Link to="/features">Features</Link>
                  <Link to="/pricing">Pricing</Link>
                  <Link to="/booking">Book a demo</Link>
                </div>
              </div>
              <div>
                <p>Explore</p>
                <div>
                  <Link to="/events">Events</Link>
                  <Link to="/blog">Blog</Link>
                </div>
              </div>
              <div>
                <p>Company</p>
                <div>
                  <Link to="/about-us">About us</Link>
                  <Link to="/contact-us">Contact us</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footerRowTwo">
            <div className="copyright">
              <p>© 2022 Welcome. All right reserved.</p>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
            </div>
            <div className="socialLink">
              <FontAwesomeIcon icon={faYoutube}    className="icon" />
              <FontAwesomeIcon icon={faTwitter}   className="icon" />
              <FontAwesomeIcon icon={faInstagram}   className="icon" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
