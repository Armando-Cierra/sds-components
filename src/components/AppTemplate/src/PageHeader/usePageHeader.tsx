import { ReactNode, isValidElement } from 'react';
import { PageHeaderActions } from '../PageHeaderActions';
import { PageHeaderNavigation } from '../PageHeaderNavigation';
import { PageHeaderTitle } from '../PageHeaderTitle';
import type { UsePageHeader } from './types';

export const usePageHeader = ({ children }: UsePageHeader) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  let title: ReactNode = null;
  let navigation: ReactNode = null;
  let actions: ReactNode = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === PageHeaderTitle) title = item;
      if (item.type === PageHeaderNavigation) navigation = item;
      if (item.type === PageHeaderActions) actions = item;
    }
  });

  return { title, navigation, actions };
};
