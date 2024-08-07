import React from 'react';
import {
  FaPassport,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa6";

import images from '../constants/images';

const Footer = () => {

  return (
    <div className="px-5">
      <section className="bg-dark-hard">
        <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
          <div className="col-span-5 md:col-span-4 lg:col-span-2 ">
            <h3 className="text-dark-light font-bold md:text-lg">Rorschach</h3>
            <ul className="text-[#969EAD] text-sm mt-5 space-y-4">
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Press</a>
              </li>
              <li>
                <a href="/">Resources and Policies</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Trust & Safety</a>
              </li>
            </ul>
          </div>
          <div className="col-span-5 md:col-span-4 lg:col-span-2 ">
            <h3 className="text-dark-light font-bold md:text-lg">Explore</h3>
            <ul className="text-[#969EAD] text-sm mt-5 space-y-4 md:text-base">
              <li>
                <a href="/">Write a Blog</a>
              </li>
              <li>
                <a href="/">Editors' Picks</a>
              </li>
              <li>
                <a href="/">Readers' Annual Choice</a>
              </li>
              <li>
                <a href="/">BlogBoss Verification</a>
              </li>
              <li>
                <a href="/">Add a Discovery</a>
              </li>
            </ul>
          </div>
          <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto">
            <h3 className="text-dark-light font-bold md:text-lg">
              Let's Talk Business
            </h3>
            <ul className="text-[#969EAD] text-sm mt-5 space-y-4 md:text-base">
              <li>
                <a href="/">Why Us</a>
              </li>
              <li>
                <a href="/">Discovery Owners</a>
              </li>
              <li>
                <a href="/">Advertising</a>
              </li>
              <li>
                <a href="/">Sponsored Placements</a>
              </li>
              <li>
                <a href="/">Access our Content API</a>
              </li>
            </ul>
          </div>
          <div className="col-span-5 md:col-span-4 lg:col-span-2 ">
            <h3 className="text-dark-light font-bold md:text-lg">Legal</h3>
            <ul className="text-[#969EAD] text-sm mt-5 space-y-4 md:text-base">
              <li>
                <a href="/">Terms of Use</a>
              </li>
              <li>
                <a href="/">Privacy and Cookies Statement</a>
              </li>
              <li>
                <a href="/">Cookie Consent</a>
              </li>
              <li>
                <a
                  href="https://tasty.co/recipe/brown-butter-toffee-chocolate-chip-cookies"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Actual Cookies
                </a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2 ">
            <img
              src={images.Logo}
              alt="logo"
              className="w-16 brightness-0 invert mx-auto md:mx-0 "
            />
            <p className="text-sm text-dark-light text-center mt-4 md:text-left md:Text-base lg:text-sm">
              Exchange travel advice and insights with fellow adventurers
            </p>
            <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
              <li>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="w-6 h-auto" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="w-6 h-auto" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-6 h-auto" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="w-6 h-auto" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPinterest className="w-6 h-auto" />
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
            <div className="bg-primary text-white p-3 rounded-full">
              <FaPassport className="w-7 h-auto" />
            </div>
            <p className="font-bold italic text-dark-light">
              Copyright © 2024. Crafted for adventurers.
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
