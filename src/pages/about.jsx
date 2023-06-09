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
                <span>South Martin County</span>
                <span>Palm Beach County</span>
                <span>Broward County</span>
                <span>North Miami Dade County</span>
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

export const Head = () => (
  <>
    <title>
      About | SOTA Window Coverings — Window Coverings in Delray Beach Florida
    </title>
    <meta
      name="description"
      content="Welcome to SOTA Window Coverings! Based in Delray Beach, Florida, we've been providing top-quality window treatment services for 15 years. As a fully licensed and insured company, we are committed to providing our customers with the best possible experience. Our specialized services include Plantation Shutters (Poly & Wood) and Shades (Solar & Motorization), and our 5-star reviews speak to our dedication to quality and customer satisfaction. Contact us today to learn more about our services and how we can transform your windows into beautiful design elements."
    />
  </>
);
