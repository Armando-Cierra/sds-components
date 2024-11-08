import { ChangeEvent, isValidElement } from 'react';
import { Content } from '../Content';
import { Title } from '../Title';
import uniqid from 'uniqid';
import type { AccordionItemProps } from './types';

export const useItem = ({ children, id, onChange }: AccordionItemProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  let content: React.ReactNode | null = null;
  let title: React.ReactNode | null = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Content) content = item;
      if (item.type === Title) title = item;
    }
  });

  const innerID = uniqid('accordion_');

  const handleClick = () => {
    const input = document.getElementById(id ?? innerID);
    input?.click();
  };

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    onChange?.({ selected: event.target.checked, ...event });
  }

  return {
    content,
    title,
    innerID,
    handleChange,
    handleClick,
  };
};
