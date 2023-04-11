import { render } from '@testing-library/react';
import { Rate } from '../Rate';

describe('Rate', () => {
  it('should render the correct number of filled stars', () => {
    const { getAllByTestId } = render(<Rate value={3.5} />);
    const stars = getAllByTestId('star');
    expect(stars).toHaveLength(5);
    expect(
      stars.filter(star => star.getAttribute('fill') === '#facc15')
    ).toHaveLength(4);
  });
});
