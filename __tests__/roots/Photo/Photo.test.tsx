import { Photo } from '@src/components/roots';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Photo component', () => {
  test('should render an image with the given URL', () => {
    const url = 'https://example.com/image.jpg';
    render(<Photo url={url} index={2} />);

    const image: HTMLImageElement = screen.getByTestId('photo-img');
    expect(image).toBeInTheDocument();
    expect(image.src).toBe(url);
  });

  test('should call the `selectPhotos` callback when the image is clicked', () => {
    const selectPhotosMock = jest.fn();
    render(
      <Photo
        url="https://example.com/image.jpg"
        index={2}
        selectPhotos={selectPhotosMock}
      />
    );

    const image: HTMLImageElement = screen.getByTestId('photo-img');
    image.click();

    expect(selectPhotosMock).toHaveBeenCalledTimes(1);
  });

  test('should render a checkmark overlay when the image is selected', () => {
    render(
      <Photo url="https://example.com/image.jpg" index={2} isSelected={true} />
    );

    const checkmarkEl = screen.getByTestId('check-mark');
    expect(checkmarkEl).toHaveClass('bg-[#305df6]');
  });
});
