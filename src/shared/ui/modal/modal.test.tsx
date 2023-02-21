import { fireEvent, render } from '@testing-library/react';

import { Modal } from './modal';

describe('Modal', () => {
  test('renders without errors', () => {
    const { getByTestId } = render(<Modal isOpen onClose={() => {}} />);
    expect(getByTestId('modal')).toBeInTheDocument();
  });

  test('renders children content', () => {
    const { getByText } = render(
      <Modal isOpen onClose={() => {}}>
        <div>Modal content</div>
      </Modal>
    );
    expect(getByText('Modal content')).toBeInTheDocument();
  });

  test('calls onClose when overlay is clicked', () => {
    const handleClose = jest.fn();
    const { getByTestId } = render(<Modal isOpen onClose={handleClose} />);
    const overlay = getByTestId('modal').querySelector('.overlay');
    fireEvent.click(overlay);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('calls onClose when escape key is pressed', () => {
    const handleClose = jest.fn();
    render(<Modal isOpen onClose={handleClose} />);
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
