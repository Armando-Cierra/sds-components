import {
  useEffect,
  isValidElement,
  ReactNode,
  cloneElement,
  ReactElement,
} from 'react';
import { useTransition } from '@react-spring/web';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';
import type { useModalProps } from './types';

export const useModal = ({
  children,
  isOpen,
  onClose,
  maxWidth,
  height,
}: useModalProps) => {
  const getMaxWidth = () => {
    if (maxWidth === '100%' || maxWidth === '100vw') return 'calc(100% - 48px)';
    return maxWidth;
  };

  const validatedMaxWidth = getMaxWidth();

  const ModalTransition = useTransition(isOpen, {
    from: {
      opacity: 0,
      transition: 'cubic-bezier(0.25, 0, 0, 1)',
    },
    enter: {
      opacity: 1,
      transition: 'cubic-bezier(0.25, 0, 0, 1)',
    },
    leave: {
      opacity: 0,
      transition: 'cubic-bezier(0.25, 0, 1, 1)',
    },
    delay: 0.64,
  });

  const ModalCardTransition = useTransition(isOpen, {
    from: {
      y: 200,
      opacity: 0,
      transition: 'cubic-bezier(0.25, 0, 0, 1)',
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: 'cubic-bezier(0.25, 0, 0, 1)',
    },
    leave: {
      y: 200,
      opacity: 0,
      transition: 'cubic-bezier(0.25, 0, 1, 1)',
    },
    delay: 0.64,
  });

  const handleOnClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { className } = e.currentTarget;

    if (className === (e.target as HTMLDivElement).className && onClose) {
      onClose();
    }
  };

  useEffect(() => {
    const keyFilter = (e: KeyboardEvent) => {
      if (e.code === 'Escape') onClose?.();
    };

    document.addEventListener('keydown', keyFilter);

    return () => {
      document.removeEventListener('keydown', keyFilter);
    };
  }, [onClose]);

  const childrenArray = Array.isArray(children) ? children : [children];

  let header: ReactNode = null;
  let content: React.ReactNode = null;
  let footer: React.ReactNode = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Header)
        header = cloneElement(item as ReactElement, {
          onClose,
        });
      if (item.type === Content) content = item;
      if (item.type === Footer) footer = item;
    }
  });

  const hasCustomHeight = height !== 'auto';

  return {
    handleOnClose,
    ModalTransition,
    ModalCardTransition,
    header,
    content,
    footer,
    validatedMaxWidth,
    hasCustomHeight,
  };
};
