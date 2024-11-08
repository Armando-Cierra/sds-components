// access to change the getDocumentElement function '../../node_modules/@floating-ui/dom/dist/floating-ui.dom.umd' at 199

/* 
replace the following:
  function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document)?.documentElement;
} */

/* 
  This is a fixed issue, just waiting for radix-ui to implement the latest floating-ui version.
  See for reference:  
  https://github.com/floating-ui/floating-ui/pull/2438
 */

import {
  prettyDOM,
  getAllByTestId as getElementsByTestId,
  render,
  queryByTestId as queryElementByTestId,
} from '@testing-library/react';
/**
 *
 * @param component JSX.Element
 * @param domContainer @description the container used to render the component
 *
 */

export const getComponent = (
  component: JSX.Element,
  domContainer?: 'document' | 'default'
) => {
  let containerName = undefined;

  if (domContainer === 'document') {
    containerName = document.body;
    console.error = jest.fn();
  }

  const { getByTestId, container, getByText } = render(component, {
    container: containerName,
  });

  const log = () => {
    console.log(prettyDOM(container));
  };

  const getAllByTestId = (testid: string) => {
    return getElementsByTestId(container, testid);
  };

  const queryByTestId = (testid: string) => {
    return queryElementByTestId(container, testid);
  };

  return {
    getAllByTestId,
    getByTestId,
    getByText,
    log,
    queryByTestId,
    container: container as HTMLElement,
  };
};

export const forEachElement = (
  elements: HTMLElement[],
  callback: (element: HTMLElement, index: number) => void
): void => {
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    callback(element, index);
  }
};

export const expectError = (component: JSX.Element, message: string) => {
  console.error = jest.fn();
  expect(() => render(component)).toThrow(message);
};
