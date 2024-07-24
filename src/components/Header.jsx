import React from 'react'
import { images } from '../constants/index.js';

const navItemsInfo = [
  {name: "Home"},
  {name: "Articles"},
  {name: "Pages"},
  {name: "Pricing"},
  {name: "FAQ"},
];

const NavItem = ({name}) => {
  return (
    <li className="relative group">
      <a href="/" className="px-3 py-2">
        {name}
      </a>
      <span
        className="text-blue-500 absolute transition-all duration-700 font-bold right-0 top-0
            group-hover:right-[90%] opacity-0 group-hover:opacity-100"
      >
        /
      </span>
    </li>
  );
};

const Header = () => {
  return (
  <section>
    <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
      <div>
        <img src={images.Logo} alt="logo" style={{width:'20%', height:'auto'}}/>
      </div>
      <div className='flex gap-x-9 items-center'>
        <ul className='flex gap-x-2 font-semibold'>
          {navItemsInfo.map((item) => (
            <NavItem key={item.name} name={item.name} />
          ))}
        </ul>
        <button className='border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold
        transition-all duration-700 hover:bg-blue-500 hover:text-white'>
          Sign In
        </button>
      </div>
    </header>
  </section>
  );
};

export default Header;
