'use client';

import { IPhotoProps } from '@src/types/roots';
import Image from 'next/image';
import React, { forwardRef, CSSProperties, RefObject } from 'react';

export const Photo = forwardRef<HTMLDivElement, IPhotoProps>(
  ({ url, index, faded, style, removePhoto, ...props }, ref) => {
    const inlineStyles: CSSProperties = {
      opacity: faded ? '0.2' : '1',
      transformOrigin: '0 0',
      height: index === 0 ? 410 : 200,
      gridRowStart: index === 0 ? 'span 2' : undefined,
      gridColumnStart: index === 0 ? 'span 2' : undefined,
      // backgroundImage: `url("${url}")`,
      // backgroundSize: 'cover',
      // backgroundPosition: 'center',
      // backgroundColor: 'grey',
      ...style,
    };

    return (
      <div
        className={`overflow-hidden relative`}
        ref={ref as RefObject<HTMLDivElement>}
        style={inlineStyles}
        {...props}
        onClick={() => {
          console.log('hello world ');
          if (removePhoto) removePhoto(index);
        }}
      >
        <Image
          src={url}
          width={513}
          height={513}
          layout="responsive"
          alt="..."
        />
        <div className="absolute top-0 bottom-0 left-0 right-0  opacity-0 hover:opacity-100 hover:bg-black/60 transition-all p-[8px]">
          <span className="block h-[15px] w-[15px] rounded bg-white" />
        </div>
      </div>
    );
  }
);
