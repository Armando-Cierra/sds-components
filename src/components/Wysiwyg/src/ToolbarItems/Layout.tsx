import React from 'react';
import { Button } from '../../../Button';
import { Menu } from '../../../Menu';
import { Telicon } from '../../../Telicon';
import { ToolbarItem } from './types';
import { Tooltip } from '../../../Tooltip';

const IndentButton = ({ editor }: ToolbarItem) => (
  <Tooltip message="Indent">
    <Button
      variant="ghost"
      iconOnly="text-indent--line"
      onClick={() => editor?.chain().focus().indent().run()}
    />
  </Tooltip>
);

const OutdentButton = ({ editor }: ToolbarItem) => (
  <Tooltip message="Outdent">
    <Button
      variant="ghost"
      iconOnly="text-outdent--line"
      onClick={() => editor?.chain().focus().outdent().run()}
    />
  </Tooltip>
);

const Alignments = ({ editor }: ToolbarItem) => {
  return (
    <Menu className="sds_wysiwyg_alignments">
      <Menu.Trigger>
        <Tooltip message="Alignment">
          <Button
            variant="ghost"
            iconBefore="text-align-left--line"
            iconAfter="chevrons-expand-vertical--fill"
          ></Button>
        </Tooltip>
      </Menu.Trigger>
      <Tooltip message="Left" position="bottom">
        <Menu.Option
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
        >
          <Telicon iconName="text-align-left--line"></Telicon>
        </Menu.Option>
      </Tooltip>
      <Tooltip message="Center" position="bottom">
        <Menu.Option
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
        >
          <Telicon iconName="text-align-center--fill" />
        </Menu.Option>
      </Tooltip>
      <Tooltip message="Right" position="bottom">
        <Menu.Option
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
        >
          <Telicon iconName="text-align-right--fill" />
        </Menu.Option>
      </Tooltip>
    </Menu>
  );
};

export { IndentButton, OutdentButton, Alignments };
