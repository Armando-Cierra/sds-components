import type { ReactElement } from 'react';

export interface WizardMobileNavProps {
  steps: ReactElement;
  isMobileMenuClosed: boolean;
  setIsMobileMenuClosed: (value: boolean) => void;
  heading?: string;
}
