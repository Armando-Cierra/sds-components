import { useState } from 'react';
import type { UsePaginationProps } from './types';

type CurrentResultsPosition = {
  start: number;
  end: number;
};

export const usePagination = ({
  variant,
  defaultActivePage,
  controlledActivePage,
  resultsPerPageRanges,
  defaultActiveRange,
  controlledActiveRange,
  resultsTotal,
  isMoveBackwardDisabled,
  isMoveForwardDisabled,
  onMoveBackward,
  onMoveForward,
  onPageChange,
  onRangeChange,
}: UsePaginationProps) => {
  const [innerActivePage, setInnerActivePage] = useState(
    defaultActivePage as number
  );
  const [innerActiveRange, setInnerActiveRange] = useState(
    defaultActiveRange as number
  );

  const activePage = controlledActivePage ?? innerActivePage;
  const activeRange = controlledActiveRange ?? innerActiveRange;
  const totalOfPages: number | null = resultsTotal
    ? Math.ceil(resultsTotal / activeRange)
    : null;
  const pagesArray = totalOfPages
    ? Array.from({ length: totalOfPages }, (_, index) => index + 1)
    : [];
  const currentResultsPosition: CurrentResultsPosition | null =
    activePage && totalOfPages
      ? {
          start: (activePage - 1) * activeRange + 1,
          end:
            activePage * activeRange > resultsTotal
              ? resultsTotal
              : activePage * activeRange,
        }
      : null;

  if (!resultsPerPageRanges.includes(activeRange))
    throw new Error(
      'The active range (or default active range) is not part of the defined resultsPerPageRanges'
    );

  if (totalOfPages && (activePage < 1 || activePage > totalOfPages))
    throw new Error(
      'The current active page (or default active page) does not match with the amount of total results and the active range of results per page.'
    );

  const handleNewPageSelection = (newPage: number) => () => {
    setInnerActivePage(newPage);
    onPageChange?.({ page: newPage });
  };

  const handleNewRangeSelection = (newRange: number) => () => {
    setInnerActivePage(1);
    setInnerActiveRange(newRange);
    onRangeChange?.({ range: newRange });
  };

  const handleOnMoveBackward = () => {
    if (variant === 'knownDataset') {
      const newPage = activePage - 1;
      setInnerActivePage(newPage);
      onMoveBackward?.({ page: newPage });
    } else {
      onMoveBackward?.();
    }
  };

  const handleOnMoveForward = () => {
    if (variant === 'knownDataset') {
      const newPage = activePage + 1;
      setInnerActivePage(newPage);
      onMoveForward?.({ page: newPage });
    } else {
      onMoveForward?.();
    }
  };

  const moveBackwardValidation =
    variant === 'knownDataset' ? activePage === 1 : isMoveBackwardDisabled;

  const moveForwardValidation =
    variant === 'knownDataset'
      ? totalOfPages === activePage
      : isMoveForwardDisabled;

  return {
    totalOfPages,
    pagesArray,
    currentResultsPosition,
    activeRange,
    activePage,
    handleNewPageSelection,
    handleNewRangeSelection,
    handleOnMoveBackward,
    handleOnMoveForward,
    moveBackwardValidation,
    moveForwardValidation,
  };
};
