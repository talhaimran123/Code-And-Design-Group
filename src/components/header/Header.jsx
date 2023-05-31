import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/images/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "Portfolio",
    path: "portfolio",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setToggle(false);
  }, [location.pathname]);

  return (
    <div className="header">
      <Link to={"/"}>
        <img src={logo} alt="logo" className={toggle ? `invert` : ""} />
      </Link>
      <div className="icon-box">
        {toggle ? (
          <AiOutlineClose className="icon" onClick={() => setToggle(!toggle)} />
        ) : (
          <FaBars className="icon" onClick={() => setToggle(!toggle)} />
        )}
      </div>
      {toggle ? (
        <div className="dropdown">
          <div className="left-sec">
            {navLinks.map((item, index) => (
              <NavLink key={index} to={item.path}>
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="right-sec">
            <ImQuotesLeft className="icon one" />
            <p>
              Welcome to Code And Design Group, where the perfect blend of
              innovation and creativity gives birth to remarkable brand
              journeys. We are fueled by a deep passion for transforming ideas
              into captivating designs that empower businesses to shine in the
              ever-evolving digital landscape. With a meticulous eye for detail
              and an unwavering commitment to excellence, we weave magic into
              every pixel, bringing your brand's vision to life with utmost
              dedication and finesse
            </p>
            <ImQuotesRight className="icon two" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
