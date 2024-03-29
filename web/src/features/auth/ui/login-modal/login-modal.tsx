import { memo, Suspense } from 'react';
import { Modal } from 'shared/ui/modal';
import { Spinner } from 'shared/ui/spinner';

import { LoginFormAsync } from '../login-form/login-form.async';

interface ILoginModalProps {
  onClose: () => void;
  isOpen: boolean;
  className?: string;
}

export const LoginModal = memo(({ className, isOpen, onClose }: ILoginModalProps) => (
  <Modal data-testid="login-modal" className={className} onClose={onClose} isOpen={isOpen} lazy>
    <Suspense fallback={<Spinner />}>
      <LoginFormAsync onSuccess={onClose} />
    </Suspense>
  </Modal>
));
