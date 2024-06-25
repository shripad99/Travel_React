import React, { useRef } from 'react';
import './newactivity.scss';
import { GoClockFill } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import img5 from "../../Assets/agent2.jpg"
import activity1 from '../../Assets/activity2.jpg'
import activity2 from '../../Assets/activity3.jpg'
import activity3 from '../../Assets/activity6.jpg'
import activity4 from '../../Assets/activity14.jpg'
import activity5 from '../../Assets/activity16.jpg'
import activity6 from '../../Assets/activity17.jpg'
import { FaArrowLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const newData = [
  {
    id: 1,
    price1: 260,
    price2: 180,
    destiny: 'Ellis Island with Ferry',
    imgs: activity1
  },
  {
    id: 2,
    price1: 390,
    price2: 290,
    destiny: 'Barcelona Bike Tour',
    imgs: activity2
  },
  {
    id: 3,
    price1: 490,
    price2: 240,
    destiny: 'Sagrada Familia Ticket',
    imgs: activity3
  },
  {
    id: 4,
    price1: 490,
    price2: 240,
    destiny: 'Amsterdam Canal Cruise',
    imgs: activity4
  },
  {
    id: 5,
    price1: 380,
    price2: 190,
    destiny: 'Louvre Museum Ticket',
    imgs: activity5
  },
  {
    id: 6,
    price1: 160,
    price2: 120,
    destiny: 'Eiffel Tower Ticket',
    imgs: activity6
  }
]

const NewActivity = () => {
  const swiperRef = useRef(null);

  return (
    <section className="activites section ">
      <div className="section-container container mx-auto">
        <div className="section-header flex justify-between !flex-row">
          <div className="new-activity-title">
            <span>Newest Activites</span>
            <h2>Check out the latest activities <br />added to our directory </h2>
          </div>
          <div className="section-slider flex">
            <button className="flex items-center px-5" onClick={() => swiperRef.current?.slidePrev()}>
              <FaArrowLeft />
            </button>
            <button className="flex items-center px-5" onClick={() => swiperRef.current?.slideNext()}>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <Swiper
          spaceBetween={50}
          breakpoints={{
              320: {slidesPerView: 1},
              640: {slidesPerView: 2},
              768: {slidesPerView: 3},
              1024: {slidesPerView: 4},
          }}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => swiperRef.current = swiper}
        >
          <div className="mainContents grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-2">
            {newData.map(({ id, imgs, price1, price2, destiny }) => {
              return (
                <SwiperSlide key={id}>
                  <div className="cards !shadow-lg p-4 border rounded-md">
                    <div className="section-img rounded">
                      <img src={imgs} alt="activityimg" className='rounded-md'/>
                    </div>
                    <div className="section-content">
                      <div className="price-content !flex !justify-between my-4">
                        <span>Price: </span>
                        <div className="activityAmount">
                          <del>${price1}</del>
                          <strong className='text-2xl pl-2'>${price2}</strong>
                        </div>
                      </div>
                      <div className="activity-item-title headline">
                        <h3>
                          <a href="#card">{destiny}</a>
                        </h3>
                        <div className="activity-features !flex">
                          <div className="icon-text !flex gap-2 items-center">
                            <div className="icons1">
                              <GoClockFill />
                            </div>
                            <span>5 Days</span>
                          </div>
                          <div className="icon-text !flex gap-2 items-center">
                            <div className="icons1">
                              <IoLocationSharp />
                            </div>
                            <span>Italy</span>
                          </div>
                        </div>
                        <hr />
                      </div>
                      <div className="footer-contents flex">
                        <div className="footer-img">
                          <img src={img5} alt="img" />
                        </div>
                        <div className="footer-content">
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
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default NewActivity