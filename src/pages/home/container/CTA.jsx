import React from 'react';
import images from '../../../constants/images.js';

const CTA = () => {
  return (
    <>
      <div className="px-5">
        <section className="relative bg-dark-hard px-5 rounded-3xl p-8">
          <div className="container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="text-white font-roboto font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left">
                Get our stories delivered from us to your inbox weekly.
              </h2>
              <div className="w-full max-w-[494px] mt-6 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0">
                <input
                  type="text"
                  className="px-4 py-3 rounded-lg w-full placeholder:text-dark-light"
                  placeholder="Your Email"
                />
                <button className="px-4 py-3 rounded-lg w-full bg-primary text-white font-bold md:w-fit md:whitespace-nowrap">
                  Get started
                </button>
              </div>
              <p className="text-dark-light text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left">
                <span className="font-bold italic text-[#B3BAC5] md:not-italic md:font-normal md:text-dark-light ">
                  Get a response tomorrow{" "}
                </span>
                if you submit by 9pm your local time. Otherwise, we will respond
                the following day.
              </p>
            </div>
            <div className="col-span-12 hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last">
              <div className="w-3/4 mx-auto relative">
              <div className="w-1/2 h-1/2 bg-[#EA6858] rounded-lg absolute top-[10%] -right-[8%]" />
              <div className="w-1/2 h-1/2 bg-white rounded-lg opacity-[.06] absolute -bottom-[10%] -left-[8%]" />
                <div className="w-full rounded-xl bg-white p-3 z-[1] relative">
                  <img
                    src={images.CtaImage}
                    alt="Travel Inspiration"
                    className="w-full h-full object-cover object-center md:h-52 lg:h-48 xl:h-60"
                  />
                  <div className="p-5">
                    <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
                      Tokyo Trip
                    </h2>
                    <p className="text-dark-light mt-3 text-sm md:text-lg">
                      A week with the Tokyo Skytree, 7/11's, and fun shopping in
                      Akihabara!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CTA