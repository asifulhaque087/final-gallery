/* eslint-disable @next/next/no-img-element */
'use client';

import { IGrid } from '@src/types/compounds';

import { BsImage } from 'react-icons/bs';


export const Grid = ({ children }: IGrid) => {
  return (
    <div
      // className=""
      // className="grid gap-[10px] p-[10px] grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
      className="mx-auto p-[40px] grid gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
      // className="flex gap-[10px] p-[10px] flex-wrap"

      // className="grid gap-[10px] p-[10px] grid-cols-2 sm:grid-cols-3 md:grid-cols-5"

      // style={{
      //   display: 'grid',
      //   gridTemplateColumns: `repeat(${columns}, 1fr)`,
      //   gridGap: 10,
      //   padding: 10,
      // }}

      // style={{
      //   display: 'grid',
      //   // gridTemplateColumns: `repeat(${5}, 1fr)`,
      //   // gridTemplateColumns: `repeat(${5}, 200px)`,
      //   gridTemplateColumns: `repeat(auto-fit, minMax(200px, 1fr))`,
      //   gridTemplateRows: '200px',
      //   gridGap: 10,
      //   // padding: 10,
      // }}
    >
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
              <span className="text-[16px] capitalize font-[500]">
                Add images
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid place-items-center rounded-md border border-[#d3d3d3] border-dashed bg-[#f9f8f8] cursor-pointer">
        <div className="grid place-items-center gap-y-[18px]">
          <BsImage size={18} />
          <span className="text-[16px] capitalize font-[500]">Add images</span>
        </div>
      </div> */}
    </div>
  );
};
