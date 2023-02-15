import React from 'react';
import Header from '../components/header';
import RegisterForm from '../components/register-form';

function SignUp() {
  return (
    <div className='bg-primary h-screen font-sans'>
      <Header />
      <div className='flex items-center justify-center h-96'>
        <RegisterForm />
      </div>
      <div className='flex items-end justify-center'>
        <p>Made by <a className='text-blue-500 underline font-bold' href="https://github.com/dayvsonspacca">dayvsonspacca</a></p> 
      </div>
    </div>
  );
}

export default SignUp;
