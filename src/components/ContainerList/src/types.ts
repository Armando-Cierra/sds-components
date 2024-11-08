import { ReactNode } from 'react';
import { AvailableTelicon } from '../../Telicon';

type SortingButtonsVariants =
  | 'base'
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'danger'
  | 'dangerAlt'
  | 'inverted'
  | 'invertedAlt';

export type ContainerListDragChangeEvent = string[];

export interface ContainerListProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  itemsSort?: string[];
  isDraggable?: boolean;
  hideSortingButtons?: boolean;
  sortingButtonsVariant?: SortingButtonsVariants;
  sortingButtonsIcons?: {
    up: AvailableTelicon;
    down: AvailableTelicon;
  };
  hideSortingButtonsTooltips?: boolean;
  sortingButtonsTooltipsText?: {
    up: string;
    down: string;
  };
  dragIcon?: AvailableTelicon;
  onDragChange?: (e: ContainerListDragChangeEvent) => void;
  ref?: never;
}

export interface UseContainerListProps {
  children: ReactNode;
  itemsSort?: string[];
  onDragChange?: (e: ContainerListDragChangeEvent) => void;
}

export interface ContainerListContextProps {
  isDraggable?: boolean;
  hideSortingButtons?: boolean;
  sortingButtonsIcons?: {
    up: AvailableTelicon;
    down: AvailableTelicon;
  };
  sortingButtonsVariant?: SortingButtonsVariants;
  hideSortingButtonsTooltips?: boolean;
  sortingButtonsTooltipsText?: {
    up: string;
    down: string;
  };
  dragIcon?: AvailableTelicon;
  sort: string[];
  moveItem: (
    movement: 'up' | 'down',
    value: string
  ) => (e: React.MouseEvent) => void;
}
