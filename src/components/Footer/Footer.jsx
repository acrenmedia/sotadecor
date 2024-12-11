import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouzz,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
          <div className="row m-0 d-flex justify-content-center">
            <div className="col-lg-6 px-2 my-4 d-flex justify-content-center flex-column gap-2">
              <h3>SOTA WINDOW COVERINGS</h3>
              <div className="footer-links d-flex flex-wrap gap-4">
                <div className="d-flex flex-column">
                  <h4>Connect</h4>
                  <span>
                    <a href="https://www.houzz.com/professionals/window-treatments/sota-window-coverings-pfvwus-pf~1762534943" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faHouzz} /> Houzz
                    </a>
                  </span>
                  <span>
                    <a href="https://www.facebook.com/SOTA-Window-Coverings-162212467184332/" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faFacebook} /> Facebook
                    </a>
                  </span>
                  <span>
                    <a href="https://instagram.com/sota_window_coverings" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faInstagram} /> Instagram
                    </a>
                  </span>
                </div>
                <div className="d-flex flex-column">
                  <h4>Services</h4>
                  <span>
                    <Link to="/gallery/plantationshutters">
                      Plantation Shutters
                    </Link>
                  </span>
                  <span>
                    <Link to="/gallery/solarshades">Solar Shades</Link>
                  </span>
                  <span>
                    <Link to="/gallery/motorization">Motorization</Link>
                  </span>
                </div>
                <div className="d-flex flex-column">
                  <h4>Contact</h4>
                  <span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> 4624 Danson Way{" "}
                    <br /> Delray Beach, FL 33445
                  </span>
                  <span>
                    <a href="tel: 5617054900">
                      <FontAwesomeIcon icon={faPhone} /> (561) 705-4900
                    </a>
                  </span>
                  <span>
                    <a href="mailto: info@sotawindowconvering.com">
                      <FontAwesomeIcon icon={faEnvelope} /> info@sotawindowcovering.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 px-2 d-flex justify-content-start align-items-center">
              <iframe
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuyjwfmkg2YgRkQxUZ3Gbarg&key=AIzaSyBxoH5DOqHci9Ork08hBtTkGZwQ79d_UJM"
              ></iframe>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
