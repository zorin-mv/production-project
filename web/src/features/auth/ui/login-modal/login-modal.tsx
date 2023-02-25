import { Modal } from 'shared/ui/modal';

import { LoginForm } from '../login-form/login-form';

interface ILoginModalProps {
  onClose: () => void;
  isOpen: boolean;
  className?: string;
}

export const LoginModal = ({
  className,
  isOpen,
  onClose,
}: ILoginModalProps) => (
  <Modal
    data-testid="login-modal"
    className={className}
    onClose={onClose}
    isOpen={isOpen}
    lazy
  >
    <LoginForm />
  </Modal>
);
