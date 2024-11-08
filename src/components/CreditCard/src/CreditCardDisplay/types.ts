import type { AvailableCreditCardBrandsTypes } from '../types';

export interface CreditCardDisplayProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  title?: string;
  cardNumber?: string;
  cardBrand?: AvailableCreditCardBrandsTypes;
  isEditable?: boolean;
  ref?: never;
  onEdit?: () => void;
}
