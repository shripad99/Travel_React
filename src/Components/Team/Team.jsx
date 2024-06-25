import React,  { useRef } from 'react';
import team1 from '../../Assets/agent-1.jpg'
import team2 from '../../Assets/agent-2.jpg'
import team3 from '../../Assets/agent-3.jpg'
import team4 from '../../Assets/agent-4.jpg'
import team5 from '../../Assets/agent-5.jpg'
import team6 from '../../Assets/agent-11.jpg'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './team.scss';


const membersData = [
    {
        id: 1,
        teamimg: team1,
        names: 'Fred Mercury',
    },
    {
        id: 2,
        teamimg: team2,
        names: 'Brian Mullen',
    },
    {
        id: 3,
        teamimg: team3,
        names: 'Anita May',
    },
    {
        id: 4,
        teamimg: team4,
        names: 'Robert Rich',
    },
    {
        id: 5,
        teamimg: team5,
        names: 'Anna Tully',
    },
    {
        id: 6,
        teamimg: team6,
        names: 'Hanry Frenk',
    }
]

const Team = () => {
    const swiperRef = useRef(null);

    return (
        <section className='teams section container mx-auto'>
            <div className="secContainer">
                <div className="teams-intro flex justify-between">
                    <div className="teams-title text-start">
                        <span className='text-sm'>Our Teams</span>
                        <h2>Meet Our Professional Team<br />To Guide You Best</h2>
                    </div>
                    <div className="secSlider flex">
                        <button className="flex items-center px-5" onClick={() => swiperRef.current?.slidePrev()}>
                        <FaArrowLeft />
                        </button>
                        <button className="flex items-center px-5" onClick={() => swiperRef.current?.slideNext()}>
                        <FaArrowRight />
                        </button>
                    </div>
                </div>
                <Swiper
                    spaceBetween={20}
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
                <div className='secCard grid lg:grid-cols-4 gap-2'>
                {membersData.map(({id,teamimg,names}) =>{
                    return(
                        <SwiperSlide key={id}>
                        <div class="p-4 border rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={teamimg} />
                                <div class="w-full">
                                    <h2 class="title-font font-medium text-lg text-gray-900">{names}</h2>
                                    <h3 class="text-gray-500 mb-3">Tour Guide</h3>
                                    <p class="mb-4">60 Activites</p>
                                    <span class="inline-flex">
                                        <a class="text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        )
                     })}
                    </div>
                    </Swiper>
                </div>
        </section>
    )
}

export default Team