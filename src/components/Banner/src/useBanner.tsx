/* eslint-disable @typescript-eslint/no-unused-vars */
import { isValidElement } from 'react';
import type { BannerProps, Variant } from './types';
import { Actions } from './Actions';
import { Content } from './Content';
import type { AvailableTelicon } from '../../Telicon';
import useMediaQuery from './utils';
import { useTransition } from 'react-spring';

export const useBanner = ({
  isOpen,
  children,
  icon: controlledIcon,
  display,
  variant = 'default',
  zIndex,
}: BannerProps) => {
  const shouldShowMobileCloseButton = useMediaQuery('(max-width: 767px)');
  const childrenArray = Array.isArray(children) ? children : [children];

  let actions: React.ReactNode | null = null;
  let content: React.ReactNode | null = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Actions) actions = item;
      if (item.type === Content) content = item;
    }
  });

  const BannerTransition = useTransition(isOpen, {
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

  const ICONS_MAP: Record<Variant, AvailableTelicon> = {
    default: 'question-circle--fill',
    success: 'check-circle--fill',
    danger: 'warning-octagon--fill',
    warning: 'warning-triangle--fill',
  };

  const icon = controlledIcon ?? ICONS_MAP[variant] ?? 'question--circle';

  if (display === 'block' && zIndex !== 0) {
    throw new Error(
      'zIndex should only be used when using the overlay display.'
    );
  }

  return {
    actions,
    content,
    icon,
    shouldShowMobileCloseButton,
    BannerTransition,
  };
};
