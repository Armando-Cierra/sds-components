import React from 'react';
import { SectionHeading } from '../SectionHeading';
import { Badge } from '../../../Badge';
import { getComponent } from '../../../../TestUtils';

interface TestProps {
  variant?: 'solid' | 'ruled' | 'flat';
}

const SectionHeadingTest: React.FC<TestProps> = ({ variant = 'ruled' }) => {
  return (
    <>
      <SectionHeading variant={variant}>
        Lorem Ipsum
        <Badge>Badge</Badge>
      </SectionHeading>
    </>
  );
};

describe('<SectionHeading />', () => {
  const sectionHeadingTestID = 'sds_sectionHeading';

  it('Should be rendering properly with the default variant', () => {
    const { getByTestId } = getComponent(<SectionHeadingTest />);
    const sectionHeading = getByTestId(sectionHeadingTestID);
    expect(sectionHeading).toBeInTheDocument();
  });

  it('Should render the correct variant', () => {
    const { getByTestId } = getComponent(<SectionHeadingTest variant="flat" />);
    const sectionHeading = getByTestId(sectionHeadingTestID);
    expect(sectionHeading).toHaveClass('sds_sectionHeading--flat');
  });

  it('Should render custom component (Badge) as children.', () => {
    const { getByTestId } = getComponent(<SectionHeadingTest />);
    const sectionHeading = getByTestId(sectionHeadingTestID);
    expect(sectionHeading).toContainHTML(
      '<div class="sds_badge sds_badge--neutral" data-testid="sds_badge">Badge</div>'
    );
  });
});
