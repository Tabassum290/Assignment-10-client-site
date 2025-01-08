import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import ExtraSection from "../Components/ExtraSection";
import HomeCard from "../Components/HomeCard";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className="my-8">
               <Slider/>
                <HomeCard/>
               <ExtraSection/>
            </main>
        <Footer/>
        </div>
    );
};

export default Home;