import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const AboutUs = () => {
    return (
        <div>
            <Navbar/>
            <main>
            <section className="bg-[#EDF4C2] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-red-600">About QueryNest</h2>
          <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
            QueryNest is a dynamic platform where users can post queries, update them, and get recommendations from the community.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-red-600">
            <h3 className="text-xl font-semibold text-gray-900">📌 Post Queries</h3>
            <p className="text-gray-600 mt-2">
              Share your thoughts, questions, or problems with the QueryNest community.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-red-600">
            <h3 className="text-xl font-semibold text-gray-900">📝 Manage Queries</h3>
            <p className="text-gray-600 mt-2">
              Easily update or modify your queries from your personal dashboard.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-red-600">
            <h3 className="text-xl font-semibold text-gray-900">💡 Get Recommendations</h3>
            <p className="text-gray-600 mt-2">
              Other users can recommend similar queries to help you find solutions faster.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">Join QueryNest Today!</h3>
          <p className="text-gray-700 mt-2 mb-8">
            Start asking questions and get recommendations from the community.
          </p>
          <Link to='/login' className={"mt-8 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition"}>
            Get Started
          </Link>
        </div>
      </div>
    </section>
            </main>
            <Footer/>
        </div>
    );
};

export default AboutUs;