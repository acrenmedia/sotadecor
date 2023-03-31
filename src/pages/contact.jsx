import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Layout from "../components/Layout";
import "./styles/contact.css";

export default function Contact() {
  const [show, setShow] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [message, setMessage] = useState("");

  let variant;
  let alertMessage;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      phoneNumber !== "" &&
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
          variant = "success";
          alertMessage = "Success";
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 3000);
        })
        .catch((error) => {
          variant = "danger";
          alertMessage = error;
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 3000);
        });
    } else {
      variant = "danger";
      alertMessage =
        "There is an error in your submission. Please make sure that all fields are filled out correctly.";
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center p-4">Contact</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Alert
              style={{ width: "90%" }}
              className="my-4 text-center mx-auto"
              show={show}
              variant={variant}
            >
              {alertMessage}
            </Alert>

            <form
              name="contact"
              netlify-honeypot="bot-field"
              data-netlify="true"
              className="form form--contact"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
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
                <label htmlFor="project-zip">Project Zip Code</label>
                <input
                  name="project-zip"
                  type="text"
                  value={zipCode}
                  onChange={(e) => {
                    setZipCode(e.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <label htmlFor="message">Message*</label>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
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
      </div>
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>
      Contact | SOTA Window Coverings — Window Coverings in Delray Beach Florida
    </title>
    <meta
      name="description"
      content="Contact SOTA Window Coverings today for all your window treatment needs! Our family-owned business has been providing top-quality services in Delray Beach, Florida for over 15 years. We are fully licensed and insured, and specialize in Plantation Shutters (Wood and Poly), Solar Shades, Horizontal Shades, Verticals, and Motorization. Our 5-star reviews speak to our commitment to delivering exceptional customer service and quality workmanship. Contact us today for a consultation and let us transform your windows into beautiful design elements that will enhance the beauty and functionality of your home."
    />
  </>
);
