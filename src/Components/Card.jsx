import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ qu }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const {
    productName,
    productImage,
    queryTitle,
    createdAt,
    name,
    boycottingReason,
    photo,
    productBrand,
    _id,
  } = qu;

  const handleToggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  return (
    <div>
      <div className="p-6 space-y-6 overflow-hidden rounded-lg my-6 border border-gray-900 shadow-md">
        <div>
          <div className="flex space-x-4 mb-4">
            <img
              src={photo}
              className="object-cover w-12 h-12 rounded-full shadow"
              alt="User"
            />
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-semibold">{name}</span>
              <span className="text-xs text-gray-600">
                {new Date(createdAt).toLocaleString()}
              </span>
            </div>
          </div>
          <hr className="border border-gray-600" />
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex justify-center items-center mb-4 sm:mb-0">
            <img
              src={productImage}
              alt={productName}
              className="w-full sm:w-[200px] sm:h-28 object-cover rounded-lg"
            />
          </div>
          <div className="p-3">
            <h2 className="mb-1 text-xl font-semibold">{queryTitle}</h2>
            <p
              className={`text-sm text-gray-600 ${
                !showFullDescription ? "line-clamp-2 overflow-hidden" : ""
              }`}
            >
              {boycottingReason}
            </p>
            {!showFullDescription && boycottingReason.length > 100 && (
              <span
                onClick={handleToggleDescription}
                className="text-blue-600 cursor-pointer"
              >
                ...
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center text-red-900">
          <div className="flex space-x-2 text-center justify-center items-center mb-4 sm:mb-0">
            <span className="px-6 py-2 bg-red-600 text-white rounded-3xl">
              {productName}
            </span>
            <span className="px-6 py-2 bg-red-600 text-white rounded-3xl">
              {productBrand}
            </span>
          </div>
          <Link
            to={`/querydetails/${_id}`}
            className="btn bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
