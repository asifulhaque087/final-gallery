import { CSSProperties } from 'react';
export interface ISortablePhotoProps {
  url: string;
  index: number;
  faded?: boolean;
  style?: CSSProperties;
  removePhoto?: (idx: number) => void;
}
