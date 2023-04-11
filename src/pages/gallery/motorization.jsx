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

export const Head = () => (
  <>
    <title>
      Motorization | SOTA Window Coverings — Window Coverings in Delray Beach
      Florida
    </title>
    <meta
      name="description"
      content="Discover the convenience of motorized blinds with SOTA Window Coverings! Watch our video showcasing the latest in motorization technology for your window treatments. As a family-owned business with over 15 years of experience, we are fully licensed and insured and specialize in a variety of window treatment services, including Plantation Shutters (Poly & Wood) and Shades (Solar & Motorization). Our 5-star reviews speak to our commitment to quality and customer satisfaction. Contact us today for a consultation and let us show you how motorized blinds can enhance the beauty and functionality of your home or business."
    />
  </>
);
