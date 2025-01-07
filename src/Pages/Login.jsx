import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import Lottie from 'lottie-react';
import { toast } from 'react-toastify';
const Login = () => {
    const {user, SignInUser,setUser,signinWithGoogle} = useContext(AuthContext);
const navigate = useNavigate()
const location = useLocation();
const from = location.state || '/';
  const handleSignin = e =>{
    e.preventDefault();
  const email= e.target.email.value;
  const password=e.target.password.value;
  const loggeduser = {email,password};
  console.log(loggeduser)

  SignInUser(email,password)
  .then(result =>{
    setUser(result.user);
    console.log(result.user.email);
    navigate(from);
    toast.success("Welcome to Query Nest")
  })
.catch(err=>{
console.log(err.code,err.message)
toast.error(`Error Occured${err.code}.Please Try Again`)
})
 }

  const handleGoogle=()=>{
    signinWithGoogle()
    .then(result=>{
      setUser(result.user)
      navigate(from);
      toast.success("Welcome to Query Nest")
    })
    .catch(err=>{
      toast.error(`Error Occured${err.code}.Please Try Again`)
      console.log(err.code)
    })
  }
    return (
        <div>
            <Navbar/>
            <section className='flex justify-center items-center'>
<div className='lg:ml-[300px]'>
<div className='max-w-xl mx-auto flex flex-col gap-3 text-center p-6'>
<p className='text-bold text-blue-700'>Welcome Back!</p>
<h1 className='lg:text-4xl text-2xl font-bold'>Member Login</h1>
<p className='text-gray-600'>Access to all features. No credit card required.</p>
<button onClick={handleGoogle} className='btn hover:text-blue-700 border-1 border-black bg-white'><span className='text-2xl'><FcGoogle /></span>Sign up with Google</button>
<p className='text-center font-semibold text-gray-700'>Or Continue With</p>
</div>

<form onSubmit={handleSignin} className='max-w-xl mx-auto flex flex-col gap-6 p-6'>
<div>
<span className="label-text">Emailaddress*</span>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" name='email' className="grow" placeholder="Email" />
</label>
</div>
<div>
<span className="label-text">Password*</span>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="text" name='password' className="grow" placeholder="Password" />
</label>
</div>
<button className='btn bg-[#05264E] text-white'>Login</button>
<p className='text-gray-600 px-6'>Don't Have any Account? <Link to='/register' className='text-black font-semibold'>Register</Link></p>
</form>
</div>
<div className='hidden lg:block md:block w-[270px] h-[200px]'>
<Lottie
      src="https://lottie.host/b2366cc4-c3ab-4c87-8663-8e42bc28acf6/kWSGabV6hK.lottie"
      loop
      autoplay
    />
</div>
            </section>
            <Footer/>
        </div>
    );
};

export default Login;