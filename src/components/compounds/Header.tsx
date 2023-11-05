'use client';

import { IHeader } from '@src/types/compounds';

export const Header = ({ totalItems, removePhotos }: IHeader) => {
  return (
    <div className="px-[2%] flex items-center border-b justify-between h-[60px]">
      {totalItems ? (
        <>
          <h1 className="text-[24px] text-[#2e2e2e] font-[700] capitalize">
            {totalItems}
            {totalItems === 1 ? ' file ' : ' files '}
            selected
          </h1>
          <button
            className="text-red-500 text-[16px] font-[500]"
            onClick={() => removePhotos()}
          >
            Delete {totalItems === 1 ? ' file ' : ' files '}
          </button>
        </>
      ) : null}
    </div>
  );
};
