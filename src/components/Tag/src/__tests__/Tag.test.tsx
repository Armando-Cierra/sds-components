import React from 'react';
import { Tag } from '../Tag';
import { fireEvent } from '@testing-library/react';
import { forEachElement, getComponent } from '../../../../TestUtils';
import type { TagProps } from '../types';

type OmittedProps = Omit<TagProps, 'ref'>;

const TagTest = ({ ...rest }: OmittedProps) => {
  return (
    <div>
      <Tag {...rest}></Tag>
    </div>
  );
};

describe('Tag component', () => {
  const tagTestID = 'sds_tag';
  const tagTooltipTestID = 'sds_tag_tooltip';
  const tagActionTextID = 'sds_tag_action';

  it('renders correctly', () => {
    const { getByTestId } = getComponent(
      <TagTest>
        <Tag.Avatar>Example</Tag.Avatar>Test
      </TagTest>
    );
    const tag = getByTestId(tagTestID);
    const tagAvatar = document.querySelector('.sds_tag--avatar') as HTMLElement;
    forEachElement([tag, tagAvatar], (element) =>
      expect(element).toBeInTheDocument()
    );
  });

  it("If isRemovable action is active, it doesn't sets true the feature isSelectable", () => {
    const { getByTestId } = getComponent(
      <TagTest isRemovable isSelectable children="test" />
    );

    const tag = getByTestId(tagTestID);
    expect(tag).toHaveClass('sds_tag--removable');
    expect(tag).not.toHaveClass('sds_tag--selectable');
  });

  it('calls onChange function when tag is selectable and it is clicked', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = getComponent(
      <TagTest children="test" isSelectable onChange={onChangeMock} />
    );

    const tag = getByTestId(tagTestID);
    fireEvent.click(tag);

    expect(onChangeMock).toHaveBeenCalled();
  });

  it('sets the tag checked when the prop defaultChecked is set on the uncontrolled version', () => {
    const { getByTestId } = getComponent(
      <TagTest children="test" isSelectable defaultChecked />
    );

    const tag = getByTestId(tagTestID);
    expect(tag).toHaveClass('sds_tag--checked');
  });

  it('calls onRemove when the remove action button is clicked', () => {
    const onRemoveMock = jest.fn();
    const { getByTestId } = getComponent(
      <TagTest children="test" isRemovable onRemove={onRemoveMock} />
    );

    const exitButton = getByTestId(tagActionTextID);
    fireEvent.click(exitButton);
    expect(onRemoveMock).toHaveBeenCalled();
  });

  it('Renders a tooltip if children length is higher than the characterLimit', async () => {
    const { getByTestId } = getComponent(
      <TagTest children="super duper extra long text" />
    );

    const tooltip = getByTestId(tagTooltipTestID);
    expect(tooltip).toBeInTheDocument();
  });
});
