import React from 'react';
import Header from '../components/header';
import RegisterForm from '../components/register-form';

function SignUp() {
  return (
    <div className='bg-primary h-screen font-sans'>
      <Header />
      <div className='flex items-center justify-center h-full flex-col'>
        <RegisterForm />
        <div className='flex items-end justify-center mt-14'>
          <p>Made by <a className='text-blue-500 underline font-bold' href="https://github.com/dayvsonspacca">dayvsonspacca</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
