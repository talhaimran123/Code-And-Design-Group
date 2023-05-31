import React, { useState } from "react";
import "./pricingPackage.scss";
import { IoIosClose } from "react-icons/io";
import { TiTick } from "react-icons/ti";

const PricingPackage = ({ name, price, details }) => {
  return (
    <>
      <div className="package">
        <div className="head">{name}</div>

        <div className="details">
          <ul>
            {details.map((item, index) => (
              <li>
                {item.isTrue ? (
                  <div className="tick-box">
                    {" "}
                    <TiTick className="icon" color={"blue"} />{" "}
                  </div>
                ) : (
                  <div className="cut-box">
                    {" "}
                    <IoIosClose className="icon" color={"red"} />{" "}
                  </div>
                )}
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="price">${price}/mon</div>
        <a href="tel:+1 (888) 784-0464">BUY NOW</a>

      </div>
    </>
  );
};

export default PricingPackage;
