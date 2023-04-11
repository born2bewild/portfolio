import { fireEvent, render, waitFor } from '@testing-library/react';
import Tooltip from '../Tooltip';

describe.only('Tooltip', () => {
  test('should render the tooltip message when hovered', async () => {
    const message = 'Hello, world!';
    const { getByText, findByTestId } = render(
      <Tooltip message={message}>
        <button>Hover me</button>
      </Tooltip>
    );

    fireEvent.mouseEnter(getByText('Hover me'));

    await waitFor(() => {
      expect(getByText(message)).toBeInTheDocument();
    });
    // expect(await findByTestId(message)).toBeInTheDocument();
  });

  test('should hide the tooltip message when the mouse leaves the button', () => {
    const message = 'Hello, world!';
    const { getByText, queryByText } = render(
      <Tooltip message={message}>
        <button>Hover me</button>
      </Tooltip>
    );

    fireEvent.mouseEnter(getByText('Hover me'));
    fireEvent.mouseLeave(getByText('Hover me'));
    expect(queryByText(message)).toBeNull();
  });

  test('should hide the tooltip message when the button is clicked', () => {
    const message = 'Hello, world!';
    const { getByText, queryByText } = render(
      <Tooltip message={message}>
        <button>Hover me</button>
      </Tooltip>
    );

    fireEvent.mouseEnter(getByText('Hover me'));
    fireEvent.click(getByText('Hover me'));
    expect(queryByText(message)).toBeNull();
  });
});
