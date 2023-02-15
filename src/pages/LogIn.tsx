import React from 'react';
import Header from '../components/header';
import LoginForm from '../components/login-form';

function LogIn() {
  return (
    <div className='bg-primary h-screen font-sans'>
      <Header />
      <div className='flex items-center justify-center h-96'>
        <LoginForm />
      </div>
      <div className='flex items-end justify-center'>
        <p>Made by <a className='text-blue-500 underline font-bold' href="https://github.com/dayvsonspacca">dayvsonspacca</a></p> 
      </div>
    </div>
  );
}

export default LogIn;
