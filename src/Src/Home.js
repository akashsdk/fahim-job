import React from "react";
import "./home.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import Slider from "../Components/Slider";

export default function Home() {
  return (
    <div>
        <Navbar />
        <Slider />
        <AboutUs />
        <Services />
        <Testimonials />
        <Footer />
    </div>
  );
}
