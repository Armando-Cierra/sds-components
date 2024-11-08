import React from 'react';
import { Loader } from '../Loader';
import { getComponent } from '../../../../TestUtils';
import type { LoaderProps } from '../types';

const LoaderTest: React.FC<LoaderProps> = (props) => {
  return (
    <>
      <Loader data-example="example" {...props} />
    </>
  );
};

describe('<Loader />', () => {
  const LoaderTestID = 'sds_loader';

  it('Should be rendered', () => {
    const { getByTestId } = getComponent(<LoaderTest />);
    const loader = getByTestId(LoaderTestID);
    expect(loader).toBeInTheDocument();
  });

  it('Should render with the desired props', () => {
    const { getByTestId } = getComponent(
      <LoaderTest size="large" className="loaderCustom" />
    );
    const loader = getByTestId(LoaderTestID);
    expect(loader).toHaveClass('sds_loader--large');
    expect(loader).toHaveAttribute('data-example', 'example');
    expect(loader).toHaveClass('loaderCustom');
  });

  it('Should be rendering 3 divs with the sds_loader_dot class', () => {
    getComponent(<LoaderTest size="large" className="loaderCustom" />);
    const elements = document.querySelectorAll('.sds_loader_dot').length;
    expect(elements).toEqual(3);
  });
});
