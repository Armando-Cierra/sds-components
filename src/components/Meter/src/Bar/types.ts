export interface BarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  percentage: number;
  ref?: never;
  variant?: 'default' | 'primary' | 'scaled';
  scales?: MeterScales;
}

export type MeterScales = {
  safe?: number;
  warning?: number;
  danger?: number;
};
