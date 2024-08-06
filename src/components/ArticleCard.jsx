import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { images } from '../constants';

const ArticleCard = ({className}) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${className}`}
    >
      <img
        src={images.Post1Image}
        alt="Tokyo at Night"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />
      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
          Tokyo Trip
        </h2>
        <p className="text-dark-light mt-3 text-sm md:text-lg">
          A week with the Tokyo Skytree, 7/11's, and fun shopping in Akihabara!
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5 ">
            <img
              src={images.Post1Pfp}
              alt="Shiba Profile"
              className="w-9 h-9 rounded-full md:w-10 md:h-10"
            />
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                Oda Nobunaga
              </h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full">
                  <BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
                </span>
                <span className="italic text-dark-light text-xs md:text-sm">
                  Verified BlogBoss
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-dark-light italic text-sm md:text-base">
            March 4
          </span>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard
