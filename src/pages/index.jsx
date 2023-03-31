import * as React from "react";
import Layout from "../components/Layout";
import { Carousel } from "react-bootstrap";
import { Link } from "gatsby";
import "./styles/index.css";
import IMG1 from "../assets/images/index/IMG_5117.jpeg";
import IMG2 from "../assets/images/index/IMG_5119.jpeg";
import IMG3 from "../assets/images/index/IMG_5120.jpeg";
import IMG4 from "../assets/images/global/IMG_5136.jpeg";
import IMG5 from "../assets/images/index/IMG_5161.jpeg";
import IMG6 from "../assets/images/index/IMG_5130.jpeg";
import IMG7 from "../assets/images/index/IMG_5131.jpeg";
import IMG8 from "../assets/images/index/IMG_5138.jpeg";
import Services from "../components/Services/Services";

export default function Home() {
  return (
    <Layout>
      <div className="row m-0 hero">
        <div className="col-lg-7 p-0">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={IMG1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={IMG2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={IMG3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-lg-5 d-flex justify-content-center flex-column consult">
          <div className="consult__head text-center">
            <h3>FREE CONSULTATION</h3>
            <span>Schedule your free consultation today!</span>
          </div>
          <div className="divider"></div>
          <form className="form">
            <div className="name-group">
              <div className="input-field">
                <label htmlFor="first-name">First Name*</label>
                <input name="first-name" type="text" />
              </div>
              <div className="input-field">
                <label htmlFor="last-name">Last Name*</label>
                <input name="last-name" type="text" />
              </div>
            </div>
            <div className="input-field">
              <label htmlFor="phone-number">Phone Number*</label>
              <input name="phone-number" type="text" />
            </div>
            <div className="input-field">
              <label htmlFor="email-address">Email Address*</label>
              <input name="email-address" type="text" />
            </div>
            <div className="input-field">
              <label htmlFor="project-zip">Project Zip Code*</label>
              <input name="project-zip" type="text" />
            </div>
            <div className="input-field">
              <label htmlFor="message">Message*</label>
              <textarea name="message" cols="30" rows="5"></textarea>
            </div>
            <button className="button consult__btn mx-auto" type="submit">
              SCHEDULE NOW
            </button>
          </form>
        </div>
      </div>

      <div className="row m-0 section section--dark">
        <div className="col-lg-4 d-flex justify-content-center align-items-center p-0">
          <img
            src={IMG4}
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
            <h2>WE'VE GOT YOU COVERED</h2>
            <span className="section__name">Licensed & Insured</span>
            <p>
              Get your windows done with confidence as we are fully licensed and
              insured. Our specializations include Plantation Shutters (Wood and
              Poly), Solar Shades, Horizontal Shades, Verticals, and
              Motorization.
            </p>
            <Link className="button button--light" to="/gallery">
              SEE GALLERY
            </Link>
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center p-0">
          <img
            src={IMG5}
            width="100%"
            height="100%"
            alt="Plantation Shutters"
          />
        </div>
      </div>

      <div className="row m-0">
        <div className="col-lg-4 p-0">
          <img className="banner-img" src={IMG6} alt="Plantation Shutters" />
        </div>
        <div className="col-lg-4 p-0">
          <img className="banner-img" src={IMG7} alt="Plantation Shutters" />
        </div>
        <div className="col-lg-4 p-0">
          <img className="banner-img" src={IMG8} alt="Plantation Shutters" />
        </div>
      </div>
      <Services photoLink="Learn More" videoLink="Learn More">
        <h2 className="text-center p-4">Services</h2>
      </Services>
    </Layout>
  );
}
