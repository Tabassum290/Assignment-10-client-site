import { useEffect, useState } from "react";
import Card from "./Card";

const HomeCard = () => {
    const [query,setQuery] = useState([]);
useEffect(()=>{
    fetch('http://localhost:4000/queryhome?limit=6')
    .then(res=> res.json())
    .then(data=>{
        setQuery(data)
        console.log(data)
    })
},[])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 mx-auto max-w-7xl">
            {
                query.map(qu=><Card key={qu._id} qu={qu}></Card>)
            }
        </div>
    );
};

export default HomeCard;