import { cloneElement, isValidElement, ReactElement, ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Title } from './Title';
import { ControlBar } from './ControlBar';
import { Content } from './Content';
import { Stack } from './Stack';
import type { UseTableProps } from './types';
import uniqid from 'uniqid';

export const useTable = ({ children, displayStackAt }: UseTableProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  let title: ReactNode = null;
  let controlBars: ReactElement[] = [];
  let content: ReactNode = null;
  let stack: ReactNode = null;

  //array at index 0 is returning undefined, only when children === undefined so pushing to an empty array 'undefined' is causing this.
  //this will only work with super weird usage edge-cases, eg:

  /*  
    <Table>
      
    </Table> 

    This would throw this error because children is undefined
    
  */

  //leaving as reference but will be deleted after you read it

  //if(childrenArray[0] === undefined) throw new Error('The Table component must receive at least one subcomponent as child.');

  const showStack = useMediaQuery({
    query: `(max-width: ${displayStackAt ?? 1023}px)`,
  });

  childrenArray.forEach((item) => {
    //fixed, adding 'isValidElement' is crucial to avoid these type of errors
    //if you want to test the error just remove line 40 and 56 and then uncomment line 31.
    if (isValidElement(item)) {
      if (item.type === Title)
        title = cloneElement(item as ReactElement, {
          key: uniqid('sds_table_title'),
          stackPadding: showStack,
        });
      if (item.type === ControlBar)
        controlBars = [
          ...controlBars,
          cloneElement(item as ReactElement, {
            key: uniqid('sds_table_controlBar'),
            stackPadding: showStack,
          }),
        ];
      if (item.type === Stack) stack = item;
      if (item.type === Content) content = item;
    }
  });

  controlBars.flat();

  // <Table></Table>
  // this would throw this error because children is null
  //issue specifically passing in this component: tested menus, dropdown, banner
  if (!content)
    throw new Error('<Table> requires <Table.Content> as a subcomponent.');

  return { title, controlBars, content, stack, showStack };
};
