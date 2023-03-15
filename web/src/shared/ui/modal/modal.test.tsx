import { fireEvent, waitFor } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/component-render';

import { Modal } from './modal';

describe('Modal', () => {
  test('renders without errors', () => {
    const { getByTestId } = componentRender(
      <Modal isOpen onClose={() => {}} />
    );
    expect(getByTestId('modal')).toBeInTheDocument();
  });

  test('renders children content', () => {
    const { getByText } = componentRender(
      <Modal isOpen onClose={() => {}}>
        <div>Modal content</div>
      </Modal>
    );
    expect(getByText('Modal content')).toBeInTheDocument();
  });

  test('calls onClose when overlay is clicked', async () => {
    const handleClose = jest.fn();
    const { getByTestId } = componentRender(
      <Modal isOpen onClose={handleClose} />
    );
    const overlay = getByTestId('modal-overlay');
    fireEvent.mouseDown(overlay);

    await waitFor(() => expect(handleClose).toHaveBeenCalledTimes(1));
  });

  test('calls onClose when escape key is pressed', () => {
    const handleClose = jest.fn();
    componentRender(<Modal isOpen onClose={handleClose} />);
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
