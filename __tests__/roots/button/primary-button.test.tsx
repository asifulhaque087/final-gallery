import { Button } from '@src/components/roots';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('should have button text', () => {
    render(<Button />); // ARRANGE

    const myElem = screen.getByText('button'); // ACT

    expect(myElem).toBeInTheDocument(); // ASSERT
  });
});
