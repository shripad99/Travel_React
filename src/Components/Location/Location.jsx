import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import "./location.scss";
import img1 from "../../Assets/location-1.jpg";
import img2 from "../../Assets/location-2.jpg";
import img3 from "../../Assets/location-3.jpg";
import img4 from "../../Assets/location-6.jpg";

const LocData = [
  {
    id: 1,
    imgSrc: img1,
    loc_name: "Madrid",
    price: "$168",
  },
  {
    id: 2,
    imgSrc: img2,
    loc_name: "Paris",
    price: "$639",
  },
  {
    id: 3,
    imgSrc: img3,
    loc_name: "Rome",
    price: "$749",
  },
  {
    id: 4,
    imgSrc: img4,
    loc_name: "Venice",
    price: "$265",
  },
];

const Location = () => {
  return (
    <section className="location max-w-7xl mx-auto">
      <div className="secContainer">
        <div className="secIntro flex">
          <div className="secTitle">
            <p>Locations</p>
            <h2>
              Wouldn't you like to be in
              <br />
              the best locations in the world?
            </h2>
          </div>
          <div className="secSlider">
            <button className="flex items-center px-5">
              <FaArrowLeft className="cursor-pointer"/>
            </button>
            <button className="flex items-center px-5">
              <FaArrowRight className="cursor-pointer"/>
            </button>
          </div>
        </div>

        <div className="mainContent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {LocData.map(({id,imgSrc,loc_name,price}) => {
            return (
              <div className="destination-single">
                <div className="destination-img">
                  <img src={imgSrc} alt="location" />
                </div>
                <div className="destination-content">
                  <div className="content-left">
                    <h5>{loc_name}</h5>
                    <small>From 8 Jun 2021</small>
                  </div>
                  <div className="content-right">
                    <h5>{price}</h5>
                    <span>Per Day</span>
                  </div>
                </div>
                <div className="destination-btn">
                  <a href="#dest">2 activites</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Location;
