'use client';

import { IHeader } from '@src/types/compounds';

export const Header = ({ totalItems, removePhotos }: IHeader) => {
  return (
    <div className="px-[3%] flex items-center border-b border-[#d3d3d3] justify-between h-[70px]">
      {totalItems ? (
        <>
          <h1 className="text-[24px] text-[#353535] font-[700] capitalize">
            {totalItems}
            {totalItems === 1 ? ' file ' : ' files '}
            selected
          </h1>
          <span
            className="text-[#f15151] text-[16px] font-[600]"
            onClick={() => removePhotos()}
          >
            Delete {totalItems === 1 ? ' file ' : ' files '}
          </span>
        </>
      ) : (
        <h1 className="text-[24px] text-[#353535] font-[700] capitalize">
          gallery
        </h1>
      )}
    </div>
  );
};
