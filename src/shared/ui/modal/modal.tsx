import { MouseEvent, ReactNode, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/class-names';

import { Portal } from '../portal';
import classes from './modal.module.scss';

interface IModalProps {
  onClose: () => void;
  isOpen: boolean;
  className?: string;
  children?: ReactNode;
}

export const Modal = ({
  className,
  children,
  isOpen,
  onClose,
}: IModalProps) => {
  const mods = { [classes.opened]: isOpen };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div
        data-testid="modal"
        className={classNames(classes.modal, [className], mods)}
      >
        <div
          data-testid="modal-overlay"
          className={classes.overlay}
          onClick={onClose}
        >
          <div
            data-testid="modal-content"
            className={classes.content}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
