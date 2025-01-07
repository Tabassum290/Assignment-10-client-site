import { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddQuery = () => {
    const{user} = useContext(AuthContext);
      const [allQueries, setAllQueries] = useState([]);
      const navigate = useNavigate();
    const [userProfile, setUserProfile] = useState({});

 useEffect(() => {
    fetch('http://localhost:4000/query')
      .then((res) => res.json())
      .then((data) => setAllQueries(data))
      .catch((error) => console.error('Error fetching queries:', error));
  }, []);

    useEffect(() => {
        if (user) {
            const profile = user.providerData[0] || {};
            setUserProfile({
                name: profile.displayName || user.displayName || 'Anonymous',
                photo: profile.photoURL || user.photoURL || 'default_photo_url',
                email: user.email || 'default_email@example.com',
            });
        }
    }, [user]);

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

        const info = {
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

        console.log(info);

        fetch('http://localhost:4000/query',{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(info)
        })
       .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            Swal.fire("Your new query post has been added.", "success");
        }
        navigate ('/myqueries');
    })
}

    return (
        <div>
            <Navbar/>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl my-10">
            <div className="col-span-2">
      <div className=" text-black p-6 rounded-lg shadow-md w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 ">Add Query</h1>
        <hr></hr>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-semibold text-gray-900 my-2">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              className="w-full px-4 py-2 border-2 border-black "
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-2">
              Product Brand
            </label>
            <input
              type="text"
              name="productBrand"
              className="w-full px-4 py-2 border-2 border-black "
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-2">
              Product Image URL
            </label>
            <input
              type="url"
              name="productImage"
              className="w-full px-4 py-2 border-2 border-black "
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-2">
              Query Title
            </label>
            <input
              type="text"
              name="queryTitle"
              placeholder="e.g., Is there any better product that gives me the same quality?"
              className="w-full px-4 py-2 border-2 border-black "
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-2">
              Boycotting Reason Details
            </label>
            <textarea
              name="boycottingReason"
              rows="4"
              className="w-full px-4 py-2 border-2 border-black "
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-bold py-2 rounded-md hover:bg-gray-700 transition"
          >
            Add Query
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
                <Link to={`/querydetails/${singleQuery._id}`}
                  key={singleQuery._id}
                  className="mb-4 rounded-lg p-4 shadow-sm"
                >
                  <img
                    src={singleQuery.productImage}
                    alt={singleQuery.productName}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-lg font-semibold">{singleQuery.productName}</h3>
                  <p className="text-gray-700">{singleQuery.queryTitle}</p>
                </Link>
              ))
            ) : (
              <p className="text-gray-500">No queries found.</p>
            )}
          </div>
        </div>
            </section>
   
        <Footer/>
        </div>
    );
};

export default AddQuery;