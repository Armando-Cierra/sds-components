import React, { useState, useCallback } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { Editor } from '@tiptap/react';
import { Button } from '../../../Button';
import { Menu } from '../../../Menu';
import { Telicon } from '../../../Telicon';
import { TextInput } from '../../../TextInput';
import { Tooltip } from '../../../Tooltip';
import { testLinkType, validateLink } from '../utils';
import type { ToolbarItem } from './types';

const EmojiSelector = ({ editor }: ToolbarItem) => {
  const [currentEmoji, setCurrentEmoji] = useState('😀');

  return (
    <Menu
      style={{ padding: 0, display: 'flex', width: 'auto' }}
      className="sds_wysiwyg_emoji"
    >
      <Menu.Trigger>
        <Tooltip message="Emoji">
          <Button variant="ghost">{currentEmoji}</Button>
        </Tooltip>
      </Menu.Trigger>
      <Menu.CustomArea style={{ padding: 0 }}>
        <EmojiPicker
          open
          style={{ border: 'none' }}
          onEmojiClick={(event) => {
            const transaction = editor.state.tr.insertText(event.emoji);
            editor.view.dispatch(transaction);
            setCurrentEmoji(event.emoji);
          }}
        />
      </Menu.CustomArea>
    </Menu>
  );
};

const Lists = ({ editor }: ToolbarItem) => (
  <Menu style={{ width: 'auto' }} className="sds_wysiwyg_lists">
    <Menu.Trigger>
      <Tooltip message="Lists">
        <Button
          variant="ghost"
          iconBefore="list-unordered--fill"
          iconAfter="chevrons-expand-vertical--fill"
        ></Button>
      </Tooltip>
    </Menu.Trigger>
    <Tooltip message="Bullet" position="bottom">
      <Menu.Option
        onClick={() => editor?.chain().focus().toggleBulletList().run()}
        className={editor?.isActive('bulletList') ? 'is-active' : ''}
      >
        <Telicon iconName="list-unordered--fill" />
      </Menu.Option>
    </Tooltip>
    <Tooltip message="Numbered" position="bottom">
      <Menu.Option
        onClick={() => editor?.chain().focus().toggleOrderedList().run()}
        className={editor?.isActive('orderedList') ? 'is-active' : ''}
      >
        <Telicon iconName="list-ordered--fill" />
      </Menu.Option>
    </Tooltip>
  </Menu>
);

const LinkButton = ({ editor }: ToolbarItem) => {
  const [linkHref, setLinkHref] = useState<string>('');
  const [hasError, setHasError] = useState(false);

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkHref(e.target.value);
    if (validateLink(e.target.value)) setHasError(false);
  };

  const toggleLink = useCallback(() => {
    if (validateLink(linkHref)) {
      editor
        ?.chain()
        .focus()
        .toggleLink({ href: linkHref, target: '_blank' })
        .run();
      setLinkHref('');
    } else {
      setHasError(true);
    }
  }, [editor, linkHref]);

  const hasLinkInSelection = editor?.isActive('link');
  if (hasLinkInSelection) {
    return (
      <Tooltip message="Unlink">
        <Button
          variant="ghost"
          onClick={() => editor?.chain().focus().unsetLink().run()}
          iconOnly="link-broken--fill"
        />
      </Tooltip>
    );
  }

  return (
    <Menu style={{ padding: 0, width: 'auto' }} align="end">
      <Menu.Trigger>
        <Tooltip message="Link">
          <Button variant="ghost" onClick={toggleLink} iconOnly="link--fill" />
        </Tooltip>
      </Menu.Trigger>
      <Menu.CustomArea className="sds_wysiwyg_link">
        <TextInput hasError={hasError}>
          <TextInput.Control
            placeholder="URL"
            onChange={handleLinkChange}
            value={linkHref}
          />
          {hasError && (
            <TextInput.HelpText hasError>
              Check URL formatting and try again.
            </TextInput.HelpText>
          )}
        </TextInput>
        <Button
          isDisabled={hasError || linkHref.length === 0}
          onClick={toggleLink}
        >
          Insert
        </Button>
      </Menu.CustomArea>
    </Menu>
  );
};

