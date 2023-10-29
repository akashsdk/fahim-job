import React from "react";
import "./home.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";

export default function Home() {
  return (
    <div>
        <Navbar />
        <AboutUs />
        <Services />
        <Testimonials />
        <Footer />
    </div>
  );
}
