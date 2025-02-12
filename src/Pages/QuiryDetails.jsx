import { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import AllReccomendations from "../Components/AllReccomendations";
import { AuthContext } from "../Provider/AuthProvider";

const QuiryDetails = () => {
  const selectedQuery = useLoaderData();
  const { user } = useContext(AuthContext);
  const [recommendationTitle, setRecommendationTitle] = useState("");
  const [recommendedProductName, setRecommendedProductName] = useState("");
  const [recommendedProductImage, setRecommendedProductImage] = useState("");
  const [recommendationReason, setRecommendationReason] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    fetch(
      `https://assignment-11-server-side-ebon.vercel.app/recommendations/${selectedQuery._id}`
    )
      .then((res) => res.json())
      .then((data) => setRecommendations(data))
      .catch((error) =>
        console.error("Error fetching recommendations:", error)
      );
  }, [selectedQuery._id]);

  const handleAddRecommendation = (e) => {
    e.preventDefault();
    const recommendationTitle = e.target.recommendationTitle.value;
    const recommendedProductName = e.target.recommendedProductName.value;
    const recommendedProductImage = e.target.recommendedProductImage.value;
    const recommendationReason = e.target.recommendationReason.value;

    const recommendationData = {
      recommendationTitle,
      recommendedProductName,
      recommendedProductImage,
      recommendationReason,
      userEmail: selectedQuery.email,
      userName: selectedQuery.name,
      userImage: selectedQuery.photo,
      recommenderEmail: user.email,
      recommenderName: user.name,
      queryId: selectedQuery._id,
      queryTitle: selectedQuery.queryTitle,
      productName: selectedQuery.productName,
      timestamp: new Date().toString(),
    };

    fetch(`https://assignment-11-server-side-ebon.vercel.app/recommendations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recommendationData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(
            "Success!",
            "Recommendation added successfully.",
            "success"
          );
          setRecommendations((prevRecommendations) => [
            ...prevRecommendations,
            { ...recommendationData, _id: data.insertedId },
          ]);
          setRecommendationTitle("");
          setRecommendedProductName("");
          setRecommendedProductImage("");
          setRecommendationReason("");
          fetch(
            `https://assignment-11-server-side-ebon.vercel.app/query/${selectedQuery._id}/increment`,
            {
              method: "PATCH",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error("Error incrementing recommendation count:", error);
              Swal.fire(
                "Error",
                "Failed to update recommendation count.",
                "error"
              );
            });
        }
      })
      .catch((error) => {
        console.error("Error adding recommendation:", error);
        Swal.fire(
          "Error",
          "Failed to add recommendation. Try again later.",
          "error"
        );
      });
  };

  return (
    <div>
      <Navbar />
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        <div className="col-span-2 border p-4 flex flex-col">
          <div className="flex  lg:w-2/3 p-4">
            <div className="lg:p-4">
              {selectedQuery.photo ? (
                <img
                  className="w-12 h-12 rounded-full"
                  src={selectedQuery.photo}
                  alt="User"
                />
              ) : (
                <p>Loading user photo...</p>
              )}
            </div>
            <div className="lg:p-2 p-1">
              <h1 className="lg:text-3xl text-xl font-semibold">
                Name :{selectedQuery.name}{" "}
              </h1>
              <p className="text-lg font-semibold">
                Email : {selectedQuery.email}{" "}
              </p>
            </div>
          </div>
          <hr></hr>
          <div className="my-3 p-4 ">
            <img
              className="w-3/4 h-[360px] mx-auto"
              src={selectedQuery.productImage}
              alt=""
            />
          </div>
          <hr></hr>

          <div className="p-4 ">
            <h1 className="text-2xl">{selectedQuery.queryTitle}</h1>
            <p className=" text-lg my-2">
              Reason For Boycott: {selectedQuery.boycottingReason}
            </p>
            <p className="text-lg my-2">
              Recommendation Count: {selectedQuery.recommendationCount}
            </p>
          </div>
          <hr></hr>
          <div className="flex justify-between lg:text-lg text-gray-600 my-4 gap-2">
            <p className="bg-red-600 p-1 text-white rounded-lg">
              Product Name : {selectedQuery.productName}
            </p>
            <p className="bg-red-600 p-1 text-white rounded-lg">
              Posted at: {new Date(selectedQuery.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        <section className="p-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Add Recommendation For :{selectedQuery.productName}
          </h2>
          <form
            onSubmit={handleAddRecommendation}
            className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xl mx-auto"
          >
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700">
                Recommendation Title
              </label>
              <input
                type="text"
                name="recommendationTitle"
                className="w-full px-4 py-2 border rounded-md text-gray-700"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700">
                Recommended Product Name
              </label>
              <input
                type="text"
                name="recommendedProductName"
                className="w-full px-4 py-2 border rounded-md text-gray-700"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700">
                Recommended Product Image
              </label>
              <input
                type="url"
                name="recommendedProductImage"
                className="w-full px-4 py-2 border rounded-md text-gray-700"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700">
                Recommendation Reason
              </label>
              <textarea
                name="recommendationReason"
                className="w-full px-4 py-2 border rounded-md text-gray-700"
                required
              ></textarea>
            </div>
            <div className="flex justify-center items-center ">
              <button
                type="submit"
                className="bg-gray-800 text-white px-6 py-2 rounded-md shadow hover:bg-red-700"
              >
                Add Recommendation
              </button>
            </div>
          </form>
        </section>
      </section>

      <section className="p-4 max-w-7xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-4">
          All Recommendations
        </h3>
        {recommendations.length === 0 ? (
          <p>No recommendations yet.</p>
        ) : (
          recommendations.map((rec) => (
            <AllReccomendations key={rec._id} rec={rec}></AllReccomendations>
          ))
        )}
      </section>
      <Footer />
    </div>
  );
};

export default QuiryDetails;
