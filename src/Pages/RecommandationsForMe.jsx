import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Components/Loader";
import { FaInfoCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const RecommendationsForUserQueries = () => {
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      console.log("User Email:", user.email);
      fetch(
        `https://assignment-11-server-side-ebon.vercel.app/recommendationforme?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setRecommendations(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching recommendations:", err);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <section>
        <h1 className="text-3xl font-semibold font-serif text-center my-4">
          Recommendations for Your Queries: {recommendations.length}
        </h1>

        <div className="overflow-x-auto max-w-7xl mx-auto my-6">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Query Title</th>
                <th>Recommender's Email</th>
                <th>Recommended Product</th>
                <th>Timestamp</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {recommendations.map((recom) => (
                <tr key={recom._id}>
                  <td>{recom.queryTitle}</td>
                  <td>{recom.recommenderEmail}</td>
                  <td>{recom.recommendedProductName}</td>
                  <td>{new Date(recom.timestamp).toLocaleString()}</td>
                  <td>
                    <Link
                      to={`/querydetails/${recom.queryId}`}
                      className="btn btn-sm bg-red-600 text-white px-6"
                    >
                      More
                      <span className="hidden md:block lg:block">
                        <FaInfoCircle />
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RecommendationsForUserQueries;
