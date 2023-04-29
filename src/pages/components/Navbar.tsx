import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
const Navbar: React.FC = () => {
  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
    {
      name: "Blog",
      url: "/blog",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full shadow-md">
      <div className="py-4 bg-white md:flex md:justify-between md:px-10 px-7">
        <div className="text-2xl font-bold text-gray-800 cursor-pointer">
          <span>Sankalp's Den</span>
        </div>
        <ul className="font-thin uppercase md:flex md:items-center">
          {links.map((link) => (
            <li key={link.name} className="text-md md:ml-8 my-7 md:my-0">
              <a
                className="text-gray-800 duration-200 hover:text-indigo-400"
                href={link.url}
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="px-6 py-2 text-white duration-200 bg-indigo-500 rounded md:ml-8 hover:bg-indigo-800">
            Start Now
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
