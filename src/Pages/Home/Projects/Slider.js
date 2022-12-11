import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { Autoplay } from 'swiper';

const Slider = ({ project_view }) => {

    return (
        <div className='mt-10 w-3/3 rounded-xl mx-auto'>
            <p className='text-center text-white text-2xl mb-5'>Screen Shot</p>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    project_view.map((data, index) => <SwiperSlide className='rounded-xl' key={index}><img className='rounded-xl' src={data.project_ss} alt="" /></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Slider;