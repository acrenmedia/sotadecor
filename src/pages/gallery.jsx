import React from "react";
import Layout from "../components/Layout";
import Services from "../components/Services/Services";

export default function Gallery() {
  return (
    <div>
      <Layout>
        <Services
          title="Gallery"
          photoLink="View Photos"
          videoLink="View Video"
        />
      </Layout>
    </div>
  );
}
