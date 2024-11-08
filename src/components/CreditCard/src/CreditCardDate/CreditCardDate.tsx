import React, { ReactElement, cloneElement, forwardRef } from 'react';
import { TextInput } from '../../../TextInput';
import { useCreditCardControl } from '../useCreditCardControl';
import { Label } from '../../../Label';
import { HelpText } from '../../../HelpText';
import type { CreditCardDateProps } from './types';
import classNames from 'classnames';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/creditcard)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/creditcard-pwxryr?file=/src/App.tsx:1,1)
*/

const CreditCardDate = Object.assign(
  forwardRef<HTMLDivElement, CreditCardDateProps>(
    (
      {
        id,
        className: customClassName,
        children,
        hasError,
        isDisabled,
        isReadOnly,
        ...rest
      }: CreditCardDateProps,
      ref
    ) => {
      const { label, helpText, control } = useCreditCardControl(
        children,
        TextInput.Control
      );

      const customFilter = (e: string) => {
        const newValue = e.replace(/[^0-9]/g, '');
        const array = newValue.split('');

        if (array.length > 2) {
          array.splice(2, 0, '/');
        }

        return array.join('');
      };

      return (
        <TextInput
          id={id}
          ref={ref}
          className={classNames('sds_creditCardDate', {
            [customClassName as string]: customClassName,
          })}
          hasError={hasError}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          data-testid="sds_creditCardDate"
          {...rest}
        >
          {label &&
            cloneElement(label, {
              className: classNames('sds_creditCard_label', {
                [(label as ReactElement).props.className as string]: (
                  label as ReactElement
                ).props.className,
              }),
              'data-testid': 'sds_creditCardDate_label',
            })}
          {control &&
            cloneElement(control, {
              hasError,
              isDisabled,
              isReadOnly,
              maxLength: 5,
              alphanumericOnly: true,
              customFilter: customFilter,
            })}
          {helpText &&
            cloneElement(helpText, {
              className: classNames('sds_creditCard_helpText', {
                [(helpText as ReactElement).props.className as string]: (
                  helpText as ReactElement
                ).props.className,
              }),
              hasError,
              isDisabled,
              isReadOnly,
              'data-testid': 'sds_creditCardDate_helptext',
            })}
        </TextInput>
      );
    }
  ),
  {
    Label,
    HelpText,
    Control: TextInput.Control,
  }
);

export { CreditCardDate };
