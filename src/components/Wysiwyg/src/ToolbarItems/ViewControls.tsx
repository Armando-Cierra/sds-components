import React from 'react';
import { Button } from '../../../Button';
import { Tooltip } from '../../../Tooltip';
import { ToolbarItem } from './types';

const UndoButton = ({ editor }: ToolbarItem) => {
  const isDisabled = !editor?.can().chain().focus().undo().run();

  return (
    <Tooltip message="Undo" isDisabled={isDisabled}>
      <Button
        variant="ghost"
        iconOnly="arrow-rotate-counterclockwise--fill"
        onClick={() => editor.chain().focus().undo().run()}
        isDisabled={isDisabled}
      />
    </Tooltip>
  );
};

const RedoButton = ({ editor }: ToolbarItem) => {
  const isDisabled = !editor?.can().chain().focus().redo().run();

  return (
    <Tooltip message="Redo" isDisabled={isDisabled}>
      <Button
        variant="ghost"
        iconOnly="arrow-rotate-clockwise--fill"
        onClick={() => editor.chain().focus().redo().run()}
        isDisabled={isDisabled}
      />
    </Tooltip>
  );
};

export { UndoButton, RedoButton };
