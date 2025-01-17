import React, { useEffect, useState, useContext } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Update = () => {
  const query = useLoaderData();
  const [allQueries, setAllQueries] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://assignment-11-server-side-ebon.vercel.app/query")
      .then((res) => res.json())
      .then((data) => setAllQueries(data))
      .catch((error) => console.error("Error fetching queries:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const productBrand = e.target.productBrand.value;
    const productImage = e.target.productImage.value;
    const queryTitle = e.target.queryTitle.value;
    const boycottingReason = e.target.boycottingReason.value;
    const email = user.email;
    const name = user.displayName || "Anonymous";
    const photo = user.photoURL;
    const currentDateTime = new Date().toISOString();

    const updatedInfo = {
      productName,
      productBrand,
      productImage,
      queryTitle,
      boycottingReason,
      email,
      name,
      photo,
      createdAt: currentDateTime,
      recommendationCount: 0,
    };

    fetch(
      `https://assignment-11-server-side-ebon.vercel.app/query/${query._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Your query has been updated successfully.",
            icon: "success",
            confirmButtonText: "Okay",
          }).then(() => {
            navigate("/myqueries");
          });
        }
      })
      .catch((error) => {
        console.error("Error updating query:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };

  return (
    <div>
      <Navbar />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto my-10">
        <div className="col-span-2">
          <div className="bg-white text-black p-6 rounded-lg shadow-md w-full ">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Update Query: {query.productName}
            </h1>
            <hr className="mb-4" />
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  name="productName"
                  defaultValue={query.productName}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">
                  Product Brand
                </label>
                <input
                  type="text"
                  name="productBrand"
                  defaultValue={query.productBrand}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">
                  Product Image URL
                </label>
                <input
                  type="url"
                  name="productImage"
                  defaultValue={query.productImage}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">
                  Query Title
                </label>
                <input
                  type="text"
                  name="queryTitle"
                  defaultValue={query.queryTitle}
                  placeholder="e.g., Is there any better product that gives me the same quality?"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-2">
                  Boycotting Reason Details
                </label>
                <textarea
                  name="boycottingReason"
                  defaultValue={query.boycottingReason}
                  rows="4"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white font-bold py-2 rounded-md hover:bg-gray-700 transition"
              >
                Update Query
              </button>
            </form>
          </div>
        </div>

        <div className="border-2 p-6 rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold mb-4">All Queries</h2>
          <hr className="mb-4" />
          <div>
            {allQueries.length > 0 ? (
              allQueries.map((singleQuery) => (
                <Link
                  to="/myqueries"
                  key={singleQuery._id}
                  className="mb-4 rounded-lg p-4 shadow-sm"
                >
                  <img
                    src={singleQuery.productImage}
                    alt={singleQuery.productName}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-lg font-semibold">
                    {singleQuery.productName}
                  </h3>
                  <p className="text-gray-700">{singleQuery.queryTitle}</p>
                </Link>
              ))
            ) : (
              <p className="text-gray-500">No queries found.</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Update;
