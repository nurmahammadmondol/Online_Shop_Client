import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';
import { FaCartShopping, FaHeart } from 'react-icons/fa6';

const Navbar = () => {
  const { name } = useContext(AuthContext);

  const Links = (
    <nav className="flex items-center gap-5 lg:gap-10">
      <NavLink>Home</NavLink>
      <NavLink>Products</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact</NavLink>
      <NavLink>
        <FaHeart className="text-xl " />
      </NavLink>
      <NavLink>
        <FaCartShopping className="text-xl" />
      </NavLink>
    </nav>
  );

  return (
    <nav className="navbar bg-base-200 shadow-sm border-b-2 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Online Shop</a>
      </div>

      <div className="navbar-end flex items-center gap-5 lg:gap-10">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div>
          <button className="btn">Log In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
