import { Content } from '@tiptap/react';

export interface WysiwygProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    'onChange' | 'content'
  > {
  variant?: 'default' | 'full-width';
  centeredToolbar?: boolean;
  layout?: 'wrap' | 'overflow';
  macros?: string[];
  defaultContent?: Content;
  content?: Content;
  schema?: WysiwygExtensionsSchema;
  onChange?: (e: { html?: string; text?: string; markdown?: string }) => void;
}

export type WysiwygExtensionsSchema = {
  viewControls?: boolean;

  textFormatting?:
    | boolean
    | {
        textSizes?: boolean;
        bold?: boolean;
        italic?: boolean;
        underline?: boolean;
        strikeThrough?: boolean;
        textColor?: boolean;
      };

  layout?:
    | boolean
    | {
        alignMent?: boolean;
        indent?: boolean;
        outdent?: boolean;
      };

  content?:
    | boolean
    | {
        emoji?: boolean;
        lists?: boolean;
        link?: boolean;
        codeAndCodeBlock?: boolean;
        media?: boolean;
        horizontalRule?: boolean;
      };
};
