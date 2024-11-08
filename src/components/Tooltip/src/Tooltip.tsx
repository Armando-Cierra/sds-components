import React, { forwardRef } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import type { TooltipProps } from './types';
import classNames from 'classnames';
import './tooltip.scss';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/tooltip)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/tooltip-h3zzc5?file=/src/App.tsx:1,1)
*/

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      className: customClassName,
      position = 'top',
      isDisabled = false,
      delayDuration = 0,
      spacing = 4,
      message,
      ...rest
    }: TooltipProps,
    ref
  ) => {
    if (!message) return <>{children}</>;

    return (
      <div data-side={position} data-testid={'sds_tooltip'} {...rest} ref={ref}>
        <RadixTooltip.Provider delayDuration={delayDuration}>
          <RadixTooltip.Root>
            <RadixTooltip.Trigger asChild>
              <div>{children}</div>
            </RadixTooltip.Trigger>
            <RadixTooltip.Portal>
              {!isDisabled && message && (
                <div
                  data-side={position}
                  className={classNames('sds_tooltip', {
                    [customClassName as string]: customClassName,
                  })}
                >
                  <RadixTooltip.Content
                    avoidCollisions
                    collisionPadding={10}
                    side={position}
                    className="TooltipMessage"
                    sideOffset={spacing}
                  >
                    {message}
                    {message && <RadixTooltip.Arrow className="TooltipArrow" />}
                  </RadixTooltip.Content>
                </div>
              )}
            </RadixTooltip.Portal>
          </RadixTooltip.Root>
        </RadixTooltip.Provider>
      </div>
    );
  }
);

export { Tooltip };
