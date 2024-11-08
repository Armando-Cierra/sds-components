import React, { useEffect, useState } from 'react';
import { Button } from '../../../Button';
import { Menu } from '../../../Menu';
import { ToolbarItem, Level } from './types';
import { Tooltip } from '../../../Tooltip';
import { colors } from '../utils';
import uniqid from 'uniqid';
import { Icon } from '../Icon';

const Headings = ({ editor }: ToolbarItem) => {
  const headerLevels = [1, 2, 3, 4, 5, 6];

  const [currentTextMode, setCurrentTextMode] = useState('Normal text');

  return (
    <Menu className="sdw_wysiwyg_headings" style={{ width: 'auto' }}>
      <Menu.Trigger>
        <Tooltip message="Text size">
          <Button
            variant="ghost"
            style={{ width: '128px' }}
            iconAfter="chevrons-expand-vertical--fill"
          >
            {currentTextMode}
          </Button>
        </Tooltip>
      </Menu.Trigger>
      <Menu.Option
        isSelected={editor.isActive('paragraph')}
        onClick={() => {
          editor.chain().focus().setParagraph().run();
          setCurrentTextMode('Normal text');
        }}
      >
        Normal text
      </Menu.Option>
      {headerLevels.map((level, index) => (
        <Menu.Option
          key={index}
          isSelected={editor.isActive('heading', { level })}
          onClick={() => {
            editor
              .chain()
              .focus()
              .toggleHeading({ level: level as Level })
              .run();

            setCurrentTextMode(`Heading ${level}`);
          }}
        >
          {React.createElement(`h${level}`, {}, `Heading ${level}`)}
        </Menu.Option>
      ))}
    </Menu>
  );
};

const TextColorMenu = ({ editor }: ToolbarItem) => {
  const [currentColor, setCurrentColor] = useState('var(--sds_theme_text)');

  const { state } = editor;
  const { selection } = state;

  useEffect(() => {
    if (!selection.empty) {
      const { from } = selection;
      const node = editor.state.doc.nodeAt(from);
      const color = node?.marks.at(0)?.attrs['color'];
      if (color || color === currentColor) {
        setCurrentColor(color);
      }
    }
  }, [selection]);

  const isDisabled =
    editor.isActive('code') ||
    (!selection.empty && editor.isActive('codeBlock'));

  if (isDisabled) {
    return (
      <Tooltip message="Text color" isDisabled={isDisabled}>
        <Button
          style={{ '--currentColor': currentColor } as React.CSSProperties}
          isDisabled={isDisabled}
          className="sds_textColor_button"
          variant="ghost"
          iconBefore="_fpo-icon"
          iconAfter="chevrons-expand-vertical--fill"
        />
      </Tooltip>
    );
  }

  return (
    <Menu style={{ padding: 0, width: 'auto' }}>
      <Menu.Trigger>
        <Tooltip message="Text color">
          <Button
            style={{ '--currentColor': currentColor } as React.CSSProperties}
            className="sds_textColor_button"
            variant="ghost"
            iconBefore="_fpo-icon"
            iconAfter="chevrons-expand-vertical--fill"
          />
        </Tooltip>
      </Menu.Trigger>
      <Menu.CustomArea
        style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
      >
        <div className="sds_wysiwyg_color_selector_container">
          <div
            onClick={() => {
              setCurrentColor('var(--sds_theme_text)');
              editor.chain().setColor('var(--sds_theme_text)').run();
            }}
            style={{ background: 'var(--sds_theme_text)' }}
            className="sds_wysiwyg_color_selector sds_wysiwyg_color"
          >
            {currentColor === 'var(--sds_theme_text)' && (
              <Icon fill="var(--sds_theme_text_inverted)" />
            )}
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(11, 1fr)',
            gap: 4,
          }}
        >
          {colors.map((color) => (
            <div
              key={uniqid('sds_wysiwyg_color')}
              onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                const computedStyle = window.getComputedStyle(
                  event.currentTarget
                );
                const currentColor = computedStyle.backgroundColor;
                setCurrentColor(color);
                editor.chain().setColor(currentColor).run();
              }}
              className="sds_wysiwyg_color"
              style={{ background: color }}
            >
              {currentColor === color && <Icon fill="black" />}
            </div>
          ))}
        </div>
      </Menu.CustomArea>
    </Menu>
  );
};

const StrikeButton = ({ editor }: ToolbarItem) => {
  const isDisabled = !editor?.can().chain().focus().toggleStrike().run();

  return (
    <Tooltip isDisabled={isDisabled} message="Strikethrough">
      <Button
        variant="ghost"
        iconOnly="text-strikethrough--fill"
        isSelected={editor?.isActive('strike')}
        onClick={() => editor?.chain().focus().toggleStrike().run()}
        isDisabled={isDisabled}
        className={editor?.isActive('strike') ? 'is-active' : ''}
      />
    </Tooltip>
  );
};

const ItalicButton = ({ editor }: ToolbarItem) => {
  const isDisabled = !editor?.can().chain().focus().toggleItalic().run();

  return (
    <Tooltip message="Italic" isDisabled={isDisabled}>
      <Button
        variant="ghost"
        iconOnly="text-italic--fill"
        isSelected={editor?.isActive('italic')}
        onClick={() => editor?.chain().focus().toggleItalic().run()}
        isDisabled={isDisabled}
        className={editor?.isActive('italic') ? 'is-active' : ''}
      />
    </Tooltip>
  );
};

const BoldButton = ({ editor }: ToolbarItem) => {
  const isDisabled = !editor?.can().chain().focus().toggleBold().run();

  return (
    <Tooltip message="Bold" isDisabled={isDisabled}>
      <Button
        variant="ghost"
        iconOnly="text-bold--fill"
        isSelected={editor?.isActive('bold')}
        onClick={() => editor?.chain().focus().toggleBold().run()}
        isDisabled={isDisabled}
        className={editor?.isActive('bold') ? 'is-active' : ''}
      />
    </Tooltip>
  );
};

const UnderlineButton = ({ editor }: ToolbarItem) => {
  const { state } = editor;
  const { selection } = state;
  const isDisabled =
    editor.isActive('code') ||
    (!selection.empty && editor.isActive('codeBlock'));

  return (
    <Tooltip message="Underline" isDisabled={isDisabled}>
      <Button
        variant="ghost"
        iconOnly="text-underline--fill"
        isSelected={editor?.isActive('underline')}
        isDisabled={isDisabled}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      />
    </Tooltip>
  );
};

export {
  StrikeButton,
  ItalicButton,
  BoldButton,
  Headings,
  UnderlineButton,
  TextColorMenu,
};
