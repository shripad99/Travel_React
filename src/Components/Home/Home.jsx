import React from 'react';
import './home.scss'
import imgslider1 from '../../Assets/slide-1.jpg'
import imgslider2 from '../../Assets/slide-2.jpg'
import imgslider3 from '../../Assets/slide-3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Navigation } from 'swiper/modules';


const homedata = [
  {
    id: 1,
    imgSrc : imgslider1,
    names: 'Venice City Tour',
  },
  {
    id: 1,
    imgSrc : imgslider2,
    names: 'Rome Private Tour',
  },
  {
    id: 1,
    imgSrc : imgslider3,
    names: 'Amsterdam Canal Cruise',
  }
]

const Home = () => {
  
  return (
    <section className='home'>
      <Swiper
      className='relative group'
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        autoplay={{ delay: 3000 }}
        modules={[Navigation]}
      >
        {homedata.map(({ id, imgSrc, names }) => (
          <SwiperSlide key={id}>
            <div className="slide relative" style={{ backgroundImage: `url(${imgSrc})` }}>
              <div className="overlay">
                <div className="homeText">
                  <h1 className='title'>{names}</h1>
                  <p className='subTitle z-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <button className='btn'>
                    <a href='activity'>Browse Activity</a>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className='top-[50%] absolute z-10 button-next-slide group-hover:left-0 -left-[23rem] duration-500 w-[40px] h-[40px] text-[#fff] bg-[#FF6525] grid place-items-center'>
          <FaChevronLeft />
        </div>
        <div className='top-[50%] absolute z-10 button-prev-slide group-hover:right-0 -right-[23rem] duration-500 w-[40px] h-[40px] text-[#fff] bg-[#FF6525] grid place-items-center'>
          {" "}
          <FaChevronRight />
        </div>
      </Swiper>
        <div className='homeCard grid grid-cols-1 md:grid-cols-4'>
          <div className='locationDiv'>
            <label htmlFor='location'>Location</label>
            <input type='text' placeholder='Dream Destination'></input>
          </div>

          <div className='distDiv'>
            <label htmlFor='distance'>Location</label>
            <input type='text' placeholder='11/Meters'></input>
          </div>

          <div className='priceDiv'>
            <label htmlFor='price'>Location</label>
            <input type='text' placeholder='$140-$500'></input>
          </div>

          <button className='btn'>Search</button>
        </div>
    </section>
  )
}

export default Home