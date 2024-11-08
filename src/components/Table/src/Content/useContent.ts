import {
  ReactElement,
  ReactNode,
  isValidElement,
  useEffect,
  useState,
} from 'react';
import uniqid from 'uniqid';
import { Body } from '../Body';
import { Header } from '../Header';

export const useContent = (
  children: ReactNode,
  columnsSizes?: string,
  id?: string
) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const contentID = id ?? uniqid('sds_table_content_');
  const childrenArray = Array.isArray(children) ? children : [children];
  let header: ReactNode = null;
  let body: ReactNode = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Header) header = item;
      if (item.type === Body) body = item;
    }
  });

  if (!header || !body)
    throw new Error(
      '<Table.Content> requires as subcomponents the <Table.Header> and <Table.Body>'
    );

  const headerChildren = (header as ReactElement).props.children;
  const headerChildrenArray = Array.isArray(headerChildren)
    ? headerChildren
    : [headerChildren];
  const columnsAmount = headerChildrenArray.length;
  const columnSizesString = columnsSizes ?? `repeat(${columnsAmount}, 1fr)`;

  useEffect(() => {
    const contentElement = document.getElementById(contentID);
    const checkOverflow = () =>
      contentElement && setIsScrolled(contentElement.scrollLeft > 0);

    checkOverflow();

    const handleScroll = () => checkOverflow();
    contentElement?.addEventListener('scroll', handleScroll);

    return () => {
      contentElement?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    header,
    body,
    columnSizesString,
    contentID,
    isScrolled,
  };
};
