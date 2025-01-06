import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Update = () => {
    const query = useLoaderData();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
        const handleSubmit = e => {
            e.preventDefault();
            const productName= e.target.productName.value;
            const productBrand=e.target.productBrand.value;
            const productImage=e.target.productImage.value;
            const queryTitle=e.target.queryTitle.value;
            const boycottingReason=e.target.boycottingReason.value;
            const email = user.email;
            const name = user.displayName || 'Anonymous';
            const photo = user.photoURL;
            const currentDateTime = new Date().toISOString();
    
            const Updatedinfo = {
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
    
            console.log(Updatedinfo);
    
            fetch(`http://localhost:4000/query/${query._id}`,{
                method:"PUT",
                headers:{
                    "content-type":"application/json",
                },
                body:JSON.stringify(Updatedinfo)
            })
           .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire("Your updated query post has been added.", "success");
            }
            navigate ('/myqueries');
        })
    }
    return (
        <div>
            <Navbar/>
            <section>
            <div className="text-white flex items-center justify-center p-10">
      <div className="bg-gray-900 text-black p-6 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">Update Query : {query.productName}</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-red-600 mb-2">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              defaultValue={query.productName}
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
              defaultValue={query.productBrand}
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
              defaultValue={query.productImage}
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
              defaultValue={query.queryTitle}
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
              defaultValue={query.boycottingReason}
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-2 rounded-md hover:bg-red-700 transition"
          >
            Update Query
          </button>
        </form>
      </div>
    </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Update;