import { ReactNode, isValidElement, useMemo } from 'react';
import { useTransition } from '@react-spring/web';
import { Content } from './Content';
import { Footer } from './Footer';
import type { AvailableTelicon } from '../../Telicon';
import type { useAlertProps } from './types';

export const useAlert = ({
  isOpen,
  variant,
  children,
  controlledIcon,
}: useAlertProps) => {
  const iconMap: Record<string, AvailableTelicon> = {
    info: 'info-circle--line',
    warning: 'warning-triangle--line',
    danger: 'warning-octagon--line',
    default: 'question-circle--line',
  };

  const alertBoxTransition = useTransition(isOpen, {
    from: { y: 200, opacity: 0, transition: 'cubic-bezier(0.25, 0, 0, 1)' },
    enter: { y: 0, opacity: 1, transition: 'cubic-bezier(0.25, 0, 0, 1)' },
    leave: { y: 200, opacity: 0, transition: 'cubic-bezier(0.25, 0, 1, 1)' },
    delay: 0.64,
  });

  const AlertTransition = useTransition(isOpen, {
    from: { opacity: 0, transition: 'cubic-bezier(0.25, 0, 0, 1)' },
    enter: { opacity: 1, transition: 'cubic-bezier(0.25, 0, 0, 1)' },
    leave: { opacity: 0, transition: 'cubic-bezier(0.25, 0, 1, 1)' },
    delay: 0.64,
  });

  const icon = useMemo((): AvailableTelicon => {
    return controlledIcon ?? iconMap[variant] ?? iconMap.default;
  }, [variant]);

  const childrenArray = Array.isArray(children) ? children : [children];
  let content: ReactNode = null;
  let footer: ReactNode = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Content) content = item;
      if (item.type === Footer) footer = item;
    }
  });

  return {
    icon,
    alertBoxTransition,
    AlertTransition,
    content,
    footer,
  };
};
