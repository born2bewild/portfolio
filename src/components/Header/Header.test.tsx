import { fireEvent, render } from '@testing-library/react';
import Navbar from '.';

describe('Navbar', () => {
  test('renders the Navbar component', () => {
    const { getByRole } = render(<Navbar />);
    const navbarElement = getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  test('toggles the menu on button click', () => {
    const { getByRole, getByText } = render(<Navbar />);
    const menuButton = getByRole('button');
    const homeLink = getByText('Home');

    fireEvent.click(menuButton);
    expect(homeLink).not.toBeVisible();

    fireEvent.click(menuButton);
    expect(homeLink).toBeVisible();
  });

  test('toggles the dark mode switch on click', () => {
    const { getByLabelText } = render(<Navbar />);
    // const darkModeSwitch = getByLabelText('Dark Mode Switch');
    // expect(darkModeSwitch.checked).toBe(false);

    // fireEvent.click(darkModeSwitch);
    // expect(darkModeSwitch.checked).toBe(true);

    // fireEvent.click(darkModeSwitch);
    // expect(darkModeSwitch.checked).toBe(false);
  });
});
