import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Coming() {
    const progressCircle = useRef();
    const progressContent = useRef();
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <section className='coming' id='coming'>
            <h2 className='heading'>Coming Soon</h2>
            {/* coming container */}
            <div className='coming-container swiper'>
                <div className='swiper-wrapper'>
                    <Swiper
                        spaceBetween={30}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            568: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            968: {
                                slidesPerView: 5
                            },
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            {/* box-1 */}
                            <div className='swiper-slide box'>
                                <div className='box-img'>
                                    <img src='/images/c1.jpg' alt='' />
                                </div>
                                <h3>Ant-Man and the Wasp:Quantumania</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* box-2 */}
                            <div className='swiper-slide box'>
                                <div className='box-img'>
                                    <img src='/images/c2.jpg' alt='' />
                                </div>
                                <h3>The Flash</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* box-3 */}
                            <div className='swiper-slide box'>
                                <div className='box-img'>
                                    <img src='/images/c3.jpg' alt='' />
                                </div>
                                <h3>Guardians of the Galaxy Vol.3</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* box-4 */}
                            <div className='swiper-slide box'>
                                <div className='box-img'>
                                    <img src='/images/c4.jpg' alt='' />
                                </div>
                                <h3>Shazam! Fury of the Gods</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* box-5 */}
                            <div className='swiper-slide box'>
                                <div className='box-img'>
                                    <img src='/images/c5.jpg' alt='' />
                                </div>
                                <h3>Anquaman and the Lost Kingdom</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* box-6 */}
                            <div className='swiper-slide box'>
                                <div className='box-img'>
                                    <img src='/images/c6.jpg' alt='' />
                                </div>
                                <h3>John Wick:Chapter 4</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* box-7 */}
                            <div className='swiper-slide box'>
                                <div className='box-img'>
                                    <img src='/images/c7.jpg' alt='' />
                                </div>
                                <h3>Transformer rise of the beats</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* box-8 */}
                            <div className='swiper-slide box'>
                                <div className='box-img'>
                                    <img src='/images/c8.jpg' alt='' />
                                </div>
                                <h3>Mission: Impossible 7</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* box-9 */}
                            <div className='swiper-slide box'>
                                <div className='box-img'>
                                    <img src='/images/c9.png' alt='' />
                                </div>
                                <h3>Deadpool 3</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* box-10 */}
                            <div className='swiper-slide box'>
                                <div className='box-img'>
                                    <img src='/images/c10.jpg' alt='' />
                                </div>
                                <h3>Dune: Part two</h3>
                            </div>
                        </SwiperSlide>
                        <div className='autoplay-progress' slot='container-end'>
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
