import { fireEvent, render } from '@testing-library/react';
import { DarkModeSwitch } from '../DarkModeSwitch';

describe('DarkModeSwitch component', () => {
  it('should render correctly', () => {
    const { getByRole } = render(
      <DarkModeSwitch onChange={() => {}} checked={false} />
    );
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should call onChange function when clicked', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <DarkModeSwitch onChange={handleChange} checked={false} />
    );
    fireEvent.click(getByRole('button'));
    expect(handleChange).toHaveBeenCalled();
  });

  it('should show moon when checked is true', () => {
    const { getByTestId } = render(
      <DarkModeSwitch onChange={() => {}} checked={true} />
    );
    expect(getByTestId('dark-mode-icon')).toBeInTheDocument();
    expect(getByTestId('circle')).toHaveAttribute('fill', '#e4e4e7');
    expect(getByTestId('sun-light-lines')).toHaveStyle({ opacity: 0 });
  });

  it('should show sun when checked is false', () => {
    const { getByTestId } = render(
      <DarkModeSwitch onChange={() => {}} checked={false} />
    );
    expect(getByTestId('dark-mode-icon')).toBeInTheDocument();
    expect(getByTestId('circle')).toHaveAttribute('fill', '#fde047');
    expect(getByTestId('sun-light-lines')).toHaveStyle({ opacity: 1 });
  });
});
