import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const {user,signOutUser} = useContext(AuthContext);
  const handleSignOut = () =>{
    console.log('signOut')
signOutUser();
  }
    const links = <>
    {
      user? <><NavLink to='/' className={'lg:px-3 hover:text-red-700'}>Home</NavLink>
      <NavLink to='/queries' className={'hover:text-red-700'}>Queries</NavLink>
      <NavLink to='/recommandationsforme' className={'lg:px-3 hover:text-red-700'}>RecommandationsForMe</NavLink>
      <NavLink to='/myqueries' className={' hover:text-red-700'}>My Queries</NavLink>
      <NavLink to='/myrecommandations' className={'lg:px-3 hover:text-red-700'}>MyRecommandations</NavLink></> :
       <>
           <NavLink to='/' className={'lg:px-3 hover:text-red-700'}>Home</NavLink>
           <NavLink to='/queries' className={'hover:text-red-700'}>Queries</NavLink>
       </>
    }
    </>
    return (
        <div className="sticky z-10 top-0 border-b-2 border-y-black bg-white">
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-lg lg:text-3xl md:text-3xl italic">QueryNest</a>

  </div>
  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold text-md">
     {links}
    </ul>
  </div>
<div className="navbar-end flex gap-3">
  <div className="lg:w-full w-2/3 border-black border-2 rounded-xl hidden lg:block md:block">
  <label className="input flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
 <button className='text-black text-2xl'><FaSearch/></button>
</label>
  </div>
{
user? <>
  <button onClick={handleSignOut} className="btn btn-outline">Logout</button>
</>:<>
<Link to='/login' className="btn btn-outline">Login</Link>
<Link to='/register' className="btn btn-outline text-center">Register</Link>
</>
}
</div>

</div>
        </div>
    );
};

export default Navbar;