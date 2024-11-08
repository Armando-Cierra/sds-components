import React, { useState } from 'react';
import { Banner, Button } from '../../..';
import { forEachElement, getComponent } from '../../../../TestUtils';

type Variant = 'default' | 'success' | 'danger' | 'warning';

const BannerTest = ({
  variant,
  display,
  isOpen: open = true,
}: {
  variant?: Variant;
  display?: 'block' | 'overlay';
  isOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <>
      <Banner
        heading="Banner title"
        isOpen={isOpen}
        display={display}
        variant={variant}
        onClose={() => setIsOpen(false)}
      >
        <Banner.Content>
          I am a Banner—helpful for immediately surfacing important info or
          updates that may be beneficial to users.
        </Banner.Content>
        <Banner.Actions>
          <Button>Main action</Button>
          <Button>Action</Button>
        </Banner.Actions>
      </Banner>
    </>
  );
};

describe('<Banner />', () => {
  const bannerTestID = 'sds_banner';
  const bannerContentTestID = 'sds_banner_content';
  const bannerActionsTestID = 'sds_banner_actions';

  it('Should be rendering', () => {
    const { getByTestId } = getComponent(<BannerTest />);
    const banner = getByTestId(bannerTestID);
    const content = getByTestId(bannerContentTestID);
    const actions = getByTestId(bannerActionsTestID);

    forEachElement([banner, content, actions], (el) => {
      expect(el).toBeInTheDocument();
    });
  });

  it('If isOpen is false no banner is rendered', () => {
    const { queryByTestId } = getComponent(<BannerTest isOpen={false} />);
    const banner = queryByTestId(bannerTestID);
    expect(banner).toBeFalsy();
  });

  it('Different variant should work', () => {
    const { getByTestId } = getComponent(<BannerTest variant="success" />);
    const banner = getByTestId(bannerTestID);
    expect(banner).toHaveClass('sds_banner--success');
  });

  it('The display mode should work as well', () => {
    const { getByTestId } = getComponent(<BannerTest display="overlay" />);
    const banner = getByTestId(bannerTestID);
    expect(banner).toHaveClass('sds_banner--overlay');
  });
});
