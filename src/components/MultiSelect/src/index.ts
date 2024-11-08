import type {
  TagProps as MultiSelectTagProps,
  TagChangeEventProps as MultiSelectTagChangeEventProps,
  TagRemoveEventProps as MultiSelectTagRemoveEventProps,
} from '../../Tag';
import type {
  MenuOptionProps as MultiSelectMenuOptionProps,
  MenuSearchProps as MultiSelectMenuSearchProps,
} from '../../Menu';
import type { LabelProps as MultiSelectLabelProps } from '../../Label';
import type { HelpTextProps as MultiSelectHelpTextProps } from '../../HelpText';

export * from './MultiSelect';
export type { MultiSelectProps } from './types';
export type { MultiSelectTagBoxProps } from './TagBox/types';
export type { MultiSelectDropdownProps } from './Dropdown/types';
export type {
  MultiSelectTagProps,
  MultiSelectTagChangeEventProps,
  MultiSelectTagRemoveEventProps,
  MultiSelectMenuOptionProps,
  MultiSelectMenuSearchProps,
  MultiSelectLabelProps,
  MultiSelectHelpTextProps,
};