const CodeMenu = ({ editor }: ToolbarItem) => {
  return (
    <Menu className="sds_wysiwyg_codeblock">
      <Menu.Trigger>
        <Tooltip message="Insert code">
          <Button
            variant="ghost"
            iconBefore="code-angles--fill"
            iconAfter="chevrons-expand-vertical--fill"
          ></Button>
        </Tooltip>
      </Menu.Trigger>
      <Menu.CustomArea>
        <CodeInlineButton editor={editor} />
        <CodeBlockButton editor={editor} />
      </Menu.CustomArea>
    </Menu>
  );
};

const CodeInlineButton = ({ editor }: ToolbarItem) => (
  <Tooltip message="Code" position="bottom">
    <Button
      variant="ghost"
      iconOnly="code-angles--fill"
      onClick={() => editor.chain().focus().toggleCode().run()}
      isDisabled={!editor?.can().chain().focus().toggleCode().run()}
    />
  </Tooltip>
);

const CodeBlockButton = ({ editor }: ToolbarItem) => (
  <Tooltip message="Codeblock" position="bottom">
    <Button
      variant="ghost"
      iconOnly="code-block--fill"
      onClick={() => editor.chain().focus().toggleCodeBlock().run()}
    />
  </Tooltip>
);

const MediaButton = ({ editor }: { editor: Editor }) => {
  const [mediaSource, setMediaSource] = useState<string>('');
  const [hasError, setHasError] = useState(false);

  const handleMediaSourceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMediaSource(e.target.value);
    const linkType = testLinkType(e.target.value);
    if (linkType !== 'Invalid') setHasError(false);
  };

  const handleSubmit = () => {
    const linkType = testLinkType(mediaSource);
    if (linkType === 'Image') {
      editor?.chain().focus().setImage({ src: mediaSource }).run();
      setHasError(false);
    } else if (linkType === 'Video') {
      editor.commands.setVideo(mediaSource);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  return (
    <Menu style={{ padding: 0, width: 'auto' }} align="end">
      <Menu.Trigger>
        <Tooltip message="Insert media">
          <Button variant="ghost" iconOnly="image--fill" />
        </Tooltip>
      </Menu.Trigger>
      <Menu.CustomArea className="sds_wysiwyg_link">
        <TextInput hasError={hasError}>
          <TextInput.Control
            placeholder="URL"
            onChange={handleMediaSourceChange}
            value={mediaSource}
          />
          {hasError && (
            <TextInput.HelpText hasError>
              Check URL formatting and try again.
            </TextInput.HelpText>
          )}
        </TextInput>
        <Button
          onClick={handleSubmit}
          isDisabled={hasError || mediaSource.length === 0}
        >
          Insert
        </Button>
      </Menu.CustomArea>
    </Menu>
  );
};

const HorizontalRuleButton = ({ editor }: ToolbarItem) => (
  <Tooltip message="Horizontal rule">
    <Button
      variant="ghost"
      onClick={() => editor.chain().focus().setHorizontalRule().run()}
      iconOnly="minus--fill"
    />
  </Tooltip>
);

const MacrosMenu = ({
  editor,
  macros,
}: {
  editor: Editor;
  macros: string[];
}) => (
  <Menu className="sds_wysiwyg_macros">
    <Menu.Trigger>
      <Tooltip message="Insert macros">
        <Button variant="ghost" iconAfter="chevrons-expand-vertical--fill">
          Macros
        </Button>
      </Tooltip>
    </Menu.Trigger>
    {macros.map((macro, index) => (
      <Menu.Option
        key={index}
        onClick={() => {
          const transaction = editor?.state.tr.insertText(`{{${macro}}}`);
          editor?.view.dispatch(transaction);
        }}
      >
        {macro}
      </Menu.Option>
    ))}
  </Menu>
);

export {
  LinkButton,
  CodeInlineButton,
  CodeBlockButton,
  EmojiSelector,
  Lists,
  MediaButton,
  HorizontalRuleButton,
  MacrosMenu,
  CodeMenu,
};
