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
          backgroundColor: '#fff',
          border: '1px solid #dcdcdc',
          borderRadius: '6px',
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
          backgroundColor: '#fff',
          border: '1px solid #dcdcdc',
          borderRadius: '6px',
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