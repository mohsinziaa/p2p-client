import React from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';

interface DarkModeSwitchProps {
   onClick?: () => void; // Add onClick prop here
}

export const DarkModeSwitch = ({ onClick }: DarkModeSwitchProps) => {
   const { setTheme } = useNextTheme();
   const { isDark, type } = useTheme();

   return (
      <Switch
         checked={isDark}
         onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light');
            if (onClick) onClick(); // Trigger the onClick function if provided
         }}
      />
   );
};
