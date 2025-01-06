import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
import Footer from '../Components/Footer';

const Register = () => {
const { createNewUser,user,setUser,signinWithGoogle }= useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();
const from = location.state || '/';
const handleRegister = e =>{
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password= e.target.password.value;
  const photo = e.target.photo.value;
  const user={name,email,photo,password};
console.log(user)
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!passwordRegex.test(password)) {
    toast.error("Password must contain at least 6 characters, including one letter and one number.");
    return;
  }

createNewUser(email,password)
.then(result =>{
  navigate(from);
  setUser(result.user);
})
.catch(err =>{
  console.log(err.code,err.message);
  toast.error(`Error Occured${err.code}.Please Try Again`);
})
}

const handleGoogle=()=>{
  signinWithGoogle()
  .then(result=>{
    navigate(from);
    setUser(result.user);
    toast.success('Welcome to Query Nest');
  })
  .catch(err=>{
    console.log(err.code)
    toast.error(`Error Occured${err.code}.Please Try Again`)
  })
}

return (
        <div>
           <Navbar/>
<section className='flex justify-center items-center'>
<div>
<div className='max-w-xl mx-auto flex flex-col gap-3 text-center p-6'>
<p className='text-bold text-blue-700'>Register</p>
<h1 className='lg:text-4xl text-2xl font-bold'>Start For Free Today</h1>
<p className='text-gray-600'>Access to all features. No credit card required.</p>
<button onClick={handleGoogle} className='btn hover:text-blue-700 border-1 border-black bg-white'><span className='text-2xl'><FcGoogle /></span>Sign up with Google</button>
<p className='text-center font-semibold text-gray-700'>Or Continue With</p>
</div>
<form onSubmit={handleRegister} className='max-w-xl mx-auto flex flex-col gap-6 p-6'>
<div>
<span className="label-text">Fullname*</span>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" name='name' className="grow" placeholder="Fullname" />
</label>
</div>
    <div>
    <span className="label-text">Email*</span>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" name='email' className="grow" placeholder="Email" />
</label>
    </div>
<div>
<span className="label-text">Photo URL</span>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" name='photo' className="grow" placeholder="Photo URL" />
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
  <input type="text" name='password' className="grow" placeholder="password" />
</label>
</div>

<button className='btn bg-[#05264E] text-white'>Submit & Register</button>
<p className='text-gray-600 px-6'>Already Have an Account? <Link to='/login' className='text-black font-semibold'>Login</Link></p>
</form>
</div>
</section>
<Footer/>
</div>
    );
};

export default Register;