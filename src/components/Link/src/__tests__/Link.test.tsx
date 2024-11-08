import React from 'react';
import { Link } from '../Link';
import { getComponent } from '../../../../TestUtils';
import type { LinkProps } from '../types';

type TestProps = Omit<LinkProps, 'children'>;

const LinkTest: React.FC<TestProps> = (props) => {
  return (
    <>
      <Link href="/about" {...props} target="_blank">
        <p data-testid="test_string">Testing</p>
      </Link>
    </>
  );
};

describe('<Link />', () => {
  const LinkTestID = 'sds_link';

  it('Should render the component properly', () => {
    const { getByTestId } = getComponent(<LinkTest />);
    const link = getByTestId(LinkTestID);
    expect(link).toBeInTheDocument();
  });

  it('Children should be rendered', () => {
    const { getByTestId } = getComponent(<LinkTest />);
    const children = getByTestId('test_string');
    expect(children).toBeInTheDocument();
  });

  it('Icon should be rendered if passed', () => {
    const { getByTestId } = getComponent(<LinkTest iconBefore="x--fill" />);
    expect(getByTestId('sds_telicon_icon_name')).toHaveAttribute(
      'href',
      '#x--fill'
    );
  });

  it('Expect the link icon to be underlined if true', () => {
    const { getByTestId } = getComponent(<LinkTest isUnderlined />);
    const link = getByTestId(LinkTestID);
    expect(link).toHaveClass('sds_link--underlined');
  });

  it('Expect the link to be disabled if true', () => {
    const { getByTestId } = getComponent(<LinkTest isDisabled />);
    const link = getByTestId(LinkTestID);
    expect(link).toHaveClass('sds_link--disabled');
  });

  it('Should be rendered with any HTMLAnchorTag Native', () => {
    const { getByTestId } = getComponent(<LinkTest title="Test" isDisabled />);
    const link = getByTestId(LinkTestID);
    expect(link).toHaveAttribute('title', 'Test');
  });
});
