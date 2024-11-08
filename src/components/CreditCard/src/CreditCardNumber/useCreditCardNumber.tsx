import { useState, ReactNode } from 'react';
import creditCardType from 'credit-card-type';
import type { AvailableCreditCardBrandsTypes } from '../types';

export const useCreditCardNumber = (control: ReactNode) => {
  const [creditCard, setCreditCard] =
    useState<AvailableCreditCardBrandsTypes>('generic');

  const customFilter = (input: string) => {
    const digitsOnly = input.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');
    const formatted = [];

    for (let i = 0; i < digitsOnly.length; i += 4) {
      formatted.push(digitsOnly.slice(i, i + 4));
    }

    const formattedValue = formatted.join(' ');

    return formattedValue;
  };

  const handleChange =
    (
      originalOnChangeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void
    ) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (control) {
        const value = e.target.value;
        const cardType = creditCardType(e.target.value)[0]
          ?.type as AvailableCreditCardBrandsTypes;
        setCreditCard(value !== '' ? cardType : 'generic');
        originalOnChangeEvent?.(e);
      }
    };

  return { creditCard, handleChange, customFilter };
};
