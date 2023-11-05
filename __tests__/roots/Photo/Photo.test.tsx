import { Photo } from '@src/components/roots';
import { render, screen } from '@testing-library/react';

describe('Photo', () => {
  it('should have button text', () => {
    render(<Photo />); // ARRANGE

    const myElem = screen.getByText('button'); // ACT

    expect(myElem).toBeInTheDocument(); // ASSERT
  });
});
