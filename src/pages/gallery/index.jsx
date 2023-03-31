import React from "react";
import Layout from "../../components/Layout";
import Services from "../../components/Services/Services";

export default function Gallery() {
  return (
    <div>
      <Layout>
        <Services photoLink="View Photos" videoLink="View Video">
          <h1 className="text-center p-4">Gallery</h1>
        </Services>
      </Layout>
    </div>
  );
}

export const Head = () => (
  <>
    <title>
      Gallery | SOTA Window Coverings — Window Coverings in Delray Beach Florida
    </title>
    <meta
      name="description"
      content="Welcome to the SOTA Window Coverings photo gallery! Browse through our stunning collection of images showcasing our expertise in providing high-quality window treatment services in Delray Beach, Florida. As a family-owned business with over 15 years of experience, we are fully licensed and insured and specialize in Plantation Shutters (Wood and Poly), Solar Shades, Horizontal Shades, Verticals, and Motorization. Our 5-star reviews attest to our commitment to quality and customer satisfaction. Contact us today to schedule a consultation and discover how we can transform your windows into beautiful design elements."
    />
  </>
);
