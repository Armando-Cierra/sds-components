import React from 'react';
import classNames from 'classnames';
import { useButton } from './useButton';
import type { ButtonProps } from './types';
import './button.scss';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/button)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/button-fkzz2w?file=/src/App.tsx:1,1)
*/

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'base',
      size = 'default',
      iconOnly,
      iconAfter,
      iconBefore,
      iconSpacing = size === 'large' ? '12px' : '8px',
      isDisabled = false,
      isSelected = false,
      isLoading,
      className: customClassName,
      children,
      style,
      scaleWhileActive,
      ...rest
    },
    ref
  ) => {
    const {
      getChildren,
      getIconAfter,
      getIconBefore,
      getIconOnly,
      getIsLoading,
    } = useButton({
      children,
      size,
      iconOnly,
      iconAfter,
      iconBefore,
      isLoading,
    });

    return (
      <button
        data-testid="sds_button"
        className={classNames('sds_button', {
          [`sds_button--${size}`]: size && size !== 'default',
          [`sds_button--${variant}`]: variant && variant !== 'base',
          'sds_button--disabled': isDisabled,
          'sds_button--selected': isSelected,
          'sds_button--iconOnly': !!iconOnly,
          'sds_button--loading': isLoading,
          'sds_button--scaleWhileActiveDeactivated': scaleWhileActive === false,
          [customClassName as string]: customClassName,
        })}
        disabled={isDisabled}
        style={{
          gap: iconSpacing,
          ...style,
        }}
        ref={ref}
        {...rest}
      >
        {getIconOnly()}
        {getIconBefore()}
        {isLoading !== 'after' && getIsLoading()}
        {getChildren()}
        {isLoading === 'after' && getIsLoading()}
        {getIconAfter()}
      </button>
    );
  }
);
