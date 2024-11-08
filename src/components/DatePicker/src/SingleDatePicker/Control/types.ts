import type {
  DatePickerFormatsType,
  DatePickerFormats,
  DatePickerLangType,
  SingleDatePickerSelectionEventType,
} from '../../types';

export interface SingleDatePickerControlProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  defaultOpen?: boolean;
  lang?: DatePickerLangType;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  hasError?: boolean;
  format?: DatePickerFormatsType;
  minDate?: string;
  maxDate?: string;
  date?: string;
  defaultDate?: string;
  onDateSelection?: (e: SingleDatePickerSelectionEventType) => void;
  ref?: never;
}

export interface UseControlProps {
  className?: string;
  id?: string;
  lang: DatePickerLangType;
  format: DatePickerFormats;
  minDate?: string;
  maxDate?: string;
  controlledDate?: string;
  defaultDate?: string;
  hasError: boolean;
  isReadOnly?: boolean;
  isDisabled: boolean;
  onDateSelection?: (e: SingleDatePickerSelectionEventType) => void;
}
