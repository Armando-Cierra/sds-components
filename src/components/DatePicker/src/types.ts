export type DatePickerFormatsType = 'dd/mm/yyyy' | 'mm/dd/yyyy' | 'yyyy/mm/dd';
export type DatePickerFormats = 'dd/MM/yyyy' | 'MM/dd/yyyy' | 'yyyy/MM/dd';
export type DatePickerLangType = 'en' | 'es';

export interface useDatePickerProps {
  lang: DatePickerLangType;
  format: DatePickerFormatsType;
}

export type RangeDatePickerSelectionEventType = {
  datesRangeObj: {
    startDate?: Date;
    endDate?: Date;
  };
  datesRangeString: {
    startDate: string;
    endDate: string;
  };
  datesRangeFormat: string;
  className?: string;
  id?: string;
};

export type SingleDatePickerSelectionEventType = {
  dateObj?: Date;
  dateString?: string;
  dateFormat: string;
  className?: string;
  id?: string;
};

export type SelectionMenuOptions = {
  today?: {
    text?: string;
    show?: boolean;
  };
  yesterday?: {
    text?: string;
    show?: boolean;
  };
  last7Days?: {
    text?: string;
    show?: boolean;
  };
  last30Days?: {
    text?: string;
    show?: boolean;
  };
  thisMonth?: {
    text?: string;
    show?: boolean;
  };
  lastMonth?: {
    text?: string;
    show?: boolean;
  };
};

export type MenuOptionValues =
  | 'today'
  | 'yesterday'
  | 'last7Days'
  | 'last30Days'
  | 'thisMonth'
  | 'lastMonth';

export type DatesRange = {
  startDate: string | undefined;
  endDate: string | undefined;
};

export interface UseDatePicker {
  isDisabled?: boolean;
  format: DatePickerFormats;
  activeDate: string;
  date?: string;
  datesRange?: {
    startDate?: string;
    endDate?: string;
  };
  minDate?: string;
  maxDate?: string;
  daysRangeLimit?: number;
  lang: DatePickerLangType;
  datePickerType?: 'single' | 'range';
}
