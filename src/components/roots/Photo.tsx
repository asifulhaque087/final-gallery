'use client';

import { IPhotoProps } from '@src/types/roots';
import Image from 'next/image';
import React, { forwardRef, CSSProperties, RefObject } from 'react';

export const Photo = forwardRef<HTMLDivElement, IPhotoProps>(
  ({ url, index, faded, style, isSelected, selectPhotos, ...props }, ref) => {
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
          // if (selectPhotos) selectPhotos(index, isSelected ? true : false);
          if (selectPhotos) selectPhotos(url, isSelected ? true : false);
        }}
      >
        <Image
          src={url}
          // width={513}
          // height={513}
          // layout="responsive"
          sizes="500px"
          fill
          alt="..."
        />
        <div
          className={`absolute top-0 bottom-0 left-0 right-0  ${
            isSelected
              ? 'backdrop-opacity-80 bg-white/30'
              : 'opacity-0 hover:opacity-100 hover:bg-black/60'
          }  transition-all p-[20px]`}
        >
          <div
            className={`grid place-items-center text-white text-[10px] h-[20px] w-[15px] rounded ${
              isSelected ? 'bg-[blue]' : 'bg-white'
            }`}
          >
            ✓
          </div>
        </div>
      </div>
    );
  }
);
