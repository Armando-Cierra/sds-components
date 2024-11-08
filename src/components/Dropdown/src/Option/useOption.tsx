import React, { ReactElement, isValidElement } from 'react';
import classNames from 'classnames';
import { Telicon } from '../../../Telicon';
import { Avatar } from '../../../Avatar';

const useOption = (children: React.ReactNode) => {
  let childrenArray = Array.isArray(children) ? children : [children];

  childrenArray = childrenArray.map((item, index) => {
    if (isValidElement(item)) {
      if (item.type === Telicon)
        return React.cloneElement(item as React.ReactElement, {
          key: `telicon-${index}`,
          size: 'default',
          className: classNames('sds_menu_telicon', {
            [(item as ReactElement).props.className as string]: (
              item as ReactElement
            ).props.className,
          }),
        });
      if (item.type === Avatar)
        return React.cloneElement(item as React.ReactElement, {
          key: `avatar-${index}`,
          size: 'small',
          className: classNames('sds_menu_avatar', {
            [(item as ReactElement).props.className as string]: (
              item as ReactElement
            ).props.className,
          }),
        });
    }
    return item;
  });

  return {
    childrenArray,
  };
};

export default useOption;
