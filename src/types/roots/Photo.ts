import { CSSProperties } from 'react';

// export interface PhotoProps extends HTMLProps<HTMLDivElement> {
export interface IPhotoProps {
  url: string;
  // url: number;
  index: number;
  faded?: boolean;
  style?: CSSProperties;
}
