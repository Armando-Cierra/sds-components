/**
 * @description The use of the Text component API
 * @accepts This component accepts any prop that the native HTML h1-h6, p and span elements accept
 * @extends React.HTMLAttributes<HTMLHeadingElement>, React.HTMLAttributes<HTMLParagraphElement> and React.HTMLAttributes<HTMLSpanElement> to be able to use the native h1-h6, p and span APIs
 */

import type { ReactNode } from 'react';

/**
 * String type for the text style variants
 */
type Format =
  | 'mouse'
  | 'smCaps'
  | 'body'
  | 'bodyLg'
  | 'heading2'
  | 'heading1'
  | 'title2'
  | 'title1';

/**
 * String type for the text aligment variants
 */
type Align = 'left' | 'center' | 'right' | 'justify';

type Variants =
  | 'base'
  | 'primary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'subtle'
  | 'inverted'
  | 'invertedSubtle';

export interface TextProps {
  children?: ReactNode;
  className?: string;
  /**
   * @description Sets the pre-formated style for the text
   * @defaultValue body
   */
  typeset?: Format;
  /**
   * @description Sets the alignment for the text
   * @defaultValue center
   */
  align?: Align;
  /**
   * @description Sets the pre-formated variant style for the text
   * @defaultValue base
   */
  variant?: Variants;
}

export interface TextTitleProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
    TextProps {}

export interface TextParagraphProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    TextProps {}

export interface TextSpanProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >,
    TextProps {}
