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
