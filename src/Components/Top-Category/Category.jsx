import React from "react";
import icon1 from "../../Assets/ticket.svg";
import icon2 from "../../Assets/caravan.svg";
import icon3 from "../../Assets/diving-glasses.svg";
import icon4 from "../../Assets/cruise-ship.svg";
import icon5 from "../../Assets/motorbike-motorcycle-scooter.svg";
import icon6 from "../../Assets/coffee-cup-food.svg";
import icon7 from "../../Assets/flip-flops.svg";
import icon8 from "../../Assets/backpack-bag-holidays.svg";
import './category.scss';

const CategoryData = [
  {
    id: 1,
    icon: icon1,
    names: "Attraction",
  },
  {
    id: 2,
    icon: icon2,
    names: "Caravan",
  },
  {
    id: 3,
    icon: icon3,
    names: "Diving",
  },
  {
    id: 4,
    icon: icon4,
    names: "Cruise",
  },
  {
    id: 5,
    icon: icon5,
    names: "City Travel",
  },
  {
    id: 6,
    icon: icon6,
    names: "Food Drinks",
  },
  {
    id: 7,
    icon: icon7,
    names: "Beach",
  },
  {
    id: 8,
    icon: icon8,
    names: "Camping",
  },
];

const Category = () => {
  return (
    <section className="category-section-2">
      <div className="container mx-auto">
        <div className="category-title text-center relative mb-5">
          <p className="title-watermark text-[60px] md:text-[80px] lg:text-[100px]">Categories</p>
          <span>Top Categories</span>
          <h2>Browse By Category</h2>
        </div>
        <div className="category-content-2 grid md:grid-cols-4 gap-4 mx-auto">
          {CategoryData.map(({id, icon, names}) =>{
              return(
                <div className="category-innerbox-2 flex justify-center flex-col shadow-md">
                  <div className="category-icon">
                    <img src={icon} alt="icons" className="fill-cyan-500"/>
                  </div>
                  <div className="category-text">
                    <h3>
                      <a href="#">{names}</a>
                    </h3>
                  </div>
                </div>
              )
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
