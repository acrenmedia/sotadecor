import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import houzz from "../../assets/images/houzz/houzz-logo@logotyp.us.svg";
import "./CustomerReviews.css";

const CustomerReviews = () => {
  return (
    <div className="row m-0 mb-5 customer-reviews">
      <h2 className="text-center p-4">Customer Reviews</h2>
      <div className="col-lg-4 px-4 mb-4 flex-column d-flex justify-content-center align-items-center">
        <div className="review-card shadow d-flex flex-column align-items-center justify-content-evenly">
          <img className="p-2" width="150px" src={houzz} alt="Houzz logo" />
          <div className="customer-review px-5 py-2">
            <q>
              I was extremely happy with Sandy and Steve from presenting an
              estimate to completing the job. Their workmanship and
              professionalism was by far no less then one should expect and
              gets.
            </q>
            <span className="d-block text-end p-1">- John Critelli</span>
          </div>
          <div className="stars d-flex p-2">
            {[...Array(5)].map(() => {
              return <FontAwesomeIcon icon={faStar} color="gold" size="2x" />;
            })}
          </div>
        </div>
        <a
          className="review-btn p-3 text-center"
          href="https://www.houzz.com/professionals/window-treatments/sota-window-coverings-pfvwus-pf~1762534943#reviews"
          target="_blank"
          rel="noreferrer"
        >
          SEE REVIEWS
        </a>
      </div>
      <div className="col-lg-4 px-4 mb-4 flex-column d-flex justify-content-center align-items-center">
        <div className="review-card shadow d-flex flex-column align-items-center justify-content-evenly">
          <img className="p-2" width="150px" src={houzz} alt="Houzz logo" />
          <div className="customer-review px-5 py-2">
            <q>
              Sandy did an amazing job helping us select window treatments for
              our new home. Steven did a great job installing them. Their
              products are excellent and there is great variety. We highly
              recommend them them.
            </q>
            <span className="d-block text-end p-1">- Mindy Chermak</span>
          </div>
          <div className="stars d-flex p-2">
            {[...Array(5)].map(() => {
              return <FontAwesomeIcon icon={faStar} color="gold" size="2x" />;
            })}
          </div>
        </div>
        <a
          className="review-btn p-3 text-center"
          href="https://www.houzz.com/professionals/window-treatments/sota-window-coverings-pfvwus-pf~1762534943#reviews"
          target="_blank"
          rel="noreferrer"
        >
          SEE REVIEWS
        </a>
      </div>
      <div className="col-lg-4 px-4 mb-4 flex-column d-flex justify-content-center align-items-center">
        <div className="review-card shadow d-flex flex-column align-items-center justify-content-evenly">
          <img className="p-2" width="150px" src={houzz} alt="Houzz logo" />
          <div className="customer-review px-5 py-2">
            <q>
              Steve and Sandy are delightful. They were professional,
              knowledgeable, and efficient. I cannot image a more pleasant
              experience. I strongly recommend them.
            </q>
            <span className="d-block text-end p-1">- Pamela Maida</span>
          </div>
          <div className="stars d-flex p-2">
            {[...Array(5)].map(() => {
              return <FontAwesomeIcon icon={faStar} color="gold" size="2x" />;
            })}
          </div>
        </div>
        <a
          className="review-btn p-3 text-center"
          href="https://www.houzz.com/professionals/window-treatments/sota-window-coverings-pfvwus-pf~1762534943#reviews"
          target="_blank"
          rel="noreferrer"
        >
          SEE REVIEWS
        </a>
      </div>
    </div>
  );
};

export default CustomerReviews;
