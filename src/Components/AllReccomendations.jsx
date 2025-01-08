const AllReccomendations = ({rec}) => {
const {recommenderEmail,recommendedProductImage,recommendedProductName,recommendationTitle,recommendationReason,timestamp,recommenderName} =rec;
    return (
        <div>
            <div className="border p-2 mb-4 rounded-lg flex justify-around">
                <div className='p-4 bg-gray-200'>
                <img src={recommendedProductImage} alt={recommendedProductName} className="w-24 h-24" />
                </div>
                <div className='w-3/4'>
                <h4 className="text-xl font-bold">{recommendationTitle}</h4>
                            <p>{recommendationReason}</p>
                          
                            <p>Recommended by: {recommenderName}</p>
                            <p>Recommender Email: {recommenderEmail}</p>
                            <p>At:{new Date(timestamp).toLocaleString()}</p>
                </div>
                           
                        </div>
        </div>
    );
};

export default AllReccomendations;