import React from 'react';
import { useCurrentEditor } from '@tiptap/react';
import { Divider, MacrosMenu, UndoButton, RedoButton } from '../ToolbarItems';
import { useMenuBar } from './useMenubar';
import type { MenuProps } from './types';

export const MenuBar = ({
  macros = [],
  schema = {
    viewControls: true,
    textFormatting: true,
    layout: true,
    content: true,
  },
  onChange,
}: MenuProps) => {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  const { viewControls } = schema;
  const { hasMacros, TextFormatElements, LayoutElements, ContentElements } =
    useMenuBar({ onChange, schema, macros, editor });

  return (
    <>
      {/* viewControls */}

      {viewControls && (
        <>
          <UndoButton editor={editor} />
          <RedoButton editor={editor} />
          <Divider />
        </>
      )}

      {/* TextFormatting */}
      {<TextFormatElements />}

      {/* Layout */}
      {<LayoutElements />}

      {/* Content */}
      {<ContentElements />}

      {/* Macros */}
      {hasMacros && (
        <>
          <Divider />
          <MacrosMenu editor={editor} macros={macros} />
        </>
      )}
    </>
  );
};
