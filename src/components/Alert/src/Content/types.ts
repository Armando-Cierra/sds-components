export interface AlertContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  className?: string;
  hasPadding?: boolean;
  ref?: never;
}
