import React from 'react';
import Header from '../components/header';
import LoginForm from '../components/login-form';

function LogIn() {
  return (
    <div className='bg-primary h-screen font-sans'>
      <Header />
      <div className='flex items-center flex-col justify-center h-full'>
        <LoginForm />
        <div className='flex items-end justify-center mt-14'>
          <p>Made by <a className='text-blue-500 underline font-bold' href="https://github.com/dayvsonspacca">dayvsonspacca</a></p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
