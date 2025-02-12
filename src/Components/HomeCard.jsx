import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCard = () => {
  const [query, setQuery] = useState([]);
  const [allQueries, setAllQueries] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-server-side-ebon.vercel.app/queryhome?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setQuery(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/querymore?limit=10")
      .then((res) => res.json())
      .then((data) => setAllQueries(data))
      .catch((error) => console.error("Error fetching queries:", error));
  }, []);

  return (
    <div className="my-6 grid grid-cols-3 gap-6 p-4">
      <div className="col-span-2">
      {query.map((qu) => (
        <Card key={qu._id} qu={qu}></Card>
      ))}
      </div>

      <div>
	  <div className="border-2 p-6 rounded-lg shadow-md hidden lg:block md:block">
          <h2 className="text-2xl font-bold mb-4">More Queries...</h2>
          <hr className="mb-4" />
          <div>
            {allQueries.length > 0 ? (
              allQueries.map((singleQuery) => (
                <Link
                  to={`/querydetails/${singleQuery._id}`}
                  key={singleQuery._id}
                  className="mb-4 rounded-lg p-4 shadow-sm"
                >
                  <img
                    src={singleQuery.productImage}
                    alt={singleQuery.productName}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-lg font-semibold">
                    {singleQuery.productName}
                  </h3>
                  <p className="text-gray-700">{singleQuery.queryTitle}</p>
                </Link>
              ))
            ) : (
              <p className="text-gray-500">No queries found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
