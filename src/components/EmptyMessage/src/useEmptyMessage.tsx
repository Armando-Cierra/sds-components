import { cloneElement, isValidElement } from 'react';
import { Description } from './Description';
import { Actions } from './Actions';
import { Header } from './Header';
import type { EmptyMessageProps } from './types';

export const useEmptyMessage = (props: EmptyMessageProps) => {
  const { children, icon, image } = props;

  const childrenArray = Array.isArray(children) ? children : [children];

  let description: React.ReactNode | null = null;
  let actions: React.ReactNode | null = null;
  let header: React.ReactNode | null = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Description) description = item;
      if (item.type === Actions) actions = item;
      if (item.type === Header) {
        header = cloneElement(item, { icon, image } as React.ComponentProps<
          typeof Header
        >);
      }
    }
  });

  if (!header) {
    throw new Error(
      'The <EmptyMessage.Header> subcomponent is required to render the component.'
    );
  }

  return {
    description,
    actions,
    header,
  };
};
