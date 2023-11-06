/* eslint-disable @next/next/no-img-element */
'use client';

// ** External imports
import { BsImage } from 'react-icons/bs';

// ** Internal imports
import { IGrid } from '@src/types/compounds';

export const Grid = ({ children }: IGrid) => {
  return (
    <div className="mx-auto p-[20px] sm:p-[40px] grid gap-[10px] sm:gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
      {children}

      <div className="relative overflow-hidden rounded-md border border-[#d3d3d3] border-dashed bg-[#f9f8f8] cursor-pointer">
        <img
          className="w-[100%]  h-[100%] object-cover object-center "
          alt="feature product"
          src={'/images/image-1.webp'}
        />
        <div className="absolute top-0 bottom-0 left-0 right-0">
          <div className="w-full h-full grid place-items-center  bg-[#f9f8f8]">
            <div className="grid place-items-center gap-y-[18px]">
              <BsImage size={18} />
              <span className="text-[12px] sm:text-[16px] capitalize font-[500]">
                Add images
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
