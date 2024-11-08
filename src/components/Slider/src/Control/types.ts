type SliderVariant = 'default' | 'primary';
type SliderTooltipBehavior = 'showOnHover' | 'showAlways' | 'hide';
type Labels = {
  min: string;
  max: string;
};

export type SliderSingleChangeEventProps = {
  value: number;
};

export interface SliderControlProps {
  className?: string;
  variant?: SliderVariant;
  min?: number;
  max?: number;
  defaultValue?: number;
  value?: number;
  tooltipBehavior?: SliderTooltipBehavior;
  hasError?: boolean;
  isDisabled?: boolean;
  labels?: Labels;
  ref?: never;
  onChange?: (e: SliderSingleChangeEventProps) => void;
}

export interface UseControl {
  min: number;
  max: number;
  defaultValue?: number;
  controlledValue?: number;
  hasError?: boolean;
  isDisabled?: boolean;
  onChange?: (e: SliderSingleChangeEventProps) => void;
}
