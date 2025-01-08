import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link, useLoaderData } from 'react-router-dom';

const Queries = () => {
    const query = useLoaderData();
    return (
        <div>
            <Navbar/>
           <section className='max-w-5xl mx-auto my-10'>
            <h1 className='text-center text-3xl font-semibold font-serif mb-4'>All Queries</h1>
            <hr></hr>
            <div className="flex flex-col justify-center gap-6">
              {query.map((query) => (
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
                <p className='text-sm text-gray-600 mt-4'>Posted Time: {new Date(query.createdAt).toLocaleString()}</p>
                  <p className="text-md text-gray-900 mt-2">{query.boycottingReason}</p>
                  <p className="text-md text-gray-900 mt-2">Recommendation Count: {query.recommendationCount}</p>
 
                  <div className="mt-3 flex justify-end items-end gap-4">
                    <Link
                      to={`/querydetails/${query._id}`}
                      className="btn bg-red-800 text-white  rounded-md"
                    >
                      Recommend
                    </Link>
                  </div>
                </div>
                </div>
              ))}
            </div>
           </section>
            <Footer/>
        </div>
    );
};

export default Queries;