import { PointerSensor } from '@dnd-kit/core';

//This custom sensor will detect native interactive html elements and custom sds interactive elements when a pointer is over them. By doing this, the drag event won't trigger and won't interrupt the interactive element events with the pointer.

const isInteractiveElement = (element: Element) => {
  const interactiveElements = [
    'button',
    'input',
    'textarea',
    'select',
    'option',
    'svg',
  ];
  if (interactiveElements.includes(element.tagName.toLowerCase())) {
    return true;
  }

  const classExceptions = [
    'sds_button',
    'sds_checkbox',
    'sds_radio',
    'sds_switch',
    'sds_dropdown',
    'sds_link',
    'sds_menu',
    'sds_popoverMenu',
    'sds_tag',
  ];

  const classes = element.className.split(' ');
  const hasExceptions = classes.some((className) => {
    return classExceptions.some((exception) => className.includes(exception));
  });
  return hasExceptions;
};

export const customPointerSensor = PointerSensor;
customPointerSensor.activators = [
  {
    eventName: 'onPointerDown',
    handler: ({ nativeEvent: event }) => {
      if (
        !event.isPrimary ||
        event.button !== 0 ||
        isInteractiveElement(event.target as Element)
      ) {
        return false;
      }
      return true;
    },
  },
];
