import React, { Key, useState } from 'react';
import { useRouter } from 'next/router';
import { Avatar, Dropdown, Navbar, Text } from '@nextui-org/react';
import { DarkModeSwitch } from './darkmodeswitch';
import { Moon } from 'lucide-react';

export const UserDropdown = () => {
   const router = useRouter();
   const [isOpen, setIsOpen] = useState(false); // State to control the dropdown open state

   const handleAction = (key: Key) => {
      const actionKey = key.toString(); // safely convert to string
      if (actionKey === 'logout') {
         router.push('/');
      } else {
         console.log({ actionKey });
      }
   };

   const handleDropdownToggle = (open: boolean) => {
      setIsOpen(open); // Update state when dropdown open state changes
   };

   // Force open the dropdown on switch interaction
   const handleSwitchInteraction = () => {
      setIsOpen(true); // Manually set the dropdown to be open
   };

   return (
      <Dropdown
         placement="bottom-right"
         isOpen={isOpen} // Make sure the dropdown remains open based on state
         onOpenChange={handleDropdownToggle} // This handles changes to dropdown state
      >
         <Navbar.Item>
            <Dropdown.Trigger>
               <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="avatar.png"
               />
            </Dropdown.Trigger>
         </Navbar.Item>
         <Dropdown.Menu aria-label="User menu actions" onAction={handleAction}>
            <Dropdown.Item key="profile" css={{ height: '$18' }}>
               <Text b color="inherit" css={{ d: 'flex' }}>
                  Signed in as
               </Text>
               <Text b color="inherit" css={{ d: 'flex' }}>
                  Mohsin Zia
               </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
               My Settings
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
               Analytics
            </Dropdown.Item>
            <Dropdown.Item key="help_and_feedback">
               Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" color="error">
               Log Out
            </Dropdown.Item>

            <Dropdown.Item key="switch" withDivider>
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                     width: '100%',
                  }}
               >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     <Moon size={18} />
                     <span>Switch Theme</span>
                  </div>
                  <div style={{ marginTop: '5px' }}>
                     <DarkModeSwitch onClick={handleSwitchInteraction} /> {/* Trigger dropdown open */}
                  </div>
               </div>
            </Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   );
};
