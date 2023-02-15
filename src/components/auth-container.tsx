import React from "react";

function AuthContainer() {
    return (
        <div className="flex items-center justify-center flex-col">
            <h1 className="text-5xl font-bold my-5">Sign Up</h1>
            <div className="flex flex-col w-72">
                <label className="text-sm my-1">Work Email</label>
                <input className="bg-gray-300 placeholder-gray-400 p-2 border-2 border-gray-400 rounded" placeholder="Enter your e-mail adress..." type="text" />
                <input className="bg-gray-300 placeholder-gray-400 p-2 border-2 border-gray-400 rounded my-2" placeholder="Enter your password..." type="password" />
                <button className="p-2 my-2 bg-emerald-500 hover:bg-emerald-400 rounded text-primary font-bold" type="submit">Continue with email</button>
            </div>
            <div>Already have an account? <a className="font-bold text-blue-500 underline" href="/">Sign In!</a></div>
        </div>
    );
}

export default AuthContainer;