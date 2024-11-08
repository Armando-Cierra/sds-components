import React from 'react';
import { Text } from '../Text';
import { getComponent } from '../../../../TestUtils';
import type { TextTitleProps } from '../types';

type OmmitedProps = Omit<TextTitleProps, 'ref'>;

const TextTest: React.FC<OmmitedProps> = (props) => {
  return (
    <>
      <Text.H2 {...props}>Example</Text.H2>
    </>
  );
};

describe('<Text.h2 />', () => {
  const TextTestID = 'sds_text';

  it('Should be rendered', () => {
    const { getByTestId } = getComponent(<TextTest />);
    const text = getByTestId(TextTestID);
    expect(text).toBeInTheDocument();
  });

  it('Should render with the desired props', () => {
    const { getByTestId } = getComponent(
      <TextTest
        className="textCustom"
        typeset="heading1"
        align="justify"
        variant="invertedSubtle"
        data-custom="Example"
      />
    );
    const text = getByTestId(TextTestID);
    expect(text).toHaveClass('sds_text--heading1');
    expect(text).toHaveClass('sds_text--justify');
    expect(text).toHaveClass('sds_text--invertedSubtle');
    expect(text).toHaveAttribute('data-custom', 'Example');
    expect(text).toHaveClass('textCustom');
  });

  it('Should be rendering a h2 HTML tag', () => {
    getComponent(<TextTest id="textId" />);
    const text = document.querySelector('#textId') as HTMLElement;
    expect(text.outerHTML).toContain('h2');
  });
});
