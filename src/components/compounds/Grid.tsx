'use client';

import { IGrid } from '@src/types/compounds';

export const Grid = ({ children }: IGrid) => {
  return (
    <div
      // className=""
      // className="grid gap-[10px] p-[10px] grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
      className="mx-auto p-[20px] grid gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
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
    </div>
  );
};
