
const Card = ({qu}) => {
    const {productName,productImage,queryTitle,createdAt,name,boycottingReason,photo,productBrand} = qu;
    console.log(photo)
    return (
        <div>
 <div className="p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex space-x-4">
		<img  src={photo}  className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" alt=""/>
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{name}</a>
			<span className="text-xs dark:text-gray-600">{new Date(createdAt).toLocaleString()}</span>
		</div>
	</div>
    <hr></hr>
	<div>
		<img src={productImage} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">{queryTitle}</h2>
		<p className="text-sm dark:text-gray-600">{boycottingReason}</p>
	</div>
    <hr></hr>
	<div className="flex flex-wrap justify-between">
	  <p className="p-2 rounded-3xl">{productName}</p>
	  <p className=" p-2 rounded-3xl">{productBrand}</p>
	</div>
</div>
        </div>
    );
};

export default Card;