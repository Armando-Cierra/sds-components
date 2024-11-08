import uniqid from 'uniqid';
import type { UseControlProps } from './types';

export const useControl = ({
  hasError,
  isDisabled,
  onChange,
}: UseControlProps) => {
  const innerID = uniqid('sds_checkbox_');
  const errorValidation = hasError && !isDisabled;

  const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled) onChange?.(e);
  };

  return { innerID, errorValidation, changeEvent };
};
