import React from 'react';
import { Skeleton } from '../Skeleton';
import { getComponent } from '../../../../TestUtils';
import { getAllByTestId } from '@testing-library/react';

describe('<Skeleton> />', () => {
  const SkeletonTestID = 'sds_skeleton';

  it('Should be rendered', () => {
    const { getByTestId } = getComponent(<Skeleton.Block />);
    const skeleton = getByTestId(SkeletonTestID);
    expect(skeleton).toBeInTheDocument();
  });

  it('Should render with the desired props', () => {
    const { getByTestId } = getComponent(<Skeleton.Circle isImage />);
    const skeleton = getByTestId(SkeletonTestID);
    const skeletonImageIcon = getByTestId('sds_skeleton_imageIcon');
    expect(skeleton).toHaveClass('sds_skeleton--circle');
    expect(skeletonImageIcon).toBeInTheDocument();
  });

  it('Should render 10 items just as declared on the prop', () => {
    const { getByTestId } = getComponent(<Skeleton.List items={10} />);
    const skeleton = getByTestId(SkeletonTestID);
    const skeletonListItems = getAllByTestId(skeleton, 'sds_skeleton_listItem');
    expect(skeletonListItems).toHaveLength(10);
  });
});
