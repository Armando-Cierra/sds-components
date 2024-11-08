import React, { ReactElement, cloneElement, forwardRef } from 'react';
import classNames from 'classnames';
import { Label } from '../../Label';
import { HelpText } from '../../HelpText';
import { Control } from './Control';
import { usePassword } from './usePassword';
import type { PasswordProps } from './types';
import './password.scss';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/password)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/password-vn9yzm?file=/src/App.tsx:1,1)
*/

const Password = Object.assign(
  forwardRef<HTMLDivElement, PasswordProps>(
    (
      {
        className: customClassName,
        hasError = false,
        isDisabled = false,
        children,
        ...rest
      }: PasswordProps,
      ref
    ) => {
      const { control, label, helpText } = usePassword(children);

      if (!control) {
        throw new Error(
          'The <Password.Control> subcomponent is required to render the component.'
        );
      }

      return (
        <div
          data-testid="sds_password"
          className={classNames('sds_password', {
            [customClassName as string]: customClassName,
          })}
          {...rest}
          ref={ref}
        >
          {label &&
            cloneElement(label, {
              'data-testid': 'sds_password_label',
              className: classNames('sds_password_label', {
                [(label as ReactElement).props.className as string]: (
                  label as ReactElement
                ).props.className,
              }),
            })}
          {control &&
            cloneElement(control, {
              isDisabled,
              hasError,
            })}
          {helpText &&
            cloneElement(helpText, {
              className: classNames('sds_password_helpText', {
                [(helpText as ReactElement).props.className as string]: (
                  helpText as ReactElement
                ).props.className,
              }),
              hasError,
              isDisabled,
              'data-testid': 'sds_password_helptText',
            })}
        </div>
      );
    }
  ),
  { Label, HelpText, Control }
);

export { Password };
