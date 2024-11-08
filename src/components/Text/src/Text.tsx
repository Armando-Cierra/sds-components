import React from 'react';
import type {
  TextTitleProps,
  TextParagraphProps,
  TextSpanProps,
} from './types';
import './text.scss';
import classNames from 'classnames';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/text)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/text-mh47wp?file=/src/App.tsx:1,1)
*/

export const Text = {
  H1: React.forwardRef<HTMLHeadingElement, TextTitleProps>(
    (
      {
        className: customClassName,
        typeset = 'body',
        align = 'left',
        variant = 'base',
        children,
        ...rest
      },
      ref
    ) => {
      return (
        <h1
          data-testid="sds_text"
          className={classNames('sds_text', {
            [`sds_text--${typeset}`]: !!typeset,
            [`sds_text--${align}`]: !!align,
            [`sds_text--${variant}`]: !!variant,
            [customClassName as string]: customClassName,
          })}
          ref={ref}
          {...rest}
        >
          {children}
        </h1>
      );
    }
  ),

  H2: React.forwardRef<HTMLHeadingElement, TextTitleProps>(
    (
      {
        className: customClassName,
        typeset = 'body',
        align = 'left',
        variant = 'base',
        children,
        ...rest
      },
      ref
    ) => {
      return (
        <h2
          data-testid="sds_text"
          className={classNames('sds_text', {
            [`sds_text--${typeset}`]: !!typeset,
            [`sds_text--${align}`]: !!align,
            [`sds_text--${variant}`]: !!variant,
            [customClassName as string]: customClassName,
          })}
          ref={ref}
          {...rest}
        >
          {children}
        </h2>
      );
    }
  ),

  H3: React.forwardRef<HTMLHeadingElement, TextTitleProps>(
    (
      {
        className: customClassName,
        typeset = 'body',
        align = 'left',
        variant = 'base',
        children,
        ...rest
      },
      ref
    ) => {
      return (
        <h3
          data-testid="sds_text"
          className={classNames('sds_text', {
            [`sds_text--${typeset}`]: !!typeset,
            [`sds_text--${align}`]: !!align,
            [`sds_text--${variant}`]: !!variant,
            [customClassName as string]: customClassName,
          })}
          ref={ref}
          {...rest}
        >
          {children}
        </h3>
      );
    }
  ),

  H4: React.forwardRef<HTMLHeadingElement, TextTitleProps>(
    (
      {
        className: customClassName,
        typeset = 'body',
        align = 'left',
        variant = 'base',
        children,
        ...rest
      },
      ref
    ) => {
      return (
        <h4
          data-testid="sds_text"
          className={classNames('sds_text', {
            [`sds_text--${typeset}`]: !!typeset,
            [`sds_text--${align}`]: !!align,
            [`sds_text--${variant}`]: !!variant,
            [customClassName as string]: customClassName,
          })}
          ref={ref}
          {...rest}
        >
          {children}
        </h4>
      );
    }
  ),

  H5: React.forwardRef<HTMLHeadingElement, TextTitleProps>(
    (
      {
        className: customClassName,
        typeset = 'body',
        align = 'left',
        variant = 'base',
        children,
        ...rest
      },
      ref
    ) => {
      return (
        <h5
          data-testid="sds_text"
          className={classNames('sds_text', {
            [`sds_text--${typeset}`]: !!typeset,
            [`sds_text--${align}`]: !!align,
            [`sds_text--${variant}`]: !!variant,
            [customClassName as string]: customClassName,
          })}
          ref={ref}
          {...rest}
        >
          {children}
        </h5>
      );
    }
  ),

  H6: React.forwardRef<HTMLHeadingElement, TextTitleProps>(
    (
      {
        className: customClassName,
        typeset = 'body',
        align = 'left',
        variant = 'base',
        children,
        ...rest
      },
      ref
    ) => {
      return (
        <h6
          data-testid="sds_text"
          className={classNames('sds_text', {
            [`sds_text--${typeset}`]: !!typeset,
            [`sds_text--${align}`]: !!align,
            [`sds_text--${variant}`]: !!variant,
            [customClassName as string]: customClassName,
          })}
          ref={ref}
          {...rest}
        >
          {children}
        </h6>
      );
    }
  ),

  P: React.forwardRef<HTMLParagraphElement, TextParagraphProps>(
    (
      {
        className: customClassName,
        typeset = 'body',
        align = 'left',
        variant = 'base',
        children,
        ...rest
      },
      ref
    ) => {
      return (
        <p
          data-testid="sds_text"
          className={classNames('sds_text', {
            [`sds_text--${typeset}`]: !!typeset,
            [`sds_text--${align}`]: !!align,
            [`sds_text--${variant}`]: !!variant,
            [customClassName as string]: customClassName,
          })}
          ref={ref}
          {...rest}
        >
          {children}
        </p>
      );
    }
  ),

  Span: React.forwardRef<HTMLSpanElement, TextSpanProps>(
    (
      {
        className: customClassName,
        typeset = 'body',
        align = 'left',
        variant = 'base',
        children,
        ...rest
      },
      ref
    ) => {
      return (
        <span
          data-testid="sds_text"
          className={classNames('sds_text', {
            [`sds_text--${typeset}`]: !!typeset,
            [`sds_text--${align}`]: !!align,
            [`sds_text--${variant}`]: !!variant,
            [customClassName as string]: customClassName,
          })}
          ref={ref}
          {...rest}
        >
          {children}
        </span>
      );
    }
  ),
};
