import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

const MyQueries = () => {
      const navigate = useNavigate();
    
      const handleAddQueries = () => {
        navigate("/addquery"); // Ensure this route exists in your router setup
      };
    


    return (
        <div>
            <Navbar/>
     
{/* Add Query Button */}
<div className="min-h-screen text-white">
      {/* Banner */}
      <div className="bg-gradient-to-r from-red-600 to-gray-900 text-white py-16 px-8 text-center shadow-lg rounded-b-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Add More Queries
        </h1>
        <p className="text-lg md:text-xl mb-8">
          View and manage all your queries here!
        </p>
        <button
          onClick={handleAddQueries}
          className="bg-white text-red-600 hover:bg-gray-200 font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Add New Query
        </button>
      </div>
    </div>
          <Footer/>
        </div>
    );
};

export default MyQueries;