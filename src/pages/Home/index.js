import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {
    const progressCircle = useRef();
    const progressContent = useRef();
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <section>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el:'.swiper-pagination',
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='swiper-slide container'>
                        <img src='/images/home1.jpg' alt='' />
                        <div className='home-text'>
                            <span>Marvel Universe</span>
                            <h1>Guardians off the Galaxy <br></br>Volume 2</h1>
                            <a href='' className='btn'>Book Now</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swiper-slide container'>
                        <img src='/images/home2.png' alt='' />
                        <div className='home-text'>
                            <span>Marvel Universe</span>
                            <h1>Thor: <br></br>Love and Thunder</h1>
                            <a href='' className='btn'>Book Now</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swiper-slide container'>
                        <img src='/images/home3.jpg' alt='' />
                        <div className='home-text'>
                            <span>Marvel Universe</span>
                            <h1>Spider-Man <br></br>No Way Home</h1>
                            <a href='' className='btn'>Book Now</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swiper-slide container'>
                        <img src='/images/home4.png' alt='' />
                        <div className='home-text'>
                            <span>Marvel Universe</span>
                            <h1>Avengers: <br></br>End Game</h1>
                            <a href='' className='btn'>Book Now</a>
                        </div>
                    </div>
                </SwiperSlide>
                <div className='autoplay-progress' slot='container-end'>
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
            <div className='swiper-pagination'></div>
        </section>
    )
}
