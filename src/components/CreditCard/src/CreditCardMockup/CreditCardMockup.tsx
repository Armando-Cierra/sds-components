import React, { forwardRef } from 'react';
import Cards from 'react-credit-cards';
import type { CreditCardMockupProps } from './types';
import './credit-card.scss';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/creditcard)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/creditcard-pwxryr?file=/src/App.tsx:1,1)
*/

export const CreditCardMockup = forwardRef<
  HTMLDivElement,
  CreditCardMockupProps
>(
  (
    {
      name,
      namePlaceholder,
      number,
      expiry,
      focused,
      cvc,
      acceptedCards,
      previewBrand,
      ...rest
    },
    ref
  ) => {
    return (
      <div ref={ref} {...rest} data-testid="sds_creditCard_mockup">
        <Cards
          name={name}
          number={String(number).substring(0, 19)}
          cvc={cvc}
          expiry={expiry}
          focused={focused}
          placeholders={{
            name: namePlaceholder || 'Your Name Here',
          }}
          acceptedCards={acceptedCards}
          issuer={previewBrand}
          preview
        />
      </div>
    );
  }
);
