import React from 'react';
import logo32 from '../assets/images/logo32.png';

function Header() {
    return (
        <header className="absolute w-full bg-secondary text-white flex justify-between">
            <div className="container flex items-center mx-auto py-4">
                <img src={logo32} alt="" className='mx-5' />
                <h1 className="text-2xl font-bold">Notion</h1>
            </div>
            <div className="flex">
                {/* <a className="px-8 hover:bg-blue-500 flex items-center text-2x1 font-bold" href='/'>LogIn</a>
                <a className="px-8 hover:bg-blue-500 flex items-center text-2x1 font-bold" href='/'>SignIn</a> */}
            </div>
        </header>
    );
}

export default Header;