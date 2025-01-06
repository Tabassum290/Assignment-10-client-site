import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const ExtraSection = () => {
    const features = [
        {
          icon: "🌟",
          title: "Personalized Recommendations",
          description:
            "Tailored suggestions to help you discover the best products effortlessly.",
        },
        {
          icon: "🤝",
          title: "Community-Driven Insights",
          description:
            "Collaborate with others to find alternatives and share meaningful recommendations.",
        },
        {
          icon: "🔒",
          title: "Secure & Reliable",
          description: "Your data and experience are protected with top-notch security.",
        },
        {
          icon: "🚀",
          title: "Quick & Easy to Use",
          description: "A seamless platform to add, view, and manage your queries.",
        },
      ];
  return (
    <div>
    <div className="my-10 grid grid-cols-1 md:grid-cols-3 h-[600px]">
      {/* Left Side - Testimonial */}
      <div
        className="col-span-2 relative bg-cover bg-center flex flex-col justify-center items-center text-white px-10"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/2dWtsMJ/istockphoto-1181409689-2048x2048.jpg)", // Replace with your background image
        }}
      >
        {/* Overlay to darken background */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <Slide direction="left" duration={800}>
            <p className="text-2xl font-light italic mb-6">
              "It has been an incredible journey. The platform helped me find a
              clear direction in my career and develop the skills needed to
              succeed. I couldn't be more grateful for the guidance."
            </p>
          </Slide>
          <Fade>
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/80"
                alt="User Avatar"
                className="rounded-full w-20 h-20 mb-4 border-4 border-white"
              />
              <h4 className="text-lg font-bold">Muhammad Umair</h4>
              <div className="flex mt-1 text-yellow-400">★ ★ ★ ★ ★</div>
            </div>
          </Fade>
        </div>
      </div>

      {/* Right Side - Success Stories */}
      <div className="bg-gray-900 flex flex-col justify-center items-center text-white p-10">
        <Fade>
          <h1 className="text-4xl font-bold mb-4">SUCCESS STORIES</h1>
          <hr className="border-t-2 border-white w-16 mb-4" />
          <p className="text-lg font-light text-center">
            We celebrate the achievements of our community. From finding dream
            jobs to mastering new skills, our success stories inspire everyone
            to aim higher and achieve greatness.
          </p>
        </Fade>
      </div>
</div>
<section>
<div className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          Why Choose Us?
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Discover what makes our platform the best for product recommendations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
</section>
</div>
  );
};

export default ExtraSection;
