import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul
        style={{
            height:'50px',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        }}
      >
        <div style={{ flex: "1", textDecoration:'none' }}>
          <a style={{  textDecoration:'none' }} href="/" key={""}>Home</a>
        </div>
        <div style={{ flex: "1" }}>
          <a style={{  textDecoration:'none' }} href="About" key={"#About"}>About Us</a>
        </div>
        <div style={{ flex: "1" }}>
          <a style={{  textDecoration:'none' }} key={'Services'} href="#Services">Services</a>
        </div>
        <div style={{ flex: "1" }}>
          <a style={{  textDecoration:'none' }} key={'Testimonials'} href="#Testimonials" >Testimonials</a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
