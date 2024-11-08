import {
  useState,
  cloneElement,
  isValidElement,
  ReactNode,
  KeyboardEvent,
  FocusEvent,
  ReactElement,
} from 'react';
import { Avatar } from '../../Avatar';
import classNames from 'classnames';
import type { useTagProps } from './types';

export const useTag = ({
  value,
  isSelectable,
  isRemovable,
  defaultChecked,
  controlledCheck,
  onRemove,
  onChange,
  children,
  characterLimit,
  onBlur,
  onFocus,
}: useTagProps) => {
  const isSelectableValidation = !isRemovable && isSelectable;
  const childrenArray = Array.isArray(children) ? children : [children];
  const [innerCheck, setInnerCheck] = useState(defaultChecked ?? false);
  const [isFocused, setIsFocused] = useState(false);
  const check = controlledCheck ?? innerCheck;
  let content = '';
  let truncatedContent = '';
  let avatar: ReactNode = null;

  childrenArray.forEach((item) => {
    if (typeof item === 'string') {
      content = item;
      truncatedContent = item;

      if (truncatedContent.length > characterLimit) {
        truncatedContent = `${truncatedContent.slice(0, characterLimit)}...`;
      }
    }

    if (isValidElement(item) && item.type === Avatar) {
      avatar = cloneElement(item as ReactElement, {
        size: 'small',
        className: classNames('sds_tag_avatar', {
          [(item as ReactElement).props.className]: (item as ReactElement).props
            .className,
        }),
        shape: 'circle',
      });
    }
  });

  const selectionActionEvent = () => {
    if (isSelectableValidation) {
      onChange?.({
        value,
        checked: !check,
      });
      setInnerCheck((prevState) => !prevState);
    }
  };

  const clickEvent = () => {
    selectionActionEvent();
  };

  const removeEvent = () => {
    if (isRemovable && onRemove) onRemove({ value });
  };

  const focusEvent = (e: FocusEvent<HTMLDivElement, Element>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const blurEvent = (e: FocusEvent<HTMLDivElement, Element>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const keyDownEvent = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Space') {
      selectionActionEvent();
    }
  };

  return {
    check,
    content,
    avatar,
    isSelectableValidation,
    truncatedContent,
    clickEvent,
    removeEvent,
    isFocused,
    focusEvent,
    blurEvent,
    keyDownEvent,
  };
};
