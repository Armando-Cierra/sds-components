import React, { ReactElement, ReactNode, isValidElement } from 'react';
import classNames from 'classnames';
import { Telicon } from '../../../Telicon';
import { Avatar } from '../../../Avatar';

export const useOption = (children: React.ReactNode) => {
  const processChild = (child: ReactNode, index: number): ReactNode => {
    if (isValidElement(child)) {
      if (child.type === Telicon) {
        return React.cloneElement(child as ReactElement, {
          key: `telicon-${index}`,
          size: 'default',
          className: classNames('sds_menu_telicon', {
            [(child as ReactElement).props.className as string]: (
              child as ReactElement
            ).props.className,
          }),
        });
      }
      if (child.type === Avatar) {
        return React.cloneElement(child as React.ReactElement, {
          key: `avatar-${index}`,
          size: 'small',
          className: classNames('sds_menu_avatar', {
            [(child as ReactElement).props.className as string]: (
              child as ReactElement
            ).props.className,
          }),
        });
      }
      if (React.Children.count((child as ReactElement).props.children) > 0) {
        //this is done if the telicon is not a direct child of the menuoption
        //to iterate over each child, until it finds a telicon/avatar
        //this is something we should revisit in all the components.
        return React.cloneElement(child as ReactElement, {
          ...child.props,
          children: React.Children.map(
            (child as ReactElement).props.children,
            processChild
          ),
        });
      }
    }
    return child;
  };

  const processedChildren = React.Children.map(children, processChild);

  return {
    childrenArray: processedChildren,
  };
};
