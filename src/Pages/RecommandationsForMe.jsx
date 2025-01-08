import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Loader from '../Components/Loader';
import { FaInfoCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const RecommendationsForUserQueries = () => {
  const { user } = useContext(AuthContext); // Get logged-in user's email
  const [recommendations, setRecommendations] = useState([]); // Store recommendations
  const [loading, setLoading] = useState(true); // Handle loading state
  const navigate = useNavigate(); // Navigation hook

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      console.log('User Email:', user.email);  // Log the user's email for debugging
  
      fetch(`http://localhost:4000/recommendations?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log('Recommendations Data:', data);  // Log the response data
          setRecommendations(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching recommendations:', err);
          setLoading(false);
        });
    }
  }, [user]);
  

  // If the data is still loading, show a loader
  if (loading) {
    return <Loader />;
  }

  // Function to navigate to the details page
  const handleMoreInfoClick = (recomId) => {
    navigate(`/query-details/${recomId}`); // Navigate to the details page of the recommendation
  };

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
                    <button
                      className="btn btn-sm bg-blue-600 text-white"
                      onClick={() => handleMoreInfoClick(recom._id)} // Navigate to the details page on click
                    >
                      <FaInfoCircle /> More Info
                    </button>
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
