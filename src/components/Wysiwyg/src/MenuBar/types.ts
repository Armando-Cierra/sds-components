import { Editor } from '@tiptap/react';
import type { WysiwygExtensionsSchema } from '../types';

export type MenuProps = {
  macros?: string[];
  schema?: WysiwygExtensionsSchema;
  onChange?: (e: { html?: string; text?: string; markdown?: string }) => void;
};

export interface useMenuBarProps extends MenuProps {
  editor: Editor;
}
