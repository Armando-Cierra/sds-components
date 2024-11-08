/**
 * @description The use of the TextArea component API
 * @accepts This component accepts any prop that the native HTML TextArea element accepts
 */

import type { ReactNode } from 'react';

export interface TextareaProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  maxLengthCounter?: number;
  hasError?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  ref?: never;
  customFilter?: (e: string) => string;
}

export interface useTextAreaProps {
  children: ReactNode;
}
