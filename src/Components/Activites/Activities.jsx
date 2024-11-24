import React from "react";
import activityimg1 from "../../Assets/activity-h1.jpg";
import activityimg2 from "../../Assets/activity-h2.jpg";
import activityimg3 from "../../Assets/activity-h3.jpg";
import activityimg4 from "../../Assets/activity-h4.jpg";
import "./activities.scss";
import agent1 from '../../Assets/agent1.jpg'
import agent2 from '../../Assets/agent5.jpg'
import agent3 from '../../Assets/agent3.jpg'
import agent4 from '../../Assets/agent4.jpg'
import { FaArrowRight } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";



const ActivData = [
  {
    id: 1,
    img1: activityimg1,
    head1: "Vatican Museum Private Tour",
    feature1: "5 Days",
    location: "London",
    group: "Small",
    feature2: "Skip Line",
    agents: agent1,
  },
  {
    id: 2,
    img1: activityimg2,
    head1: "Doge Palace Private Ticket",
    feature1: "45 Mins",
    location: "Italy",
    group: "Pickup",
    feature2: "Guide",
    agents: agent2,
  },
  {
    id: 3,
    img1: activityimg3,
    head1: "Ellis Island with Ferry",
    feature1: "45 Mins",
    location: "Italy",
    group: "Pickup",
    feature2: "Guide",
    agents: agent3,
  },
  {
    id: 4,
    img1: activityimg4,
    head1: "Rome: Street Food Tour",
    feature1: "45 Mins",
    location: "Italy",
    group: "Pickup",
    feature2: "Guide",
    agents: agent4,
  },
];

const Activities = () => {
  return (
    <section className="activities">
      <div className="mx-auto max-w-7xl">
        <div className="featured-intro">
          <div className="featured-title text-center lg:!text-start">
            <span>Most Viewed Activities</span>
            <h2>
              Some of the activities that <br />
              our customers frequently look at.
            </h2>
          </div>
        </div>
        <div className="location-content grid grid-cols-1 md:grid-cols-2 gap-2">
          {ActivData.map(
            ({ id, img1, head1, feature1, location, group, feature2, agents }) => {
              return (
                <div className="activity-card flex !items-start" id={id}>
                  <div className="activity-img relative">
                    <span className="price-badge">$120</span>
                    <img src={img1} alt="location" />
                    <span className="activity-hover-icon">
                      <a href="#"></a>
                    </span>
                  </div>
                  <div className="activity-text items-start">
                    <div className="activity-title-head">
                      <h3>{head1}</h3>
                      <div className="activity-features py-2">
                        <div className="icon-text !flex items-center">
                          <GoClockFill />
                          <div className="icons">{feature1}</div>
                        </div>
                        <div className="icon-text !flex items-center">
                          <IoLocationSharp />
                          <div className="icons">{location}</div>
                        </div>
                        <div className="icon-text !flex items-center">
                          <FaUsers />
                          <div className="icons">{group}</div>
                        </div>
                        <div className="icon-text !flex items-center">
                          <FaRunning />
                          <div className="icons">{feature2}</div>
                        </div>
                      </div>
                      <hr className="py-2"/>
                      <div className="activity-agent flex items-center gap-2">
                        <div className="activity-agent-img">
                          <img src={agents} alt="agent-img" />
                        </div>
                        <div className="activity-agent-text inline-grid">
                          <h4>Michael Jack</h4>
                          <span>Example Agency</span>
                        </div>
                        <div className="activity-btn flex gap-2 p-2">
                          <a href="#">Detail </a>
                          <FaArrowRight/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Activities;
