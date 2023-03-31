import React, { useState } from "react";
import Layout from "../components/Layout";
import "./styles/contact.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [message, setMessage] = useState("");

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
            <form
              name="contact"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
              className="form form--contact"
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
            {/* <form
              name="contact"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="d-none">
                <label htmlFor="bot-field">
                  Don’t fill this out if you’re human:
                </label>
                <input name="bot-field" />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email-address">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email-address"
                  name="emailAddress"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone-number">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone-number"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="textarea-1">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  rows="10"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="global-btn submitBtn">
                Submit
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
