import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const AddQuery = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div>
            <Navbar/>
            <section>
            <div className="text-white flex items-center justify-center p-10">
      <div className="bg-gray-900 text-black p-6 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">Add Query</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-red-600 mb-2">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
            //   value={formData.productName}
            //   onChange={handleChange}
            //   required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-red-600 mb-2">
              Product Brand
            </label>
            <input
              type="text"
              name="productBrand"
            //   value={formData.productBrand}
            //   onChange={handleChange}
            //   required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-red-600 mb-2">
              Product Image URL
            </label>
            <input
              type="url"
              name="productImage"
            //   value={formData.productImage}
            //   onChange={handleChange}
            //   required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-red-600 mb-2">
              Query Title
            </label>
            <input
              type="text"
              name="queryTitle"
            //   value={formData.queryTitle}
            //   onChange={handleChange}
            //   required
              placeholder="e.g., Is there any better product that gives me the same quality?"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-red-600 mb-2">
              Boycotting Reason Details
            </label>
            <textarea
              name="boycottingReason"
            //   value={formData.boycottingReason}
            //   onChange={handleChange}
            //   required
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-2 rounded-md hover:bg-red-700 transition"
          >
            Add Query
          </button>
        </form>
      </div>
    </div>
            </section>
   
        <Footer/>
        </div>
    );
};

export default AddQuery;