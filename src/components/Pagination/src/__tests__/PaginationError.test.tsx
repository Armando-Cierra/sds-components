import React from 'react';
import { expectError } from '../../../../TestUtils';
import { Pagination } from '../Pagination';

const PaginationRangeError = () => {
  return (
    <Pagination
      resultsTotal={10}
      activeRange={6}
      resultsPerPageRanges={[5, 10]}
    ></Pagination>
  );
};

const PaginationActivePageError = () => {
  return (
    <Pagination
      resultsTotal={10}
      activePage={6}
      resultsPerPageRanges={[5, 10]}
    ></Pagination>
  );
};

describe('Pagination Errors', () => {
  it('Should throw if the passed active range is not in the valid ranges array', () => {
    expectError(
      <PaginationRangeError />,
      'The active range (or default active range) is not part of the defined resultsPerPageRanges'
    );
  });

  it('Should throw if invalid active page is ppassed', () => {
    expectError(
      <PaginationActivePageError />,
      'The current active page (or default active page) does not match with the amount of total results and the active range of results per page.'
    );
  });
});
