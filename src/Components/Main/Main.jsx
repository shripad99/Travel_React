import React from "react";
import { GoClockFill } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import "./main.scss";
import img1 from "../../Assets/activity-l1.jpg";
import img2 from "../../Assets/activity-l2.jpg";
import img3 from "../../Assets/activity-l3.jpg";
import img4 from "../../Assets/activity-l4.jpg";
import img5 from "../../Assets/agent2.jpg"

const Data = [
  {
    id: 1,
    imgSrc: img1,
    price1: "$390",
    price2: "$290",
    desTitle: "Ellis Island with Ferry",
  },
  {
    id: 2,
    imgSrc: img2,
    price1: "$280",
    price2: "$220",
    desTitle: "Rome: Street Food Tour",
  },
  {
    id: 3,
    imgSrc: img3,
    price1: "$370",
    price2: "$310",
    desTitle: "Vatican Museum Private",
  },
  {
    id: 4,
    imgSrc: img4,
    price1: "$380",
    price2: "$190",
    desTitle: "Doge Palace Ticket",
  },
];

const Main = () => {
  return (
    <section className="activites-3 section container mx-auto">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="section-title relative">
            <p className="title-watermark">Activities</p>
            <span>Best Activites</span>
            <h2>Browse Featured Activities</h2>
          </div>
        </div>

        <div className="mainContent grid grid-cols-1 md:grid-cols-4">
          {Data.map(({ id, imgSrc, price1, price2, desTitle }) => {
            return (
              <div className="secCard">
                <div className="secImg">
                  <img src={imgSrc} alt="" />
                </div>
                <div className="secContent">
                  <div className="priceContent flex">
                    <span>Price: </span>
                    <div className="activityAmount">
                      <del>{price1}</del>
                      <strong className="text-2xl ml-2">{price2}</strong>
                    </div>
                  </div>
                  <div className="activity-item-title-3 headline">
                    <h3>
                      <a href="#card">{desTitle}</a>
                    </h3>
                    <div className="activity-features-3 flex">
                      <div className="icon-text flex">
                        <div className="icon">
                          <GoClockFill />
                        </div>
                        5 Days
                      </div>
                      <div className="icon-text flex">
                        <div className="icon">
                          <IoLocationSharp />
                        </div>
                        London
                      </div>
                      <div className="icon-text flex">
                        <div className="icon">
                          <FaUsers />
                        </div>
                        Small
                      </div>
                      <div className="icon-text flex">
                        <div className="icon">
                          <FaRunning />
                        </div>
                        Skip Line
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="footerContent flex">
                    <div className="footerImg">
                      <img src={img5} alt="img" />
                    </div>
                    <div className="footerContents">
                      <h5>Michael Jack</h5>
                      <p>Example Agency</p>
                    </div>
                    <div className="footerbtn">
                      <button>
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Main;
