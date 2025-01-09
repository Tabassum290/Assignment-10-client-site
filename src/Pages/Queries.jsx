import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Queries = () => {
 const [queries,setQueries] = useState([]);
 const [search,setSearch] = useState('');
    useEffect(()=>{
      fetch(`http://localhost:4000/query?search=${search}`)
      .then(res=> res.json())
      .then(data =>{
        setQueries(data)
      })
    },[search])
    return (
        <div>
            <Navbar/>
           <section className='max-w-7xl mx-auto my-10'>
            <div className='flex justify-between items-center'>
            <h1 className='text-center lg:text-3xl text-xl font-semibold font-serif mb-4 w-1/2'>All Queries</h1>
            <div className="w-2/3 border-black border-2 rounded-xl">
  <label className="input flex items-center gap-2">
  <input onKeyUp={(e) => setSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
 <button className='text-black text-2xl'><FaSearch/></button>
</label>
  </div>
            </div>

            <hr></hr>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 mt-4">
              {queries.map((query) => (
                <div
                  key={query._id}
                  className="bg-white p-4 rounded-lg shadow-md border-2 border-black flex justify-between"
                >
                <div className='flex justify-center items-center'>
                <img
                    src={query.productImage}
                    alt={query.productName}
                    className="lg:h-52 h-[200px] w-full p-4"
                  />
                </div>
                <div className='w-3/4 p-4'>
                <h3 className="text-xl font-semibold my-2">{query.queryTitle}</h3>
                <hr></hr>
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