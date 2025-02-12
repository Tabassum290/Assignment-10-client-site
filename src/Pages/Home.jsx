import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import ExtraSection from "../Components/ExtraSection";
import HomeCard from "../Components/HomeCard";
import Populer from "../Components/Populer";

const Home = () => {
    return (
        <div >
            <Navbar></Navbar>
            <main className="max-w-7xl mx-auto px-6 ">
               <Slider/>
                <HomeCard/>
                <Populer/>
               <ExtraSection/>
            </main>
        <Footer/>
        </div>
    );
};

export default Home;