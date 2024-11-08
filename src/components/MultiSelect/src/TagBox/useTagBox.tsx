import { ReactElement, ReactNode, cloneElement, isValidElement } from 'react';
import classNames from 'classnames';
import { Tag } from '../../../Tag';

export const useTagBox = (children: ReactNode, isDisabled?: boolean) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  let tags: ReactNode[] = [];

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Tag)
        tags = [
          ...tags,
          cloneElement(item as ReactElement, {
            className: classNames('sds_multiSelect_tag', {
              [(item as ReactElement).props.className as string]: (
                item as ReactElement
              ).props.className,
            }),
            isRemovable: !isDisabled,
            isSelectable: false,
          }),
        ];
    }
  });

  return {
    tags,
  };
};
