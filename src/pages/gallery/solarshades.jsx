import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import IMG from "../../assets/images/gallery/solarshades/IMG_5186.jpeg";
import IMG2 from "../../assets/images/gallery/solarshades/IMG_5187.jpeg";
import IMG3 from "../../assets/images/gallery/solarshades/IMG_5189.jpeg";
import IMG4 from "../../assets/images/gallery/solarshades/IMG_5190.jpeg";
import IMG5 from "../../assets/images/gallery/solarshades/IMG_5191.jpeg";
import IMG6 from "../../assets/images/gallery/solarshades/IMG_5192.jpeg";
import IMG7 from "../../assets/images/gallery/solarshades/IMG_5193.jpeg";
import IMG8 from "../../assets/images/gallery/solarshades/IMG_5194.jpeg";

export default function SolarShades() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center p-4">Solar Shades</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-3 gallery-img">
            <img className="w-100 h-100" src={IMG} alt="Solar Shades" />
          </div>
          <div className="col-lg-6 mb-3 gallery-img">
            <img className="w-100 h-100" src={IMG2} alt="Solar Shades" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-3 gallery-img">
            <img className="w-100 h-100" src={IMG3} alt="Solar Shades" />
          </div>
          <div className="col-lg-6 mb-3 gallery-img">
            <img className="w-100 h-100" src={IMG4} alt="Solar Shades" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-3 gallery-img">
            <img className="w-100 h-100" src={IMG5} alt="Solar Shades" />
          </div>
          <div className="col-lg-6 mb-3 gallery-img">
            <img className="w-100 h-100" src={IMG6} alt="Solar Shades" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-3 gallery-img">
            <img className="w-100 h-100" src={IMG7} alt="Solar Shades" />
          </div>
          <div className="col-lg-6 mb-3 gallery-img">
            <img className="w-100 h-100" src={IMG8} alt="Solar Shades" />
          </div>
        </div>
        <Link className="button button--dark mx-auto my-4" to="/gallery">
          GO BACK
        </Link>
      </div>
    </Layout>
  );
}
