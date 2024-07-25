import React, { useState } from 'react'
import { images } from '../constants/index.js';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";

const navItemsInfo = [
  {name: "Home", type: "link" },
  {name: "Articles", type: "link" },
  {name: "Pages", type: "dropdown", items:['About Us', 'Contact Us'] },
  {name: "Pricing", type: "link" },
  {name: "FAQ", type: "link" },
];

const NavItem = ({ item }) => {
  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py-2">
            {item.name}
          </a>
          {/* hover animation for other items*/}
          <span
            className="text-blue-500 absolute transition-all duration-700 font-bold right-0 top-0
            group-hover:right-[90%] opacity-0 group-hover:opacity-100"
          >
            /
          </span>
        </>
      ) : (
        <>
          <a href="/" className="px-4 py-2 flex gap-x-1 items-center">
            <span>
              {item.name}
            </span>
            <IoChevronDownOutline/>
          </a>
          <div
            className="hidden transition-all duration-700 pt-4 absolute bottom-0 right-0 transform 
          translate-y-full group-hover:block w-max "
          >
            <ul className="flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page) => (
                <a
                  href="/"
                  className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </>
      )}
    </li>
  );
};

const Header = () => {
  const[navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    })
  }

  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img className="w-16" src={images.Logo} alt="logo" />
        </div>
        {/* menu buttons */}
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu 
              className="w-6 h-6" 
              onClick={navVisibilityHandler} 
            />
          )}
        </div>
        {/* menu transition on mobile */}
        <div
          className={`
            ${navIsVisible ? "right-0" : "-right-full"} 
            mt-[56px] lg:mt-0
            z-[49] flex flex-col justify-center w-full 
            lg:w-auto lg:justify-end lg:flex-row fixed top-0 bottom-0 
            transition-all duration-300 bg-dark-hard lg:bg-transparent
            lg:static gap-x-9 items-center p-4 lg:p-0
          `}
        >
          {/* items in menu */}
          <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          {/* sign in button */}
          <button
            className="mt-5 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold
            transition-all duration-700 hover:bg-blue-500 hover:text-white"
          >
            Sign In
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
