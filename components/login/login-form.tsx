import { Button, Input, Loading } from '@nextui-org/react';
import { RememberMeCheckbox } from './checkbox';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    // Reset errors
    setPasswordError('');
    
    let isValid = true;
    
    if (!email) {
      isValid = false;
    }
    
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }
    
    if (!isValid) return;
    
    setIsLoading(true);
    
    // Simulate API call with 1 second delay
    setTimeout(() => {
      setIsLoading(false);
      router.push('/home');
    }, 1000);
  };

  return (
    <>
        <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        css={{
            marginBottom: '1rem',
            $$inputBorderColor: 'rgba(0, 0, 0, 0.1)', // Very subtle default border
            $$inputPlaceholderColor: '#999',
            '& .nextui-input-wrapper': {
            borderRadius: '6px',
            boxShadow: 'none',
            border: '1px solid rgba(0, 0, 0, 0.1)', // Explicit border declaration
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
            },
            '&:hover .nextui-input-wrapper': {
            borderColor: 'rgba(0, 0, 0, 0.2)', // Slightly darker on hover
            },
            '&:focus-within .nextui-input-wrapper': {
            borderColor: '#0070f3',
            boxShadow: '0 0 0 2px rgba(0, 112, 243, 0.2)',
            },
        }}
        />

      <Input.Password
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        css={{
            marginBottom: '1rem',
            $$inputBorderColor: 'rgba(0, 0, 0, 0.1)', // Very subtle default border
            $$inputPlaceholderColor: '#999',
            '& .nextui-input-wrapper': {
            borderRadius: '6px',
            boxShadow: 'none',
            border: '1px solid rgba(0, 0, 0, 0.1)', // Explicit border declaration
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
            },
            '&:hover .nextui-input-wrapper': {
            borderColor: 'rgba(0, 0, 0, 0.2)', // Slightly darker on hover
            },
            '&:focus-within .nextui-input-wrapper': {
            borderColor: '#0070f3',
            boxShadow: '0 0 0 2px rgba(0, 112, 243, 0.2)',
            },
        }}
        helperText={passwordError}
        helperColor="error"
        status={passwordError ? 'error' : 'default'}
      />

      <RememberMeCheckbox />

      <Button
        onPress={handleLogin}
        disabled={!email || !password || isLoading}
        css={{
          backgroundColor: '#0070f3',
          color: '#fff',
          fontWeight: '500',
          borderRadius: '4px',
          textTransform: 'none',
          position: 'relative',
          transition: 'background-color 0.2s ease',
          '&:disabled': {
            backgroundColor: '#e0e0e0', // Gray background when disabled
            color: '#a0a0a0', // Gray text when disabled
            cursor: 'not-allowed',
          },
        }}
      >
        {isLoading ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Loading type="points-opacity" color="currentColor" size="sm" />
            Signing In...
          </div>
        ) : (
          'Sign In'
        )}
      </Button>
    </>
  );
};