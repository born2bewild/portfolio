import { render } from '@testing-library/react';
import Star from './Star';

describe('Star component', () => {
  it('should render an unfilled star by default', () => {
    const { getByTestId } = render(<Star isFilled={false} />);
    expect(getByTestId('star')).toHaveAttribute('fill', '#d1d5db');
  });

  it('should render a filled star when isFilled is true', () => {
    const { getByTestId } = render(<Star isFilled={true} />);
    expect(getByTestId('star')).toHaveAttribute('fill', '#facc15');
  });
});
