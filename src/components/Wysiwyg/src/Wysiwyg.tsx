/* eslint-disable react/no-children-prop */
import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { EditorProvider } from '@tiptap/react';
import { MenuBar } from './MenuBar';
import { extensions } from './utils';
import type { WysiwygProps } from './types';
import './wysiwyg.scss';

export const Wysiwyg = forwardRef<HTMLDivElement, WysiwygProps>(
  (
    {
      className: customClassName,
      centeredToolbar,
      variant,
      layout,
      macros,
      defaultContent,
      content: controlledContent,
      schema,
      onChange,
      ...rest
    },
    ref
  ) => {
    const content = controlledContent ?? defaultContent;

    return (
      <div
        className={classNames('sds_wysiwyg', {
          'sds_wysiwyg--full-width': variant === 'full-width',
          'sds_wysiwyg--overflow': layout === 'overflow',
          'sds_wysiwyg--center_toolbar':
            centeredToolbar && variant === 'full-width',
          [customClassName as string]: customClassName,
        })}
        data-testid="sds_wysiwyg"
        ref={ref}
        {...rest}
      >
        <EditorProvider
          content={content}
          children
          slotBefore={
            <div
              className="sds_wysiwyg_toolbar"
              data-testid="sds_wysiwyg_toolbar"
            >
              <MenuBar schema={schema} onChange={onChange} macros={macros} />
            </div>
          }
          extensions={extensions}
        ></EditorProvider>
      </div>
    );
  }
);
