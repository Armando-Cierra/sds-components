import type { AvailableCreditCardBrandsTypes } from '../types';

export interface CreditCardIconProps extends React.SVGProps<SVGSVGElement> {
  creditCard?: AvailableCreditCardBrandsTypes;
  ref?: never;
}
