import { useEffect, useState } from "react";

const Populer = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/populer")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecommendedProducts(data);
      })
      .catch((error) => console.error("Error fetching popular recommendations:", error));
  }, []);

  return (
    <div>
      <h2 className="text-5xl font-semibold text-center text-gray-800 my-8">Popular Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendedProducts.map((rec) => (
          <section key={rec._id} className="w-[300px] h-[400px]  mx-auto ">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition">
              <img
                src={rec.productImage}
                alt={rec.productName}
                className="w-full h-56 object-cover p-2"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{rec.productName}</h3>
                <p className="text-sm text-gray-600 truncate">{rec.recommendationReason}</p>
                <div className="flex justify-center items-center mt-4">
                
                  <button className="bg-red-600 text-white px-2 py-2 rounded-lg text-sm hover:bg-red-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Populer;
