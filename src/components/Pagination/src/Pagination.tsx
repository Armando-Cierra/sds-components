import React from 'react';
import uniqid from 'uniqid';
import classNames from 'classnames';
import { Dropdown } from '../../Dropdown';
import { Button } from '../../Button';
import { usePagination } from './usePagination';
import type { PaginationProps } from './types';
import './pagination.scss';

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      className: customClassName,
      variant = 'knownDataset',
      hasPadding = false,
      defaultActivePage = 1,
      activePage: controlledActivePage,
      resultsPerPageRanges,
      defaultActiveRange = resultsPerPageRanges[0],
      activeRange: controlledActiveRange,
      resultsTotal,
      isMoveBackwardDisabled,
      isMoveForwardDisabled,
      onRangeChange,
      onPageChange,
      onMoveForward,
      onMoveBackward,
      customText = {
        resultsPerPageRanges: 'Results per page:',
        of: 'of',
        results: 'results',
        page: 'Page',
      },
      ...rest
    },
    ref
  ) => {
    const {
      totalOfPages,
      pagesArray,
      currentResultsPosition,
      activePage,
      activeRange,
      handleNewPageSelection,
      handleNewRangeSelection,
      handleOnMoveBackward,
      handleOnMoveForward,
      moveBackwardValidation,
      moveForwardValidation,
    } = usePagination({
      variant,
      defaultActivePage,
      controlledActivePage,
      resultsPerPageRanges,
      defaultActiveRange,
      controlledActiveRange,
      resultsTotal: resultsTotal ?? 1,
      isMoveBackwardDisabled,
      isMoveForwardDisabled,
      onMoveBackward,
      onMoveForward,
      onPageChange,
      onRangeChange,
    });

    return (
      <div
        data-testid="sds_pagination"
        className={classNames('sds_pagination', {
          'sds_pagination--unknownDataset': variant === 'unknownDataset',
          'sds_pagination--hasPadding': hasPadding,
          [customClassName as string]: customClassName,
        })}
        ref={ref}
        {...rest}
      >
        <div className="sds_pagination_resultsControl">
          <div className="sds_pagination_resultsControl_dropdown">
            <span className="sds_pagination_resultsControl_text">
              {customText.resultsPerPageRanges}
            </span>
            <Dropdown>
              <Dropdown.Control
                side="top"
                showModeOption="value"
                value={String(activeRange)}
                menuClassName="sds_pagination_dropdown_menu"
              >
                {resultsPerPageRanges.map((item) => (
                  <Dropdown.Option
                    key={uniqid('sds_pagination_range_')}
                    value={String(item)}
                    onClick={handleNewRangeSelection(item)}
                  >
                    {item}
                  </Dropdown.Option>
                ))}
              </Dropdown.Control>
            </Dropdown>
          </div>
          {variant === 'knownDataset' &&
            resultsTotal &&
            currentResultsPosition && (
              <span
                data-testid="sds_pagination_resultsControl_text"
                className="sds_pagination_resultsControl_text"
              >
                <span className="sds_pagination_resultsControl_text sds_pagination_resultsControl_text--bold">{`${currentResultsPosition.start}-${currentResultsPosition.end}`}</span>
                {` ${customText.of} `}
                <span className="sds_pagination_resultsControl_text sds_pagination_resultsControl_text--bold">
                  {resultsTotal}
                </span>
                {` ${customText.results}`}
              </span>
            )}
        </div>
        <div
          className={classNames('sds_pagination_navigation', {
            'sds_pagination_navigation--unknownDataset':
              variant === 'unknownDataset',
          })}
        >
          <Button
            iconOnly="chevron-left--line"
            isDisabled={moveBackwardValidation}
            onClick={handleOnMoveBackward}
          />
          {variant === 'knownDataset' && resultsTotal && (
            <Dropdown>
              <Dropdown.Control
                side="top"
                showModeOption="value"
                value={String(activePage)}
                menuClassName="sds_pagination_dropdown_menu"
              >
                {resultsTotal &&
                  totalOfPages &&
                  pagesArray.map((item) => (
                    <Dropdown.Option
                      key={uniqid('sds_pagination_page_')}
                      value={String(item)}
                      onClick={handleNewPageSelection(item)}
                    >
                      {item}
                    </Dropdown.Option>
                  ))}
              </Dropdown.Control>
            </Dropdown>
          )}
          <Button
            iconOnly="chevron-right--line"
            isDisabled={moveForwardValidation}
            onClick={handleOnMoveForward}
          />
        </div>
      </div>
    );
  }
);
