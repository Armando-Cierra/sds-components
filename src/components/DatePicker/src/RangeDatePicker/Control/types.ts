import type {
  DatePickerFormatsType,
  DatePickerFormats,
  DatePickerLangType,
  RangeDatePickerSelectionEventType,
  SelectionMenuOptions,
  MenuOptionValues,
} from '../../types';

export interface RangeDatePickerControlProps
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
  hasError?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  format?: DatePickerFormatsType;
  minDate?: string;
  maxDate?: string;
  startDate?: string;
  endDate?: string;
  defaultStartDate?: string;
  defaultEndDate?: string;
  showPredefinedSelectionsMenu?: boolean;
  predefinedSelection?: MenuOptionValues;
  predefinedMenuOptions?: SelectionMenuOptions;
  daysRangeLimit?: number;
  onDateSelection?: (e: RangeDatePickerSelectionEventType) => void;
}

export interface UseControlProps {
  lang: DatePickerLangType;
  format: DatePickerFormats;
  minDate?: string;
  maxDate?: string;
  controlledStartDate?: string;
  controlledEndDate?: string;
  defaultStartDate?: string;
  defaultEndDate?: string;
  hasError?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  showPredefinedSelectionsMenu?: boolean;
  predefinedSelection?: MenuOptionValues;
  predefinedMenuOptions?: SelectionMenuOptions;
  onDateSelection?: (e: RangeDatePickerSelectionEventType) => void;
}
