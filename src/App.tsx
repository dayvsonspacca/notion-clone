import React from 'react';
import AuthContainer from './components/auth-container';
import Header from './components/header';

function SignUp() {
  return (
    <div className='bg-primary h-screen font-sans'>
      <Header />
      <div className='flex items-center justify-center h-96'>
        <AuthContainer />
      </div>
      <div className='flex items-end justify-center'>
        Made by dayvsonspacca
      </div>
    </div>
  );
}

export default SignUp;
