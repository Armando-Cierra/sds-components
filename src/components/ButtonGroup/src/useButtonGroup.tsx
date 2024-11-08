import {
  ReactNode,
  ReactElement,
  isValidElement,
  cloneElement,
  Children,
} from 'react';
import { Button } from '../../Button';
import { Tooltip } from '../../Tooltip';
import uniqid from 'uniqid';
import type { Sizes } from './types';

export const useButtonGroup = (children: ReactNode, size: Sizes) => {
  const childrenArray = Children.toArray(children);
  let content: ReactElement[] = [];

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Button) {
        content = [
          ...content,
          cloneElement(item as ReactElement, {
            className: (item as ReactElement).props.className
              ? `${
                  (item as ReactElement).props.className
                } sds_buttonGroup_button`
              : 'sds_buttonGroup_button',
            size: size,
            scaleWhileActive: false,
            key: uniqid('sds_buttonGroup_button_'),
            'data-testid': 'sds_buttonGroup_button',
          }),
        ];
      }

      if (item.type === Tooltip) {
        const button = item.props.children;
        content = [
          ...content,
          cloneElement(item as ReactElement, {
            children: cloneElement(button, {
              className: (item as ReactElement).props.className
                ? `${
                    (item as ReactElement).props.className
                  } sds_buttonGroup_button`
                : 'sds_buttonGroup_button',
              size: size,
              scaleWhileActive: false,
              key: uniqid('sds_buttonGroup_button_'),
              'data-testid': 'sds_buttonGroup_button',
            }),
          }),
        ];
      }
    }
  });

  return { content };
};
