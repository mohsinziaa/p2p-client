import {Dropdown, Navbar} from '@nextui-org/react';
import React from 'react';
import {NotificationIcon} from '../icons/navbar/notificationicon';

export const NotificationsDropdown = () => {
   return (
      <Dropdown placement="bottom-right">
         <Dropdown.Trigger>
            <Navbar.Item>
               <NotificationIcon />
            </Navbar.Item>
         </Dropdown.Trigger>
         <Dropdown.Menu
            aria-label="Avatar Actions"
            css={{
               '$$dropdownMenuWidth': '340px',
               '$$dropdownItemHeight': '70px',
               '& .nextui-dropdown-item': {
                  'py': '$4',
                  // dropdown item left icon
                  'svg': {
                     color: '$secondary',
                     mr: '$4',
                  },
                  // dropdown item title
                  '& .nextui-dropdown-item-content': {
                     w: '100%',
                     fontWeight: '$semibold',
                  },
               },
            }}
         >
            <Dropdown.Section title="Notifications">
               <Dropdown.Item
                  key="1"
                  showFullDescription
                  description="Your requisition status has been updated to 'Pending Approval'."
               >
                  Requisition Status Updated
               </Dropdown.Item>
               <Dropdown.Item
                  key="2"
                  showFullDescription
                  description="You have received a new requisition request. Please review it."
               >
                  New Requisition Request Received
               </Dropdown.Item>
               <Dropdown.Item
                  key="3"
                  showFullDescription
                  description="Unfortunately, your requisition request has been rejected. Please check the comments for further details."
               >
                  Your requisition was rejected.
               </Dropdown.Item>
            </Dropdown.Section>
         </Dropdown.Menu>
      </Dropdown>
   );
};
