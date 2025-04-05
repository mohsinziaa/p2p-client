// components/login/login-card.tsx
import { Card } from '@nextui-org/react';
import { LoginForm } from './login-form';
import Image from 'next/image';
import { Box } from '../styles/box'; // Use your existing Box component

export const LoginCard = () => {
  return (
    <Card
      css={{
        padding: '2rem',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        border: '1px solid $border', // Using theme variable
        backgroundColor: '$background' // Using theme variable
      }}
    >
      <Box css={{ display: 'flex', justifyContent: 'center', mb: '$8' }}>
        <Image
          src="/matco-logo.png"
          alt="Logo"
          width={150}
          height={120}
          priority
        />
      </Box>
      <LoginForm />
    </Card>
  );
};