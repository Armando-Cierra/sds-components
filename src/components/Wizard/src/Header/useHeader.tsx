import { isValidElement, type ReactNode } from 'react';
import { HeaderTitle } from '../HeaderTitle';
import { HeaderActions } from '../HeaderActions';

export const useHeader = (children: ReactNode) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  let title: ReactNode = null;
  let actions: ReactNode = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === HeaderTitle) title = item;
      if (item.type === HeaderActions) actions = item;
    }
  });

  if (title === null)
    throw new Error(
      '<Wizard.HeaderTitle> is a required subcomponent for <Wizard.Header>.'
    );

  return { title, actions };
};
