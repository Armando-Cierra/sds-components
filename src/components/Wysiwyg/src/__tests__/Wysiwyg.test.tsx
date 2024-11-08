import React, { useState } from 'react';
import { Wysiwyg } from '../Wysiwyg';
import { getComponent } from '../../../../TestUtils';
import { waitFor } from '@testing-library/react';
import { WysiwygExtensionsSchema } from '../types';

type TestProps = {
  variant?: 'default' | 'full-width';
  layout?: 'wrap' | 'overflow';
  schema?: WysiwygExtensionsSchema;
};

const WysiwygTest = ({ variant, layout, schema }: TestProps) => {
  const [content, setContent] = useState({
    html: '<h1>Hello</h1>',
    markdown: '#Hello',
    text: 'Hello',
  });

  return (
    <>
      <Wysiwyg
        layout={layout}
        variant={variant}
        schema={schema}
        onChange={(e) => {
          setContent({
            html: e.html!,
            text: e.text!,
            markdown: e.markdown!,
          });
        }}
        content={content.html}
      />
      ;<div>{content.html}</div>
      <div>{content.text}</div>
      <div>{content.markdown}</div>
    </>
  );
};

describe('<Wysiwyg />', () => {
  const WysiwygTestID = 'sds_wysiwyg';

  it('Should be rendering', async () => {
    const { getByTestId } = getComponent(<WysiwygTest />, 'document');
    await waitFor(
      () => {
        const toolbar = getByTestId('sds_wysiwyg_toolbar');
        const editor = getByTestId(WysiwygTestID);
        expect(toolbar).toBeInTheDocument();
        expect(editor).toBeInTheDocument();
      },
      { timeout: 4000 }
    );
  });

  it('FullWidth variant should be working', async () => {
    const { getByTestId } = getComponent(
      <WysiwygTest variant="full-width" />,
      'document'
    );
    await waitFor(
      () => {
        const toolbar = getByTestId('sds_wysiwyg_toolbar');
        const editor = getByTestId(WysiwygTestID);
        expect(toolbar).toBeInTheDocument();
        expect(
          editor.classList.contains('sds_wysiwyg--full-width')
        ).toBeTruthy();
      },
      { timeout: 4000 }
    );
  });

  it('Overflow layout should be working', async () => {
    const { getByTestId } = getComponent(
      <WysiwygTest layout="overflow" />,
      'document'
    );
    await waitFor(
      () => {
        const toolbar = getByTestId('sds_wysiwyg_toolbar');
        const editor = getByTestId(WysiwygTestID);
        expect(toolbar).toBeInTheDocument();
        expect(editor.classList.contains('sds_wysiwyg--overflow')).toBeTruthy();
      },
      { timeout: 4000 }
    );
  });

  it('Schema test 1: ViewControls only', async () => {
    const { getByTestId, getAllByTestId } = getComponent(
      <WysiwygTest
        schema={{
          viewControls: true,
        }}
      />,
      'document'
    );

    await waitFor(
      () => {
        const toolbar = getByTestId('sds_wysiwyg_toolbar');
        expect(toolbar).toBeInTheDocument();

        //only two buttons should be rendered (undo, redo)
        const buttons = getAllByTestId('sds_button');
        expect(buttons.length).toBe(2);
      },
      { timeout: 4000 }
    );
  });

  it('Schema test 2: Content only', async () => {
    const { getByTestId, getAllByTestId } = getComponent(
      <WysiwygTest
        schema={{
          content: true,
        }}
      />,
      'document'
    );

    await waitFor(
      () => {
        const toolbar = getByTestId('sds_wysiwyg_toolbar');
        expect(toolbar).toBeInTheDocument();

        //only 6 buttons should be rendered
        const buttons = getAllByTestId('sds_button');
        expect(buttons.length).toBe(6);
      },
      { timeout: 4000 }
    );
  });

  it('Schema test 3: Layout only', async () => {
    const { getByTestId, getAllByTestId } = getComponent(
      <WysiwygTest
        schema={{
          layout: true,
        }}
      />,
      'document'
    );

    await waitFor(
      () => {
        const toolbar = getByTestId('sds_wysiwyg_toolbar');
        expect(toolbar).toBeInTheDocument();

        //only 3 buttons should be rendered
        const buttons = getAllByTestId('sds_button');
        expect(buttons.length).toBe(3);
      },
      { timeout: 4000 }
    );
  });

  it('Schema test 4: Mixed', async () => {
    const { getByTestId, getAllByTestId } = getComponent(
      <WysiwygTest
        schema={{
          viewControls: true,
          textFormatting: {
            bold: true,
            textSizes: true,
          },
          layout: {
            alignMent: true,
          },
          content: {
            media: true,
            emoji: true,
            horizontalRule: false,
          },
        }}
      />,
      'document'
    );

    await waitFor(
      () => {
        const toolbar = getByTestId('sds_wysiwyg_toolbar');
        expect(toolbar).toBeInTheDocument();

        //only 7 buttons should be rendered
        const buttons = getAllByTestId('sds_button');
        expect(buttons.length).toBe(7);
      },
      { timeout: 4000 }
    );
  });

  it('Expect content to render', async () => {
    const { getByTestId } = getComponent(<WysiwygTest />, 'document');
    await waitFor(
      () => {
        const toolbar = getByTestId('sds_wysiwyg_toolbar');
        expect(toolbar).toBeInTheDocument();

        const editable = document.querySelector('.ProseMirror');
        expect(editable?.innerHTML).toBe(
          '<h1 style="margin-left: 0px!important;">Hello</h1>'
        );
      },
      { timeout: 4000 }
    );
  });
});
