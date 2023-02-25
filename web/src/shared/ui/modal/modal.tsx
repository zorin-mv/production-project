import {
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/class-names';

import { Portal } from '../portal';
import classes from './modal.module.scss';

interface IModalProps {
  onClose: () => void;
  isOpen: boolean;
  className?: string;
  children?: ReactNode;
  lazy?: boolean;
}

export const Modal = (props: IModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const [isMounted, setIsMounted] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const openingTimerRef = useRef(null);
  const closingTimerRef = useRef(null);

  const closeHandler = () => {
    setIsOpening(false);
    closingTimerRef.current = setTimeout(() => {
      onClose();
    }, 300);
  };

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
      openingTimerRef.current = setTimeout(() => {
        setIsOpening(true);
      }, 0);
      setIsMounted(true);
    }
    return () => {
      setIsOpening(false);
      clearTimeout(openingTimerRef.current);
      setIsMounted(false);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods = { [classes.opened]: isOpening };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        data-testid="modal"
        className={classNames(classes.modal, [className], mods)}
      >
        <div
          data-testid="modal-overlay"
          className={classes.overlay}
          onMouseDown={closeHandler}
        >
          <div
            data-testid="modal-content"
            className={classes.content}
            onMouseDown={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
