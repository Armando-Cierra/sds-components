import type { ReactElement, ReactNode } from 'react';
import { PageContentFooter } from '../PageContentFooter';
import type { UsePageContent } from './types';

export const usePageContent = ({ children }: UsePageContent) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  let body: ReactElement[] = [];
  let footer: ReactNode = null;

  childrenArray.forEach((item) => {
    if (item.type === PageContentFooter) {
      footer = item;
    } else {
      body = [...body, item];
    }
  });

  return { body, footer };
};
