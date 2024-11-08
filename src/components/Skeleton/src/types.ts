interface SkeletonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  ref?: never;
}

export interface SkeletonBlockProps extends SkeletonProps {
  width?: string;
  height?: string;
  isImage?: boolean;
  imageIconSize?: 'medium' | 'large';
}

export interface SkeletonCircleProps extends SkeletonProps {
  size?: string;
  isImage?: boolean;
  imageIconSize?: 'medium' | 'large';
}

export interface SkeletonTextProps extends SkeletonProps {
  width?: string;
  isTitle?: boolean;
}

export interface SkeletonParagraphProps extends SkeletonProps {
  width?: string;
  lines?: number;
}

export interface SkeletonFormFieldProps extends SkeletonProps {
  width?: string;
}

export interface SkeletonListProps extends SkeletonProps {
  width?: string;
  items?: number;
}
