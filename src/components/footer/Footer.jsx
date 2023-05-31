import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../header/Header";
import "./footer.scss";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/insta.svg";
import twitter from "../../assets/images/twitter.svg";
import footerlogo from "../../assets/images/footer-logo.png";
import { TiLocation } from "react-icons/ti";
import { BsFillPhoneFill } from "react-icons/bs";
import { IoIosMail, IoIosTimer } from "react-icons/io";
import { serviceCardsData } from "../../assets/data/serviceCardsData";

const Footer = () => {
  const serviceLinks = [
    serviceCardsData.map((item) => {
      return {
        name: `${item.title}`,
        path: `/services/${item.id}`,
      };
    }),
  ];
  console.log(serviceLinks);

  return (
    <div className="footer">
      <div className="footer-content">

        <div className="company">
          <Link to={"/"}>
            <img src={footerlogo} alt="logo" />
          </Link>
          <p>
            Welcome to Code And Design Group, where the perfect blend of
            innovation and creativity gives birth to remarkable brand journeys.
          </p>

          <div className="icons">
            <Link to={"https://www.facebook.com/codeanddesigngroup"} target="_blank" className="fb">
              <img src={facebook} alt="facebook" />
            </Link>
            <Link to={"https://www.instagram.com/codeanddesigngroup/"} target="_blank" className="insta">
              <img src={instagram} alt="instagram" />
            </Link>
            <Link to={"https://twitter.com/info_cadg"} target="_blank" className="twitter">
              <img src={twitter} alt="twitter" />
            </Link>
          </div>
        </div>

        <div className="menu">
          <h3>Quick Info</h3>
          {navLinks.map((item, index) => (
            <NavLink key={index} to={item.path}>
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="services">
          <h3>Services</h3>
          {serviceLinks[0].map((item, index) => (
            <NavLink key={index} to={item.path}>
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="info">
          <h3>Contact Info</h3>

          <div>
            <TiLocation
              className="icon"
              style={{ width: "45px", height: "auto" }}
            />
            <p>14402 W BELLFORT ST SUGAR LAND TX 77498</p>
          </div>

          <div>
            <BsFillPhoneFill className="icon" />
            <p>+1 (888) 784-0464</p>
          </div>

          <div>
            <IoIosMail className="icon" />
            <p>info@codeanddesigngroup.com</p>
          </div>

          <div>
            <IoIosTimer className="icon" />
            <p>Working Hours Mon - Fri 9 AM - 7 PM EST</p>
          </div>
        </div>

      </div>

      <div className="copyrights">
            <p>&copy; 2023 <Link to={'https://www.codeanddesigngroup.com/'}>codeanddesigngroup.com</Link> | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
