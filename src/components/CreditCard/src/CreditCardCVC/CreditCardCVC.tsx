import React, { ReactElement, cloneElement, forwardRef } from 'react';
import { NumberInput } from '../../../NumberInput';
import { useCreditCardControl } from '../useCreditCardControl';
import { Label } from '../../../Label';
import { HelpText } from '../../../HelpText';
import type { CreditCardCVCProps } from './types';
import classNames from 'classnames';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/creditcard)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/creditcard-pwxryr?file=/src/App.tsx:1,1)
*/

export const CreditCardCVC = Object.assign(
  forwardRef<HTMLDivElement, CreditCardCVCProps>(
    (
      {
        id,
        className: customClassName,
        hasError = false,
        isDisabled = false,
        children,
        ...rest
      }: CreditCardCVCProps,
      ref
    ) => {
      const { label, helpText, control } = useCreditCardControl(
        children,
        NumberInput.Control
      );

      return (
        <div data-testid="sds_creditCard_cvc">
          <NumberInput
            id={id}
            className={classNames('sds_creditCard_CVC', {
              [customClassName as string]: customClassName,
            })}
            hasError={hasError}
            isDisabled={isDisabled}
            isReadOnly={false}
            ref={ref}
            {...rest}
          >
            {label &&
              cloneElement(label, {
                'data-testid': 'sds_creditCardCVC_label',
                className: classNames('sds_creditCard_label', {
                  [(label as ReactElement).props.className as string]: (
                    label as ReactElement
                  ).props.className,
                }),
              })}
            {control &&
              cloneElement(control, {
                hasError,
                isDisabled,
                maxLength: 3,
                isWholeNumbersOnly: true,
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
                'data-testid': 'sds_creditCardCVC_helptext',
              })}
          </NumberInput>
        </div>
      );
    }
  ),
  {
    Label,
    HelpText,
    Control: NumberInput.Control,
  }
);
