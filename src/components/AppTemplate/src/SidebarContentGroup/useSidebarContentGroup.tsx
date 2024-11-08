import { ReactElement, ReactNode, isValidElement, useState } from 'react';
import { SidebarContentGroupActions } from '../SidebarContentGroupActions';
import type { UseSidebarContentGroup } from './types';

export const useSidebarContentGroup = ({
  children,
  controlledValue,
  defaultExpanded,
  variant,
  onClick,
}: UseSidebarContentGroup) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  let actions: ReactNode = null;
  let content: ReactElement[] = [];

  const [innerGroupState, setInnerGroupState] = useState(defaultExpanded);
  const isExpanded = controlledValue ?? innerGroupState;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === SidebarContentGroupActions) {
        actions = item;
      } else {
        content = [...content, item];
      }
    }
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (variant === 'accordion') {
      setInnerGroupState((prevState) => !prevState);
      onClick?.(e);
    }
  };

  const handleKeyDown = (e: unknown) => {
    if ((e as React.KeyboardEvent<HTMLDivElement>).code === 'Space') {
      setInnerGroupState((prevState) => !prevState);
      onClick?.(e as React.MouseEvent<HTMLDivElement>);
    }
  };

  return { actions, content, isExpanded, handleClick, handleKeyDown };
};
