import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import "./Services.css";

const Services = ({ title, photoLink, videoLink }) => {
  return (
    <div className="row m-0 services">
      <div className="col-lg-12">
        <div className="container">
          <h2 className="text-center p-4">{title}</h2>
          <div className="row m-0">
            <div className="col-lg-12 p-0 services-img plantationshutters">
              <Link to="/gallery/plantationshutters">
                <h3>Plantation Shutters</h3>
                <span>
                  {photoLink} <FontAwesomeIcon icon={faChevronCircleRight} />
                </span>
              </Link>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-lg-12 p-0 services-img solarshades">
              <Link to="/gallery/solarshades">
                <h3>Solar Shades</h3>
                <span>
                  {photoLink} <FontAwesomeIcon icon={faChevronCircleRight} />
                </span>
              </Link>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-lg-12 p-0 services-img motorization">
              <Link to="/gallery/motorization">
                <h3>Motorization</h3>
                <span>
                  {videoLink} <FontAwesomeIcon icon={faChevronCircleRight} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
