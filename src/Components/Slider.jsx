import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Slide } from 'react-awesome-reveal';
import { FaSearch } from 'react-icons/fa';
import { Autoplay } from 'swiper/modules';

const Slider = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
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
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        id="slide-1"
                        data-aos="fade-up"
                        style={{
                            backgroundImage: 'url(https://i.ibb.co/W2d6csZ/istockphoto-1691979037-612x612.webp)', // Fixed URL
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        className="relative h-[500px] text-white rounded-lg flex justify-around p-4"
                    >

                        <div className="absolute inset-0 bg-black/40"></div>

                        <div className="flex flex-col items-center justify-center z-10">
                            <h2 className="text-4xl font-bold text-white">Welcome to Our Website</h2>
                            <p className="mt-4">
                                Discover amazing content and connect with the community.
                            </p>
                            <div className="w-full border-black border-2 rounded-xl block lg:hidden md:hidden m-6 mx-auto">
                                <label className="input flex items-center gap-2">
                                    <input type="text" className="grow" placeholder="Search" />
                                    <button className="text-black text-2xl">
                                        <FaSearch />
                                    </button>
                                </label>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        id="slide-2"
                        data-aos="fade-up"
                        style={{
                            backgroundImage: 'url(https://i.ibb.co/5BTbsgY/photo-1551731409-43eb3e517a1a.jpg)', // Fixed URL
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        className="relative h-[500px] text-white rounded-lg flex justify-around p-4"
                    >
                        <div className="absolute inset-0 bg-black/40"></div>

                        <div className="flex flex-col justify-center z-10">
                            <h2 className="text-4xl font-bold">Join Our Platform</h2>
                            <p className="mt-4">Sign up today and start your journey with us.</p>
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
                        className="relative h-[500px] text-white rounded-lg flex justify-around p-4"
                    >

                        <div className="absolute inset-0 bg-black/40"></div>

                        <div className="flex flex-col justify-center z-10">
                            <h2 className="text-4xl font-bold">Stay Connected</h2>
                            <p className="mt-4">
                                Follow us on social media for the latest updates.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <Slide direction="left" duration={800}>
                <h1 className="text-4xl my-6 font-semibold text-center">View Some Query</h1>
            </Slide>
        </div>
    );
};

export default Slider;
