'use client';

import { ISortablePhotoProps } from '@src/types/compounds';
import React, { forwardRef, CSSProperties, RefObject } from 'react';

export const Photo = forwardRef<HTMLDivElement, ISortablePhotoProps>(
  ({ url, index, faded, style, ...props }, ref) => {
    const inlineStyles: CSSProperties = {
      opacity: faded ? '0.2' : '1',
      transformOrigin: '0 0',
      height: index === 0 ? 410 : 200,
      gridRowStart: index === 0 ? 'span 2' : undefined,
      gridColumnStart: index === 0 ? 'span 2' : undefined,
      backgroundImage: `url("${url}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'grey',
      ...style,
    };

    return (
      <div
        ref={ref as RefObject<HTMLDivElement>}
        style={inlineStyles}
        {...props}
      />
    );
  }
);
