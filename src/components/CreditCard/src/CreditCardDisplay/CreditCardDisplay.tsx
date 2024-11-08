import React, { forwardRef } from 'react';
import { Button } from '../../../Button';
import { CreditCardIcon } from '../CreditCardIcon';
import type { CreditCardDisplayProps } from './types';
import './credit-card-number-display.scss';
import classNames from 'classnames';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/creditcard)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/creditcardnumberdisplay-yv53m9?file=/src/App.tsx:1,1)
*/

export const CreditCardNumberDisplay = forwardRef<
  HTMLDivElement,
  CreditCardDisplayProps
>(
  (
    {
      className: customClassName,
      title = 'Card Number',
      cardNumber,
      cardBrand = 'generic',
      isEditable,
      onEdit,
      ...rest
    },
    ref
  ) => {
    const clickEvent = () => {
      onEdit?.();
    };

    return (
      <div
        ref={ref}
        {...rest}
        className={classNames('sds_creditCardDisplay', {
          [customClassName as string]: customClassName,
        })}
        data-testid="sds_creditCardDisplay"
      >
        <p className="sds_creditCardDisplay_title">{title}</p>
        <div className="sds_creditCardDisplay_number">
          <span>
            &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022;
            &#x2022;&#x2022;&#x2022;&#x2022;
            {` ${cardNumber?.substring(0, 4) ?? '0000'}`}
          </span>
          <CreditCardIcon
            style={{ position: 'initial' }}
            creditCard={cardBrand}
          />
          {isEditable && (
            <Button
              className="sds_creditCardDisplay_edit"
              iconOnly="pencil--fill"
              onClick={clickEvent}
            />
          )}
        </div>
      </div>
    );
  }
);
