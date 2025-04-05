import type { NextPage } from 'next';
import { LoginCard } from '../components/login/login-card';
import { LoginContainer } from '../components/login/login-container';

const Login: NextPage = () => {
  return (
    <LoginContainer>
      <LoginCard />
    </LoginContainer>
  );
};

export default Login;