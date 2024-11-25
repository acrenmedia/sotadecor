import React, { useState } from "react";
import Layout from "../components/Layout";
import { Alert, Carousel } from "react-bootstrap";
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
import IMG9 from "../assets/images/index/IMG_0012.jpeg";
import IMG10 from "../assets/images/index/IMG_0013.jpeg";
import IMG11 from "../assets/images/index/IMG_0651.jpeg";
import LOGO from "../assets/images/logo/SOTA.png";
import RS_LOGO from "../assets/images/index/AUTHORIZED_DEALER_LOGO.png";
import Services from "../components/Services/Services";

export default function Home() {
  const [show, setShow] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [message, setMessage] = useState("");

  const [variant, setVariant] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      firstName !== "" &&
      lastName !== "" &&
      phoneNumber !== "" &&
      email !== "" &&
      zipCode !== "" &&
      message !== ""
    ) {
      const myForm = e.target;
      const formData = new FormData(myForm);

      fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          setFirstName("");
          setLastName("");
          setPhoneNumber("");
          setEmail("");
          setZipCode("");
          setMessage("");

          setVariant("success");
          setAlertMessage("Success");
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 3000);
        })
        .catch((error) => {
          setVariant("danger");
          setAlertMessage(error);
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 3000);
        });
    } else {
      setVariant("danger");
      setAlertMessage(
        "There is an error in your submission. Please make sure that all fields are filled out correctly."
      );
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  };

  return (
    <Layout>
      <div className="row m-0 hero">
        <div className="col-lg-7 p-0">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={IMG10}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={IMG1}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={IMG11}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={IMG2}
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={IMG9}
                alt="Fifth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={IMG3}
                alt="Sixth slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-lg-5 d-flex justify-content-center flex-column consult">
          <div className="sota-logo sota-logo--consult">
            <img src={LOGO} alt="SOTA Window Coverings logo" />
            <span>SOTA WINDOW COVERINGS</span>
          </div>
          <span className="d-block text-center mt-1 mb-4 consult__phone">
            <a href="tel: 5617054900">(561) 705-4900</a>
          </span>
          <div className="consult__head text-center">
            <h3>FREE CONSULTATION</h3>
            <span>Schedule your free consultation today!</span>
            <div class="sota-logo sota-logo--consult">
              <img
                src={RS_LOGO}
                alt="SOTA Window Coverings logo"
              />
            </div>
          </div>
          <div className="divider"></div>
          <Alert className="my-4 text-center" show={show} variant={variant}>
            {alertMessage}
          </Alert>
          <form
            name="consultation"
            netlify-honeypot="bot-field"
            data-netlify="true"
            className="form"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="consultation" />
            <div className="d-none">
              <label htmlFor="bot-field">
                Don’t fill this out if you’re human:
              </label>
              <input name="bot-field" />
            </div>
            <div className="name-group">
              <div className="input-field">
                <label htmlFor="first-name">First Name*</label>
                <input
                  name="first-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="last-name">Last Name*</label>
                <input
                  name="last-name"
                  type="text"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="input-field">
              <label htmlFor="phone-number">Phone Number*</label>
              <input
                name="phone-number"
                type="text"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="email-address">Email Address*</label>
              <input
                name="email-address"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="project-zip">Project Zip Code*</label>
              <input
                name="project-zip"
                type="text"
                value={zipCode}
                onChange={(e) => {
                  setZipCode(e.target.value);
                }}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="message">Message*</label>
              <textarea
                name="message"
                cols="30"
                rows="5"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              ></textarea>
            </div>
            <button className="button button--dark mt-2" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <div className="row m-0 section section--light">
        <div className="col-lg-8 d-flex flex-column justify-content-center order-2">
          <div className="section__desc">
            <h2>Authorized RS Shutter Manufacturing Dealer</h2>
            <p>
              As an authorized dealer for RS Shutter Manufacturing, we offer
              locally made, premium plantation shutters with fast delivery and
              exceptional quality. Our partnership ensures you receive custom
              poly or wood shutters, crafted to your exact specifications, with
              the reliability and expertise of a trusted local manufacturer.
            </p>
            <Link className="button button--light" to="/contact">
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center p-0">
          <img
            src={RS_LOGO}
            width="100%"
            height="100%"
            alt="Plantation Shutters"
          />
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
              SOTA Window Coverings is a family-owned business, proudly serving
              homes and businesses in Delray Beach and the surrounding areas.
              With over 20 years of experience, we are dedicated to delivering
              exceptional, personalized window treatment solutions, always
              committed to providing the highest level of service and quality.
            </p>
            <Link className="button button--dark" to="/contact">
              GET A FREE QUOTE
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
              Rest easy knowing your window treatments are in the hands of a
              fully licensed and insured team. We specialize in custom
              plantation shutters (Poly and Wood) as well as a wide range of
              shades, including solar and motorized options, ensuring you get
              the perfect solution for your home or business.
            </p>
            <Link className="button button--light" to="/contact">
              GET A FREE QUOTE
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

export const Head = () => (
  <>
    <title>
      SOTA Window Coverings — Window Coverings in Delray Beach Florida
    </title>
    <meta
      name="description"
      content="Transform your windows with SOTA Window Coverings! Our family-owned business has been providing top-quality window treatment services for over 15 years in Delray Beach, Florida. As a fully licensed and insured company, we are committed to delivering exceptional service and specializing in Plantation Shutters (Poly & Wood) and Shades (Solar & Motorization). Our 5-star reviews speak to our dedication to quality and customer satisfaction. Contact us today to schedule a consultation and discover how we can turn your windows into stunning design elements."
    />
  </>
);
