import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

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
      <NavLink to='/addquery' className={'lg:px-3 hover:text-red-700'}>Add Query</NavLink>
      <NavLink to='/recommandationsforme' className={' hover:text-red-700'}>RecommandationsForMe</NavLink>
      <NavLink to='/myqueries' className={'lg:px-3 hover:text-red-700'}>My Queries</NavLink>
      <NavLink to='/myrecommandations' className={' hover:text-red-700'}>MyRecommandations</NavLink></> :
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
    <a className="btn btn-ghost text-xl lg:text-3xl md:text-3xl italic">QueryNest</a>
    <div className="w-full border-black border-2 rounded-xl hidden lg:block">
  <label className="input flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-6 w-6 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
  </div>
  </div>
  
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold text-md">
     {links}
    </ul>
  </div>
{
user? <button onClick={handleSignOut} className="btn btn-outline">Logout</button>:<>
<Link to='/login' className="btn btn-outline mr-3">Login</Link>
<Link to='/register' className="btn btn-outline text-center">Register</Link>
</>
}

</div>
        </div>
    );
};

export default Navbar;