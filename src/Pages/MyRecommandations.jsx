import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Loader from '../Components/Loader';
import { FaDeleteLeft } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`http://localhost:4000/recommendation?email!${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
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
    return <Loader/>;
  }
  const handleDelete = (recomId, queryId) => {
    console.log(queryId,recomId)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to undo this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/recommendation/${recomId}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                fetch(`http://localhost:4000/query/${queryId}/decrement`, {
                method: 'PATCH',
              })
                .then((res) => res.json())
                .then(() => {
                  
                  const remainingRecom = recommendations.filter(
                    (recommendation) => recommendation._id !== recomId
                  );
                  console.log(remainingRecom)
                  setRecommendations(remainingRecom);
                  Swal.fire('Deleted!', 'Your Recommendation has been deleted.', 'success');
                })
                .catch((error) => {
                  console.error('Error updating recommendation count:', error);
                  Swal.fire('Error', 'Failed to update recommendation count. Try again later.', 'error');
                });
            }
          })
          .catch((error) => {
            console.error('Error deleting recommendation:', error);
            Swal.fire('Error', 'Failed to delete the recommendation. Try again later.', 'error');
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
        <hr></hr>
        <div className="overflow-x-auto max-w-7xl mx-auto my-6">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Recommended Product Name</th>
        <th>Time</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {recommendations.map((recom) => (
    <tr key={recom._id}>
    <th>{recom.productName}</th>
    <td>{recom.recommendedProductName}</td>
    <td>{new Date(recom.timestamp).toLocaleString()}</td>
    <td><button 
    onClick={()=>handleDelete(recom._id,recom.queryId)}
className="btn btn-sm bg-red-600 text-white" >
Delete <span><FaDeleteLeft></FaDeleteLeft></span> </button>
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

export default MyRecommendations;
