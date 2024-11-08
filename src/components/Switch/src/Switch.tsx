import React, { ReactElement, cloneElement, forwardRef } from 'react';
import { Label } from '../../Label';
import { Control } from './Control';
import { useSwitch } from './useSwitch';
import type { SwitchProps } from './types';
import './switch.scss';
import classNames from 'classnames';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/switch)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/switch-y2wdfr?file=/src/App.tsx:1,1)
*/

const Switch = Object.assign(
  forwardRef<HTMLDivElement, SwitchProps>(
    (
      {
        children,
        isDisabled,
        labelPosition = 'top',
        className: customClassName,
        ...rest
      }: SwitchProps,
      ref
    ) => {
      const { label, control } = useSwitch({ children });

      if (!control) {
        throw new Error(
          'The <Switch.Control> subcomponent is required to render the component.'
        );
      }

      return (
        <div
          className={classNames('sds_switch', {
            [customClassName as string]: customClassName,
            [`sds_switch_label--${labelPosition}`]: !!labelPosition,
          })}
          ref={ref}
          {...rest}
        >
          {label &&
            cloneElement(label, {
              className: classNames('sds_switch_label', {
                [(label as ReactElement).props.className as string]: (
                  label as ReactElement
                ).props.className,
              }),
              'data-testid': 'sds_switch_label',
            })}
          {cloneElement(control, { isDisabled })}
        </div>
      );
    }
  ),
  { Label, Control }
);

export { Switch };
