import type { ButtonCustomEvent } from '../types';

export const getEvent = (
  value: string | number | readonly string[] | undefined,
  input: HTMLInputElement
): ButtonCustomEvent => {
  return {
    currentTarget: input as HTMLInputElement,
    bubbles: true,
    cancelable: false,
    defaultPrevented: false,
    eventPhase: 3,
    isTrusted: true,
    type: 'change',
    target: {
      value: String(value),
      defaultValue: '',
      name: input.name,
      type: 'change',
      maxLength: input.maxLength,
      minLength: input.minLength,
      required: input.required,
      validity: input.validity,
      validationMessage: input.validationMessage,
      pattern: input.pattern,
      readOnly: input.readOnly,
      disabled: input.disabled,
    },
    timeStamp: new Date().getTime(),
  };
};
