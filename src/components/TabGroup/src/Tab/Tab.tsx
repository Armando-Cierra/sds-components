import React, { forwardRef, useEffect } from 'react';
import { useTab } from './useTab';
import classNames from 'classnames';
import uniqid from 'uniqid';
import type { TabGroupTabProps } from './types';

const Tab = forwardRef<HTMLDivElement, TabGroupTabProps>(
  (
    {
      onClick,
      children = [],
      id,
      className: customClassName,
      value,
      isSelected,
      isDisabled,
      variant,
      ...rest
    },
    ref
  ) => {
    const { titleElement } = useTab(children);

    const clickEvent = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDisabled) onClick?.(e);
    };

    const tabId = id ?? uniqid('sds_tabGroup_tab');

    useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.code === 'Space' && document.activeElement?.id === tabId) {
          !isDisabled &&
            onClick?.(e as unknown as React.MouseEvent<HTMLDivElement>);
        }
      };

      const handleKeyPressLocal = (event: KeyboardEvent) =>
        handleKeyPress(event);
      document.addEventListener('keypress', handleKeyPressLocal);
      return () => {
        document.removeEventListener('keypress', handleKeyPressLocal);
      };
    }, []);

    return (
      <div
        id={tabId}
        data-value={value}
        tabIndex={!isDisabled ? 0 : undefined}
        className={classNames('sds_tabGroup_tab', {
          [customClassName as string]: customClassName,
          'sds_tabGroup_tab--disabled': isDisabled,
          'sds_tabGroup_tab--selected': isSelected,
          [`sds_tabGroup_tab--${variant}`]: !!variant,
        })}
        data-testid="sds_tabGroup_tab"
        onClick={clickEvent}
        ref={ref}
        {...rest}
      >
        {titleElement}
      </div>
    );
  }
);

export { Tab };
