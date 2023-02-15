import React from "react";
import Header from "../components/header";
import Notions from "../components/notions";

function Home() {
    return (
      <div className='bg-primary h-screen font-sans'>
        <Header />
        <div className='bg-primary grid grid-cols-12 h-full '>
            <div className="bg-gray-400 lg:col-start-1 lg:col-span-4 flex justify-center items-center mt-10">
                <Notions />
            </div>
            <div className="bg-gray-200 lg:col-start-5 lg:col-span-12">a</div>
        </div>
      </div>
    );
}


export default Home;