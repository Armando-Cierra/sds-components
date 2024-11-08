type SliderVariant = 'default' | 'primary';
type SliderTooltipBehavior = 'showOnHover' | 'showAlways' | 'hide';
type Labels = {
  min: string;
  max: string;
};

export type SliderDualChangeEventProps = {
  initialValue: number;
  endValue: number;
};

export interface SliderControlProps {
  className?: string;
  variant?: SliderVariant;
  min?: number;
  max?: number;
  defaultInitialValue?: number;
  initialValue?: number;
  defaultEndValue?: number;
  endValue?: number;
  tooltipBehavior?: SliderTooltipBehavior;
  hasError?: boolean;
  isDisabled?: boolean;
  labels?: Labels;
  ref?: never;
  onChange?: (e: SliderDualChangeEventProps) => void;
}

export interface UseControl {
  min: number;
  max: number;
  defaultInitialValue?: number;
  controlledInitialValue?: number;
  defaultEndValue?: number;
  controlledEndValue?: number;
  hasError?: boolean;
  isDisabled?: boolean;
  onChange?: (e: SliderDualChangeEventProps) => void;
}
