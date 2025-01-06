import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-black text-white p-10">
               <section className="text-center">
                <h1 className="text-3xl font-bold py-6">Query Nest</h1>
                <p className="text-gray-400 font-semibold">"Your one-stop solution for product recommendations. At Query-Nest, we help you choose smarter, faster, and better."</p>
                </section> 
            <footer className="footer bg-black text-white p-10 flex justify-center items-center">   
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
 <div className="flex flex-col gap-4">
    <h6 className="footer-title">Our Address</h6>
    <a className="link link-hover flex"><span className="font-bold text-2xl"><CiLocationOn /></span>Mirpur,Dhaka,Bangladesh</a>
    <a className="link link-hover flex"><span className="font-bold text-xl px-1"><FaPhoneAlt/></span>+88014547435</a>
    <a className="link link-hover flex"><span className="font-bold text-2xl"><CiLocationOn /></span>contact@mail.com</a>
    <div className="flex justify-between">
      <a className="text-blue-600 text-2xl" href="https://www.facebook.com/"><FaFacebook /></a>
      <a className="text-red-600 text-2xl" href="https://www.youtube.com/"><FaYoutube/></a>
      <a className="text-2xl" href="https://x.com/?lang=en"><FaTwitter/></a>
      <a className="text-2xl text-blue-600" href="https://www.linkedin.com/"><FaLinkedin/></a>
      <a className="text-2xl" href="https://github.com/"><FaGithub/></a>
    </div>
  </div>
  <nav className="flex flex-col gap-4">
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className="flex flex-col gap-4">
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className="flex flex-col gap-4">
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
 </div>
</footer>
<hr></hr>
<p className="text-center my-6">Copyright © {new Date().getFullYear()} - All right reserved by Query-Nest</p>
        </div>
    );
};

export default Footer;