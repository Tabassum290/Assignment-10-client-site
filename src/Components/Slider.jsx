import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Slide } from 'react-awesome-reveal';
import { Autoplay } from 'swiper/modules';

const Slider = () => {
    useEffect(() => {
        AOS.init({
            duration: 5500,
            once: true,
        });
    }, []);

    return (
        <div className="banner">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper h-[600px] my-2"
            >
                <SwiperSlide>
                    <div
                        id="slide-1"
                        data-aos="fade-up"
                        style={{
                            backgroundImage: 'url(https://i.ibb.co.com/WNFpF4Yg/ask-questions-faq-problem-curiosity-260nw-2439345127.webp)', // Fixed URL
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        className="relative h-[600px] text-white rounded-lg flex justify-around"
                    >
                     <div className="absolute inset-0 bg-black/40"></div>
                        <div className="flex flex-col items-center justify-center z-10">
                            <h2 className="text-5xl font-bold text-white">Welcome to Our Website</h2>
                            <p className="mt-4 text-lg">
                                Discover amazing content and connect with the community.
                            </p>
             
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        id="slide-2"
                        data-aos="fade-up"
                        style={{
                            backgroundImage: 'url(https://i.ibb.co.com/TBJcBSRp/portrait-cheerful-young-african-man-171337-8907.jpg)', // Fixed URL
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        className="relative h-[600px] text-white rounded-lg flex justify-around p-4"
                    >
                        <div className="absolute inset-0 bg-black/40"></div>

                        <div className="flex flex-col justify-center z-10">
                            <h2 className="text-5xl font-bold">Join Our Platform</h2>
                            <p className="mt-6 text-lg">Sign up today and start your journey with us.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        id="slide-3"
                        data-aos="fade-up"
                        style={{
                            backgroundImage: 'url(https://i.ibb.co/grFLtCy/istockphoto-2175339397-612x612.webp)', // Fixed URL
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        className="relative h-[600px] text-white rounded-lg flex justify-around p-4"
                    >

                        <div className="absolute inset-0 bg-black/40"></div>

                        <div className="flex flex-col justify-center z-10">
                            <h2 className="text-5xl font-bold">Stay Connected</h2>
                            <p className="mt-6 text-lg">
                                Follow us on social media for the latest updates.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <Slide direction="left" duration={800}>
                <h1 className="text-4xl my-6 font-semibold text-center">View Recent Queries</h1>
            </Slide>
            <hr></hr>
        </div>
    );
};

export default Slider;
