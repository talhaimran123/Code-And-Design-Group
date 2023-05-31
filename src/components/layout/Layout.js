import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Routers from "../../routes/Routers";
import ContactSection from "../contact-section/ContactSection";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Newsletter from "../newsletter/Newsletter";
import Testimonials from "../testimonial-card/Testimonials";

const Layout = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <>
      <Header />
      <Routers />

      {
        location.pathname !== "/" && 
        location.pathname !== "/contact" && 
        <ContactSection />
      }

      {location.pathname === "/" && 
        <>
          <Testimonials />
          <Newsletter />
        </>
      }

      <Footer />
    </>
  );
};

export default Layout;
