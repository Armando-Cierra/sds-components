export type CalendarContent = 'base' | 'year' | 'month';
import type {
  DatePickerLangType,
  DatePickerFormats,
  SelectionMenuOptions,
  MenuOptionValues,
} from '../types';

export interface CalendarProps {
  isDisabled?: boolean;
  lang: DatePickerLangType;
  date?: string;
  datesRange?: {
    startDate: string | undefined;
    endDate: string | undefined;
  };
  maxDate?: string;
  minDate?: string;
  updatingInnerSelectedDate: (e: string) => void;
  format: DatePickerFormats;
  datePickerType: 'single' | 'range';
  showPredefinedSelectionsMenu?: boolean;
  predefinedMenuOptions?: SelectionMenuOptions;
  updatingSelectedPredefinedRange?: (predefinedRange: MenuOptionValues) => void;
  selectedPredefinedRange?: MenuOptionValues;
  validateRangeSelection?: (predefinedRange: MenuOptionValues) => boolean;
  daysRangeLimit?: number;
}

export interface UseCalendarProps {
  activeDate: string;
  setActiveDate: React.Dispatch<React.SetStateAction<string>>;
  lang: DatePickerLangType;
  format: DatePickerFormats;
  datesRange?: {
    startDate: string | undefined;
    endDate: string | undefined;
  };
}

export interface UseActiveDateProps {
  datePickerType: 'single' | 'range';
  format: DatePickerFormats;
  date?: string;
  minDate?: string;
  maxDate?: string;
  datesRange?: { startDate?: string; endDate?: string };
}
