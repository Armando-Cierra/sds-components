/* eslint-disable react/prop-types */
import React, { useCallback, useEffect } from 'react';
import {
  BoldButton,
  ItalicButton,
  StrikeButton,
  Headings,
  UnderlineButton,
  TextColorMenu,
} from '../ToolbarItems/TextFormating';
import {
  Alignments,
  IndentButton,
  OutdentButton,
} from '../ToolbarItems/Layout';
import {
  EmojiSelector,
  HorizontalRuleButton,
  MediaButton,
  LinkButton,
  Lists,
  CodeMenu,
} from '../ToolbarItems/Content';
import { useMenuBarProps } from './types';
import { Divider } from '../ToolbarItems/Divider';

export const useMenuBar = ({
  editor,
  onChange,
  schema = {
    viewControls: true,
    textFormatting: true,
    layout: true,
    content: true,
  },
  macros,
}: useMenuBarProps) => {
  const html = editor?.getHTML();
  const text = editor?.getText();
  const markdownOutput = editor?.storage.markdown.getMarkdown();

  useEffect(() => {
    onChange?.({ text, html, markdown: markdownOutput });
  }, [html, text, markdownOutput]);

  if (Object.keys(schema).length === 0) {
    throw new Error(
      'The Wysiwyg schema cannot be empty if passing a custom one.'
    );
  }

  const { textFormatting, layout, content } = schema;

  const hasMacros = macros && macros.length > 0;

  const TextFormatElements = useCallback(() => {
    return (
      <>
        {typeof textFormatting === 'boolean' && textFormatting && (
          <>
            <Headings editor={editor} />
            <Divider />
            <BoldButton editor={editor} />
            <ItalicButton editor={editor} />
            <UnderlineButton editor={editor} />
            <StrikeButton editor={editor} />
            <TextColorMenu editor={editor} />
            <Divider />
          </>
        )}

        {typeof textFormatting === 'object' && (
          <>
            {textFormatting.textSizes && (
              <>
                <Headings editor={editor} />
                <Divider />
              </>
            )}
            {textFormatting.bold && <BoldButton editor={editor} />}
            {textFormatting.italic && <ItalicButton editor={editor} />}
            {textFormatting.underline && <UnderlineButton editor={editor} />}
            {textFormatting.strikeThrough && <StrikeButton editor={editor} />}
            {textFormatting.textColor && <TextColorMenu editor={editor} />}
            {Object.keys(textFormatting).length > 1 && <Divider />}
          </>
        )}
      </>
    );
  }, [editor]);

  const LayoutElements = useCallback(() => {
    return (
      <>
        {typeof layout === 'boolean' && layout && (
          <>
            <Alignments editor={editor} />
            <IndentButton editor={editor} />
            <OutdentButton editor={editor} />
            <Divider />
          </>
        )}

        {typeof layout === 'object' && (
          <>
            {layout.alignMent && <Alignments editor={editor} />}
            {layout.indent && <IndentButton editor={editor} />}
            {layout.outdent && <OutdentButton editor={editor} />}
            {Object.keys(layout).length >= 1 && <Divider />}
          </>
        )}
      </>
    );
  }, [layout, editor]);

  const ContentElements = useCallback(() => {
    return (
      <>
        {typeof content === 'boolean' && content && (
          <>
            <EmojiSelector editor={editor} />
            <Lists editor={editor} />
            <LinkButton editor={editor} />
            <CodeMenu editor={editor} />
            <MediaButton editor={editor} />
            <HorizontalRuleButton editor={editor} />
          </>
        )}

        {typeof content === 'object' && (
          <>
            {content.emoji && <EmojiSelector editor={editor} />}
            {content.lists && <Lists editor={editor} />}
            {content.link && <LinkButton editor={editor} />}
            {content.codeAndCodeBlock && <CodeMenu editor={editor} />}
            {content.media && <MediaButton editor={editor} />}
            {content.horizontalRule && <HorizontalRuleButton editor={editor} />}
          </>
        )}
      </>
    );
  }, [editor, content]);

  return {
    hasMacros,
    editor,
    TextFormatElements,
    LayoutElements,
    ContentElements,
  };
};
