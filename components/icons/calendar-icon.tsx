import React from 'react';
import {Svg} from '../styles/svg';

interface Props {
   color?: string;
}

export const CalendarIcon = ({color = 'currentColor'}: Props) => {
   return (
      <Svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         css={{
            'cursor': 'pointer',
            '& path': {
               fill: color,
            },
         }}
      >
         <Svg.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2V4H16V2H18V4H21C21.5523 4 22 4.44772 22 5V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V5C2 4.44772 2.44772 4 3 4H6V2H8ZM20 10H4V20H20V10ZM6 6H4V8H20V6H18V8H16V6H8V8H6V6Z"
         />
      </Svg>
   );
};