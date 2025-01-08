import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Loader from '../Components/Loader';
import Swal from 'sweetalert2';

const MyQueries = () => {
  const { loading, user } = useContext(AuthContext);
  const loadedquery = useLoaderData();
  const [queries, setQueries] = useState([]);
  const navigate = useNavigate();

  console.log(loadedquery)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

 
  useEffect(() => {
    if (loadedquery && user) {
      setQueries(loadedquery.filter((query) => query.email === user.email));
    }
  }, [loadedquery, user]);


  const handleDelete = (queryId) => {
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
        fetch(`http://localhost:4000/query/${queryId}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingQuery = queries.filter((query) => query._id !== queryId);
              setQueries(remainingQuery);
              Swal.fire('Deleted!', 'Your Query has been deleted.', 'success');
            }
          })
          .catch((error) => {
            console.error('Error deleting query:', error);
            Swal.fire('Error', 'Failed to delete the Query. Try again later.', 'error');
          });
      }
    });
  };

  return (
    <div>
      <Navbar />

      <div
        style={{
          backgroundImage: 'url(https://i.ibb.co/48PqmvN/istockphoto-1670471395-2048x2048.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative text-white h-[460px]"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-white py-16 px-8 text-center shadow-lg rounded-b-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-left">
            Add More Queries
          </h1>
          <p className="text-lg md:text-xl mb-8" data-aos="fade-left">
            View and manage all your queries here!
          </p>
          <Link
            to="/addquery"
            className="bg-white text-red-600 hover:bg-gray-200 font-semibold py-3 px-6
             rounded-lg shadow-lg "
            data-aos="fade-left"
          >
            Add New Query
          </Link>
        </div>
      </div>
      <section>
        <div className="p-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Your Queries</h2>

          {loading ? (
            <Loader />
          ) : queries.length === 0 ? (
            <div className="text-center">
              <p className='mb-8'>No queries found. Please add a query.</p>
              <Link
                to="/addquery"
                className="bg-gray-600 text-white btn rounded-md mt-6"
              >
                Add New Query
              </Link>
             
            </div>
          ) : (
            <div className="flex flex-col justify-center gap-6">
              {queries.map((query) => (
                <div
                  key={query._id}
                  className="bg-white p-4 rounded-lg shadow-md border-2 border-black flex justify-between"
                >
                <div>
                <img
                    src={query.productImage}
                    alt={query.productName}
                    className="h-52 w-full p-4"
                  />
                </div>
                <div className='w-3/4 p-4'>
                <h3 className="text-xl font-semibold mt-2">{query.queryTitle}</h3>
                <p className='text-sm text-gray-600 mt-4'>Posted Time: {query.createdAt
                }</p>
                  <p className="text-md text-gray-900 mt-2">{query.boycottingReason}</p>
 
                  <div className="mt-16 flex justify-end items-end gap-4">
                    <Link
                      to={`/querydetails/${query._id}`}
                      className="bg-gray-600 text-white py-2 px-4 rounded-md"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/update/${query._id}`}
                      className="bg-green-800 text-white py-2 px-4 rounded-md"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(query._id)}
                      className="bg-red-500 text-white py-2 px-4 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MyQueries;
