import { CSSProperties } from 'react';
export interface ISortablePhotoProps {
  url: string;
  index: number;
  faded?: boolean;
  style?: CSSProperties;
  selectPhotos?: (url: string, isSelected: boolean) => void;
  isSelected?: boolean;
}
