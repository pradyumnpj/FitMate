import React from "react";
import Hero from "../Hero/Hero";
import Programs from "../Programs/Programs";
import Reasons from "../Reasons/Reasons";
import Plans from "../Plans/Plans";
import Testimonials from "../Testimonials/Testimonials";
import Join from "../Join/Join";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <>
        <Hero />
        <Programs />
        <Reasons />
        <Plans />
        <Testimonials />
        <Join />
      </>
    </div>
  );
}

export default Home;
