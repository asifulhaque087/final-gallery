'use client';

import { IGrid } from '@src/types/compounds';

export const Grid = ({ children, columns }: IGrid) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridGap: 10,
        padding: 10,
      }}
    >
      {children}
    </div>
  );
};
