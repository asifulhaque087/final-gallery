'use client';

import { IGrid } from '@src/types/compounds';

export const Grid = ({ children }: IGrid) => {
  return (
    <div
      className="grid gap-[10px] p-[10px] grid-cols-2 sm:grid-cols-3 md:grid-cols-5"

      // style={{
      //   display: 'grid',
      //   gridTemplateColumns: `repeat(${columns}, 1fr)`,
      //   gridGap: 10,
      //   padding: 10,
      // }}
    >
      {children}
    </div>
  );
};
