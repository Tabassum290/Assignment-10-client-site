

const Populer = () => {
    return (
        <div>
            <section className="my-16 px-4">
  <h2 className="text-3xl font-semibold text-center text-red-900 mb-8">Popular Products</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {/* Product 1 */}
    <div className="max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition">
      <img src="product-image-url" alt="Product Name" className="w-full h-56 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">Product Name</h3>
        <p className="text-sm text-gray-600 truncate">This is a short description of the product...</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl text-red-600">$49.99</span>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition">View Details</button>
        </div>
      </div>
    </div>
    {/* Repeat similar blocks for other products */}
  </div>
</section>

        </div>
    );
};

export default Populer;