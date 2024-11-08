import type { AvailableTelicon } from '../../Telicon';
import type { Status } from './types';

export const useAvatar = (children?: string, status?: Status) => {
  const colors = [
    'neutral',
    'blue',
    'green',
    'yellow',
    'red',
    'indigo',
    'purple',
    'teal',
    'lime',
    'orange',
    'pink',
  ];

  const gettingInitials = () => {
    if (children) {
      const usernameArray: string[] = children
        .trim()
        .replace(/\s+/g, ' ')
        .split(' ');
      if (usernameArray.length > 1) {
        const [firstName, lastName] = usernameArray;
        const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();
        return initials;
      }

      const initials = `${children.substring(0, 2)}`;
      return initials.toUpperCase();
    }
    return 'NaN';
  };

  const getIcon = (): AvailableTelicon => {
    switch (status) {
      case 'online':
        return 'check--fill';
      case 'away':
        return 'clock-hands--fill';
      case 'busy':
        return 'minus--fill';
      case 'ringing':
        return 'bell--fill';
      case 'onCall':
        return 'phone--fill';
      case 'onExternalCall':
        return 'phone-outbound--fill';
      case 'recovery':
        return 'clock-hands--fill';
      case 'offline':
        return 'x--fill';
      default:
        return '' as AvailableTelicon;
    }
  };

  const getBackgroundColor = (
    content: string | undefined,
    colorsArray: string[]
  ) => {
    if (content) {
      const index = String(content).length % colorsArray.length;
      return colorsArray[index];
    }
    return colorsArray[0];
  };

  return {
    colors,
    getBackgroundColor,
    getIcon,
    gettingInitials,
  };
};
