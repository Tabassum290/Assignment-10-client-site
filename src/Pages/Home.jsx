import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import ExtraSection from "../Components/ExtraSection";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className="my-8">
               <Slider/>
               <ExtraSection/>
            </main>
        <Footer/>
        </div>
    );
};

export default Home;