import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Loader from '../Components/Loader';
import Swal from 'sweetalert2';

const MyQueries = () => {
  const {loading} = useContext(AuthContext);
  const loadedquery = useLoaderData();
  const [queries,setQueries] = useState(loadedquery);
 
    console.log(loadedquery)
      const navigate = useNavigate();
    
       useEffect(() => {
              AOS.init({
                  duration: 1000,
                  once: true, 
              });
          }, []);

      const handleDelete = (queryId) => {
        console.log(queryId)
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
            fetch(`http://localhost:4000/query/${queryId}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  const remainingQuery = queries.filter((query) => query._id !== queryId);
                  setQueries(remainingQuery);
                    console.log(remainingQuery)
                  Swal.fire("Deleted!", "Your Query has been deleted.", "success");
                }
              })
              .catch((error) => {
                console.error("Error deleting job:", error);
                Swal.fire("Error", "Failed to delete the Query. Try again later.", "error");
              });
          }
        });
        }


    return (
        <div>
            <Navbar/>
     
{/* Add Query Button */}
<div className="text-white">
      {/* Banner */}
      <div className="bg-gradient-to-r from-red-600 to-gray-900 text-white py-16 px-8 text-center
       shadow-lg rounded-b-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos='fade-left'>
          Add More Queries
        </h1>
        <p className="text-lg md:text-xl mb-8" data-aos='fade-left'>
          View and manage all your queries here!
        </p>
        <Link to='/addquery'
          className="bg-white text-red-600 hover:bg-gray-200 font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          data-aos='fade-left'    >
          Add New Query
        </Link>
      </div>
    </div>
<section>
<div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Your Queries</h2>

        {loading ? (
          <Loader/>
        ) : loadedquery.length === 0 ? (
          <div className="text-center">
            <p>No queries found. Please add a query.</p>
            <Link to ='/addquery'
              className="bg-gray-600 text-white py-2 px-4 rounded-md"
            >
              Add New Query
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {loadedquery.map((query) => (
              <div key={query._id} className="bg-white p-4 rounded-lg shadow-md w-96 border-2 border-gray-700">
                <img
                  src={query.productImage}
                  alt={query.productName}
                  className="w-3/4 h-48 rounded-t-md mx-auto p-4"
                />
                <h3 className="text-lg font-semibold mt-2">{query.queryTitle}</h3>
                <p className="text-sm text-gray-600 mt-2">{query.boycottingReason}</p>
                <div className="mt-4 flex justify-between">
                  <Link to={`/querydetails/${query._id}`}
                    className="bg-gray-600 text-white btn rounded-md"
                  >
                    View Details
                  </Link>
                  <Link to={`/update/${query._id}`}
                    className="bg-green-800 text-white btn rounded-md"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(query._id)}
                    className="bg-red-500 text-white btn rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
</section>
          <Footer/>
        </div>
    );

};
export default MyQueries;