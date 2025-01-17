import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Components/Loader";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(
        `https://assignment-11-server-side-ebon.vercel.app/recommendation?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setRecommendations(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [user]);


  if (loading) {
    return <Loader />;
  }

  const handleDelete = (recomId, queryId) => {
    console.log("recomId:", recomId, "queryId:", queryId);
  
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-11-server-side-ebon.vercel.app/recommendation/${recomId}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("Delete Response:", data);
  
            if (data.result?.deletedCount > 0) {
              const remainingRecommendations = recommendations.filter(
                (recommendation) => recommendation._id !== recomId
              );
              setRecommendations(remainingRecommendations);
              fetch(
                `https://assignment-11-server-side-ebon.vercel.app/query/${queryId}/decrement`,
                {
                  method: "PATCH",
                }
              )
                .then((res) => res.json())
                .then((updateResponse) => {
                  console.log("Recommendation count decremented:", updateResponse);
  
                  Swal.fire("Deleted!", "Your recommendation has been deleted, and the recommendation count has been updated.", "success");
                })
                .catch((error) => {
                  console.error("Error decrementing recommendation count:", error);
                  Swal.fire(
                    "Deleted!",
                    "Recommendation deleted, but failed to update recommendation count.",
                    "warning"
                  );
                });
            } else {
              Swal.fire("Error", "Recommendation not found or already deleted.", "error");
            }
          })
          .catch((error) => {
            console.error("Error deleting recommendation:", error);
            Swal.fire(
              "Error",
              "Failed to delete the recommendation. Try again later.",
              "error"
            );
          });
      }
    });
  };
  
  
  
  
  
  


  return (
    <div>
      <Navbar />
      <section>
        <h1 className="text-3xl font-semibold font-serif text-center my-4 ">
          My Recommendations: {recommendations.length}
        </h1>
        <hr />
        {error && (
          <p className="text-red-600 text-center">
            Failed to load recommendations: {error.message}
          </p>
        )}
        {recommendations.length === 0 ? (
          <p className="text-center text-gray-500 my-6">
            No recommendations found.
          </p>
        ) : (
          <div className="overflow-x-auto max-w-7xl mx-auto my-6">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Recommended Product Name</th>
                  <th>Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {recommendations.map((recom) => (
                  <tr key={recom._id}>
                    <th>{recom.productName}</th>
                    <td>{recom.recommendedProductName}</td>
                    <td>{new Date(recom.timestamp).toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(recom._id,recom.queryId)}
                        className="btn btn-sm bg-red-600 px-4 text-white"
                      >
                        Delete <FaDeleteLeft />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default MyRecommendations;
