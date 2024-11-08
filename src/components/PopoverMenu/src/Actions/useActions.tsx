import React, { ReactElement, isValidElement } from 'react';
import classNames from 'classnames';
import { Button } from '../../../Button';

export const useActions = (children: React.ReactNode) => {
  let childrenArray = Array.isArray(children) ? children : [children];

  childrenArray = childrenArray.map((item, index) => {
    if (isValidElement(item)) {
      if (item.type === Button)
        return React.cloneElement(item, {
          size: 'small',
          key: `action-${index}`,
          className: classNames('sds_popoverMenu_button', {
            [(item as ReactElement).props.className as string]: (
              item as ReactElement
            ).props.className,
          }),
        } as React.Attributes);
    }
    return item;
  });

  return {
    childrenArray,
  };
};
