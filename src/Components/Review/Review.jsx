import React, { useRef } from 'react';
import reviewimg1 from '../../Assets/testimonial-img3.jpg';
import reviewimg2 from '../../Assets/testimonial-img2.jpg';
import reviewimg3 from '../../Assets/testimonial-img.jpg';
import './review.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const ReviewsData = [
    {
        id: 1,
        review_img: reviewimg1,
        exp: 'Best Experience',
        names: 'James Thomas'
    },
    {
        id: 2,
        review_img: reviewimg2,
        exp: 'Excellent Service',
        names: 'Mike Hanry'
    },
    {
        id: 3,
        review_img: reviewimg3,
        exp: 'Best Guide Ever',
        names: 'Elizabeth Theme'
    },
];

const Review = () => {
    const swiperRef = useRef(null);

    return (
        <section className='testimonals section'>
            <div className="secContainer max-w-7xl mx-auto">
                <div className="secIntro block md:flex justify-between">
                    <div className="review-intro text-center relative">
                        <p className='teams-watermark text-[40px] md:text-[80px] lg:text-[100px]'>Testimonals</p>
                        <span>Testimonals</span>
                        <h2>Our customers have a lot to say <br />about our services.</h2>
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
                    spaceBetween={50}
                    breakpoints={{
                        320: {slidesPerView: 1},
                        640: {slidesPerView: 1},
                        768: {slidesPerView: 2},
                        1024: {slidesPerView: 2},
                    }}
                    loop={true}
                    pagination
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => swiperRef.current = swiper}
                >
                    <div className='secCards grid grid-cols-1 md:grid-cols-2 gap-3'>
                        {ReviewsData.map(({ id, review_img, exp, names }) => (
                            <SwiperSlide key={id}>
                                <div className='inner-box shadow-md'>
                                    <div className='author-info'>
                                        <div className='thumb w-25 h-25'>
                                            <img src={review_img} alt="review" />
                                        </div>
                                        <h4>{names}</h4>
                                        <div className="locations">California, USA</div>
                                    </div>
                                    <div className='content'>
                                        <div className="rating-info">
                                            <h5>{exp}</h5>
                                            <div className="rating"></div>
                                        </div>
                                        <div className="text">
                                            Dolor sitam consectetur sed adipisicing <br />
                                            eiusmod tempor cididunt laboret dolors <br />
                                            magn aliquat enim sed minim veniam eu <br />
                                            nostrud lorem ipsum dolor.
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default Review;
