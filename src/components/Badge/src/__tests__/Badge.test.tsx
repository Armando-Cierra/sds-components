import React from 'react';
import { Badge } from '../Badge';
import { getComponent } from '../../../../TestUtils';

interface TestProps {
  isCounter?: boolean;
}

const BadgeTest: React.FC<TestProps> = ({ isCounter }) => {
  return (
    <>
      <Badge
        color="red"
        iconBefore="wifi--fill"
        isCounter={isCounter}
        children={<p> hola </p>}
        data-example="example"
      />
    </>
  );
};

describe('<Badge />', () => {
  const badgeTestID = 'sds_badge';

  it('Should be rendering properly, isCounter as false by default ', () => {
    const { getByTestId } = getComponent(<BadgeTest />);
    expect(getByTestId(badgeTestID)).toBeInTheDocument();
    expect(getByTestId(badgeTestID)).not.toHaveAttribute(
      'data-counter',
      'true'
    );
  });

  it('Should render with the desired icon and color', () => {
    const { getByTestId } = getComponent(<BadgeTest />);
    const badge = getByTestId(badgeTestID);
    expect(badge).toHaveClass('sds_badge--red');
    expect(getByTestId('sds_telicon_icon_name')).toHaveAttribute(
      'href',
      '#wifi--fill'
    );
  });

  it('Should render a custom attribute', () => {
    const { getByTestId } = getComponent(<BadgeTest />);
    const badge = getByTestId(badgeTestID);
    expect(badge).toHaveAttribute('data-example', 'example');
  });

  it('Should render as a counter if counter is true.', () => {
    const { getByTestId } = getComponent(<BadgeTest isCounter />);
    const badge = getByTestId(badgeTestID);
    expect(badge).toHaveClass('sds_badge--counter');
  });

  it('Should not render an icon if counter is true', () => {
    const { queryByTestId, getByTestId } = getComponent(
      <BadgeTest isCounter />
    );
    const badge = getByTestId(badgeTestID);
    expect(badge).toHaveClass('sds_badge--counter');
    expect(queryByTestId('sds_telicon')).toBeFalsy();
  });
});
