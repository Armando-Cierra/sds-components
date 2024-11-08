import {
  cloneElement,
  createElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';
import classNames from 'classnames';
import { Title } from '../Title';
import { Badge } from '../../../Badge';
import { Loader } from '../../../Loader';
import { Telicon } from '../../../Telicon';
import uniqid from 'uniqid';

export const useTab = (children: ReactNode) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  const titleChild = childrenArray.find((child) => child.type === Title);
  let title = titleChild?.props?.children;

  let content: ReactNode[] = [];

  title = Array.isArray(title) ? title : [title];

  title?.forEach((item: ReactElement) => {
    if (typeof item === 'string')
      content = [
        ...content,
        createElement('span', { key: uniqid('sds_tabGroup_titleItem_') }, item),
      ];
    if (isValidElement(item)) {
      if (item.type === Badge) content = [...content, item];
      if (item.type === Telicon || item.type === Loader)
        content = [
          ...content,
          cloneElement(item as ReactElement, {
            size: 'default',
            key: uniqid('sds_tabGroup_icon'),
            className: classNames('sds_tabGroup_telicon', {
              [(item as ReactElement).props.className as string]: (
                item as ReactElement
              ).props.className,
            }),
          }),
        ];
    }
  });

  if (content.length === 0) {
    throw new Error('<TabGroup.Title> is required and should have a child');
  }

  const titleElement = cloneElement(titleChild, {
    children: content,
  });

  return { titleElement };
};
