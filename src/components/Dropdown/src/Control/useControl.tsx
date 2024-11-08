import {
  useState,
  useEffect,
  ReactNode,
  ReactElement,
  cloneElement,
} from 'react';
import { Option } from '../Option';
import { Menu } from '../../../Menu';
import type { UseControlProps } from './types';

export const useControl = ({
  innerId,
  children,
  defaultValue,
  controlledValue,
  hasError,
  isDisabled,
  isReadOnly,
  showModeOption,
}: UseControlProps) => {
  // This menu state is not actually controlling anything, it just helps to identify when an interaction is happening with the menu trigger, using this as a parameter to update dynamically the width of the menu based on the dropdown box
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuWidth, setMenuWidth] = useState(256);
  const [innerValue, setInnerValue] = useState<ReactNode>(defaultValue ?? '');
  const childrenArray = Array.isArray(children) ? children.flat() : [children];
  const errorValidation = hasError && !isReadOnly && !isDisabled;
  const readOnlyValidation = isReadOnly && !isDisabled;
  const value =
    controlledValue !== undefined
      ? getValue('controlled')
      : getValue('uncontrolled');

  let content: ReactElement[] = [];

  function getValue(type: 'controlled' | 'uncontrolled'): ReactNode {
    const newValue = type === 'controlled' ? controlledValue : innerValue;

    const findFilter = () => {
      return childrenArray.find((item) => item.props.value === newValue);
    };

    const showModeOptions = {
      customValue: () => {
        const filter = findFilter();
        return filter ? filter.props.customValue : '';
      },
      children: () => {
        const filter = findFilter();
        return filter ? filter.props.children : '';
      },
      value: () => {
        return newValue ?? '';
      },
    };

    return showModeOptions[showModeOption]();
  }

  const handleClick = (item: ReactElement) => () => {
    const { value, onClick } = item.props;
    setInnerValue(value);
    onClick?.();
  };

  childrenArray.forEach((item) => {
    if (item.type === Menu.Header) content = [...content, item];
    if (item.type === Option)
      content = [
        ...content,
        cloneElement(item as ReactElement, {
          onClick: handleClick(item),
        }),
      ];
    if (item.type === Menu.Search) content = [...content, item];
    if (item.type === Menu.CustomArea) content = [...content, item];
    if (item.type === Menu.Actions) content = [...content, item];
    if (item.type === Menu.Divider) content = [...content, item];
  });

  const toggleMenu = (e: boolean) => setMenuIsOpen(e);

  useEffect(() => {
    const menuTrigger = document.querySelector(
      `#${innerId}`
    ) as HTMLElement | null;
    const captureMenuWidth = () => {
      //The '2' value is used to correct a small deviation the clientWidth is presenting
      menuTrigger && setMenuWidth(menuTrigger.clientWidth + 2);
    };
    captureMenuWidth();
    window.addEventListener('resize', captureMenuWidth);

    return () => window.removeEventListener('resize', captureMenuWidth);
  }, [menuIsOpen]);

  return {
    value,
    errorValidation,
    readOnlyValidation,
    content,
    menuWidth,
    toggleMenu,
  };
};
