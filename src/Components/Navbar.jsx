import { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Theme from "./Theme";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', newTheme);
    setIsDark(!isDark);
  };

  const handleSignOut = () => {
    signOutUser();
    localStorage.removeItem('theme');
    navigate('/');
  };

  const links = [
    { to: '/', label: 'Home' },
    { to: '/queries', label: 'Queries' },
    { to: '/about', label: 'About Us' },
    ...(user ? [
      { to: '/recommandationsforme', label: 'RecommendationsForMe' },
      { to: '/myqueries', label: 'My Queries' },
      { to: '/myrecommandations', label: 'My Recommendations' }
    ] : [])
  ];

  return (
    <div className="sticky z-10 top-0 border-b-2 border-y-black w-full bg-red-600 text-[#EDF4C2]">
      <div className="max-w-7xl mx-auto">
        <div className="navbar">
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
                className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold">
                {links.map(link => (
                  <NavLink key={link.to} to={link.to} className="lg:px-3 hover:font-bold">
                    {link.label}
                  </NavLink>
                ))}
              </ul>
            </div>
            <a className="btn btn-ghost text-lg lg:text-3xl md:text-3xl italic">QueryNest</a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold text-md">
              {links.map(link => (
                <NavLink key={link.to} to={link.to} className="lg:px-3 hover:font-bold">
                  {link.label}
                </NavLink>
              ))}
            </ul>
          </div>

          <div className="navbar-end flex gap-3 text-white">
          <Theme/>
            {user ? (
              <button onClick={handleSignOut} className="btn btn-outline">Logout</button>
            ) : (
              <>
                <Link to='/login' className="btn bg-[#EDF4C2] border-none">Login</Link>
                <Link to='/register' className="btn bg-[#EDF4C2] border-none text-center">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
