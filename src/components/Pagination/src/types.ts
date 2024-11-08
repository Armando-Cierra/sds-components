type Variant = 'knownDataset' | 'unknownDataset';
export type PaginationOnPageChangeEvent = {
  page: number;
};

export type PaginationOnRangeChangeEvent = {
  range: number;
};

export interface PaginationProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  variant?: Variant;
  hasPadding?: boolean;
  defaultActivePage?: number;
  activePage?: number;
  resultsPerPageRanges: number[];
  defaultActiveRange?: number;
  activeRange?: number;
  resultsTotal?: number;
  isMoveBackwardDisabled?: boolean;
  isMoveForwardDisabled?: boolean;
  onPageChange?: (e: PaginationOnPageChangeEvent) => void;
  onRangeChange?: (e: PaginationOnRangeChangeEvent) => void;
  onMoveForward?: (e?: PaginationOnPageChangeEvent) => void;
  onMoveBackward?: (e?: PaginationOnPageChangeEvent) => void;
  customText?: {
    resultsPerPageRanges?: string;
    of?: string;
    results?: string;
    page?: string;
  };
  ref?: never;
}

export interface UsePaginationProps {
  variant: Variant;
  defaultActivePage?: number;
  controlledActivePage?: number;
  resultsPerPageRanges: number[];
  defaultActiveRange?: number;
  controlledActiveRange?: number;
  resultsTotal: number;
  isMoveBackwardDisabled?: boolean;
  isMoveForwardDisabled?: boolean;
  onPageChange?: ({ page }: PaginationOnPageChangeEvent) => void;
  onRangeChange?: ({ range }: PaginationOnRangeChangeEvent) => void;
  onMoveForward?: (e?: PaginationOnPageChangeEvent) => void;
  onMoveBackward?: (e?: PaginationOnPageChangeEvent) => void;
}
