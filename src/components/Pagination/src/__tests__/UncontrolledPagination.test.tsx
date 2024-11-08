import React from 'react';
import { getComponent } from '../../../../TestUtils';
import { Pagination } from '../Pagination';
import { fireEvent } from '@testing-library/react';

const UncontrolledPaginationTest = () => {
  return (
    <Pagination resultsTotal={10} resultsPerPageRanges={[5, 10]}></Pagination>
  );
};

describe('Uncontrolled Pagination', () => {
  const paginationTestID = 'sds_pagination';
  const resultsControlText = 'sds_pagination_resultsControl_text';
  const forwardButton = 'sds_button';

  it('Should be rendering', () => {
    const { getByTestId } = getComponent(<UncontrolledPaginationTest />);
    const pag = getByTestId(paginationTestID);
    expect(pag).toBeInTheDocument();
  });

  it('The ranges should change the values shown.', () => {
    const { getByTestId } = getComponent(<UncontrolledPaginationTest />);
    const resultsPerPageText = getByTestId(resultsControlText).children;
    const values = Array.from(resultsPerPageText)
      .map((el) => el.textContent)
      .join(' ');
    expect(values).toBe('1-5 10');
  });

  it('Expect the value to be changing when the forward button is clicked', async () => {
    const { getByTestId, getAllByTestId } = getComponent(
      <UncontrolledPaginationTest />,
      'document'
    );
    const forwardButtonEl = getAllByTestId(forwardButton)[1];
    fireEvent.click(forwardButtonEl);
    const resultsPerPageText = getByTestId(resultsControlText).children;
    const values = Array.from(resultsPerPageText)
      .map((el) => el.textContent)
      .join(' ');
    expect(values).toBe('6-10 10');
  });

  it('Expect the value to change when backwards button is clicked', () => {
    const { getByTestId, getAllByTestId } = getComponent(
      <UncontrolledPaginationTest />,
      'document'
    );
    const forwardButtonEl = getAllByTestId(forwardButton)[1];
    fireEvent.click(forwardButtonEl);
    const resultsPerPageText = getByTestId(resultsControlText).children;
    const values = Array.from(resultsPerPageText)
      .map((el) => el.textContent)
      .join(' ');
    expect(values).toBe('6-10 10');
    expect(forwardButtonEl).toBeDisabled();
  });
});
