import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

const Recommendations = () => {
  const [rec, setRec] = useState([]);

  useEffect(() => {
    fetch("https://assignment-11-server-side-ebon.vercel.app/recommendations")
      .then((res) => res.json())
      .then((data) => setRec(data))
      .catch((error) => console.error("Error fetching recommendations:", error));
  }, []);

  return (
    <div className="my-12">
      <h1 className="text-5xl text-center my-8 font-semibold">Recommendations</h1>
      <hr className="mb-6" />

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {rec.map((r) => (
          <SwiperSlide key={r._id} className="flex-shrink-0">
            <div className="border p-4 mb-4 rounded-lg shadow-lg bg-gray-300 text-white w-[300px] h-[400px] ">
              <div className="flex flex-col items-center mb-4">
                <img
                  src={r.recommendedProductImage}
                  alt={r.recommendedProductName}
                  className="lg:w-44 lg:h-32 w-24 h-24 object-cover rounded-lg mb-4"
                />
                <div className="text-center w-full">
                  <h4 className="text-xl font-semibold text-gray-900">{r.recommendationTitle}</h4>
                  <p className="text-sm text-gray-800 mt-2">{r.recommendationReason}</p>
                  <div className="mt-4 text-xs text-gray-800">
                    <p>Recommended by: {r.recommenderName}</p>
                    <p>Email: {r.recommenderEmail}</p>
                    <p>{new Date(r.timestamp).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recommendations;
