export interface CreditCardMockupProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  name: string;
  number: string | number;
  cvc: string | number;
  expiry: string | number;
  focused?: 'name' | 'number' | 'expiry' | 'cvc';
  namePlaceholder?: string;
  ref?: never;
  acceptedCards?: string[];
  previewBrand?: string;
}
