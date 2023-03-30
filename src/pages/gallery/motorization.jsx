import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import video from "../../assets/videos/IMG_7710.mp4";

export default function Motorization() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center p-4">Motorization</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mb-3">
            <video width="100%" height="100%" controls autoPlay>
              <source src={video} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <Link className="button button--dark mx-auto my-4" to="/gallery">
          GO BACK
        </Link>
      </div>
    </Layout>
  );
}
