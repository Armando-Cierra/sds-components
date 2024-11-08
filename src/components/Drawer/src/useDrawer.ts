import {
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  useEffect,
} from 'react';
import { useTransition } from '@react-spring/web';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';
import type { UseDrawerProps } from './types';

export const useDrawer = ({
  children,
  position,
  isOpen,
  onClose,
  maxWidth,
}: UseDrawerProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  let header: ReactNode = null;
  let content: ReactNode = null;
  let footer: ReactNode = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Header)
        header = cloneElement(item as ReactElement, {
          drawerPosition: position,
          onClose: onClose,
        });
      if (item.type === Content) content = item;
      if (item.type === Footer) footer = item;
    }
  });

  const DrawerTransition = useTransition(isOpen, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: 'cubic-bezier(0.25, 0, 0, 1)',
    },
    leave: {
      opacity: 0,
      transition: 'cubic-bezier(0.25, 0, 1, 1)',
    },
  });

  const DrawerCardTransition = useTransition(isOpen, {
    from: {
      transform:
        position === 'left'
          ? `translateX(-${maxWidth})`
          : `translateX(${maxWidth})`,
    },
    enter: {
      transform: 'translateX(0px)',
      transition: 'cubic-bezier(0.25, 0, 0, 1)',
    },
    leave: {
      transform:
        position === 'left'
          ? `translateX(-${maxWidth})`
          : `translateX(${maxWidth})`,
      transition: 'cubic-bezier(0.25, 0, 1, 1)',
    },
  });

  const handleOnClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { className } = e.currentTarget;
    if (className === (e.target as HTMLDivElement).className) onClose?.();
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

  return {
    DrawerTransition,
    DrawerCardTransition,
    handleOnClose,
    header,
    content,
    footer,
  };
};
