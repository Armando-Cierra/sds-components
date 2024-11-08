import type { AvailableTelicon } from './telicon-types';

/**
 * @extends React.SVGProps<SVGSVGElement>
 * @description Essentially a telicon component using thhe ReactSVG native API to use the native props
 */

type Size = 'default' | 'medium' | 'large';

export interface TeliconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  /**
   * @implements AvailableTelicon to choose from the available icons
   * @description Check available Telicon to see all the icons
   */
  iconName: AvailableTelicon;
  /**
   * @implements the type Size
   * @description Prop to change the size of the Telicon
   */
  size?: Size;
  ref?: never;
}

export type { AvailableTelicon };
