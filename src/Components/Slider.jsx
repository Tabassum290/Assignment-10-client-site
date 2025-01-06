import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { Slide } from 'react-awesome-reveal';
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
                className="mySwiper"
            >
                <SwiperSlide>
                    <div id="slide-1" data-aos="fade-up" style={{
                            backgroundImage: 'url(https://i.ibb.co/L0Hk29H/istockphoto-1508276184-2048x2048.webp)', // Correct URL format
                            backgroundSize: 'cover', // Ensure background image covers the full div
                            backgroundPosition: 'right', // Center the background image
                        }} className="flex justify-around h-80 text-white p-4 py-6 rounded-lg ">
                       <div className='flex flex-col items-center justify-center'>
                       <h2 className="text-4xl font-bold text-white">Welcome to Our Website</h2>
                       <p className="mt-4">Discover amazing content and connect with the community.</p>
                       </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide-2" data-aos="fade-up" style={{
                            backgroundImage: 'url(https://i.ibb.co.com/2d4XPZr/premium-photo-1675747504399-9b861506b00b.jpg)', // Correct URL format
                            backgroundSize: 'cover', // Ensure background image covers the full div
                            backgroundPosition: 'right', // Center the background image
                        }} className="flex justify-around h-80 text-white p-4 rounded-lg ">
                       
                        <div className='flex flex-col justify-center'>
                    <h2 className="text-4xl font-bold">Join Our Platform</h2>
                    <p className="mt-4">Sign up today and start your journey with us.</p>
                    </div>

                     </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide-3" data-aos="fade-up" style={{
                            backgroundImage: 'url(https://i.ibb.co.com/j8NvvBF/istockphoto-2150291607-2048x2048.webp)', // Correct URL format
                            backgroundSize: 'cover', // Ensure background image covers the full div
                            backgroundPosition: 'right', // Center the background image
                        }} className="flex justify-around h-80 text-white p-4 rounded-lg">
                    
                      <div className='flex flex-col justify-center'>
                    <h2 className="text-4xl font-bold">Stay Connected</h2>
                    <p className="mt-4">Follow us on social media for the latest updates.</p>
                    </div>
                    </div>
                    
                    
                </SwiperSlide>
            </Swiper>
<Slide direction="left" duration={800}>
<h1 className='text-4xl my-6 font-semibold text-center'>View Some Query</h1>
</Slide>
        </div>
    );
};

export default Slider;