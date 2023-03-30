import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import IMG1 from "../assets/images/global/IMG_5136.jpeg";
import IMG2 from "../assets/images/about/IMG_5137.jpeg";
import "./styles/about.css";

export default function About() {
  return (
    <Layout>
      <div className="row m-0 section section--dark">
        <div className="col-lg-4 d-flex justify-content-center align-items-center p-0">
          <img
            src={IMG1}
            width="100%"
            height="100%"
            alt="Plantation Shutters"
          />
        </div>
        <div className="col-lg-8 d-flex flex-column justify-content-center">
          <div className="section__desc">
            <h2>WHO WE ARE</h2>
            <span className="section__name">SOTA Window Coverings</span>
            <p>
              We are a small, family owned business that provides professional
              window treatment services for homes and businesses in Delray Beach
              and surrounding areas. For over 15 years, we have been committed
              to providing the best service possible.
            </p>
            <Link className="button button--dark" to="/gallery">
              SEE GALLERY
            </Link>
          </div>
        </div>
      </div>

      <div className="row m-0 section section--light">
        <div className="col-lg-8 d-flex flex-column justify-content-center order-2">
          <div className="section__desc">
            <h2>AREAS WE SERVE</h2>
            <div className="areas d-flex">
              <ul>
                <li>Atlantis</li>
                <li>Boca Del Mar</li>
                <li>Boca Pointe</li>
                <li>Boca Raton</li>
                <li>Boynton Beach</li>
                <li>Briny Breezes</li>
                <li>Deerfield Beach</li>
                <li>Delray Beach</li>
                <li>Dunes Road</li>
              </ul>
              <ul>
                <li>Fort Lauderdale</li>
                <li>Golf</li>
                <li>Gulf Stream</li>
                <li>Hamptons at Boca Raton</li>
                <li>Highland Beach</li>
                <li>Hillsboro Pines</li>
                <li>Hypoluxo</li>
                <li>Kings Point</li>
                <li>Lake Worth</li>
              </ul>
              <ul>
                <li>Lantana</li>
                <li>Manalapan</li>
                <li>Miami</li>
                <li>Mission Bay</li>
                <li>Ocean Ridge</li>
                <li>Seminole Manor</li>
                <li>South Palm Beach</li>
                <li>Villages of Oriole</li>
                <li>Whisper Walk</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center p-0">
          <img
            src={IMG2}
            width="100%"
            height="100%"
            alt="Plantation Shutters"
          />
        </div>
      </div>
    </Layout>
  );
}
