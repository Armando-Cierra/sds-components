import TextAlign from '@tiptap/extension-text-align';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle, { TextStyleOptions } from '@tiptap/extension-text-style';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import { Underline } from '@tiptap/extension-underline';
import { Markdown } from 'tiptap-markdown';
import { Indent } from './indent';
import { Video } from './video';

interface CustomTextStyleOptions extends Partial<TextStyleOptions> {
  types: string[];
}

export const extensions = [
  Link,
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  Image.configure({ allowBase64: true }),
  Markdown,
  Color.configure({
    types: [TextStyle.name, ListItem.name],
  }),
  TextStyle.configure({
    types: [ListItem.name as string],
  } as CustomTextStyleOptions),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  Underline,
  Indent,
  Video,
];
