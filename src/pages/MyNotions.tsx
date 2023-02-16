import React, { useState } from "react";

import Header from "../components/header";
import Notions from "../components/notions";
import NotionInfo from "../components/notion-info";

function MyNotions() {
  const [notions, setNotions] = useState([]);

  return (
    <div className="flex flex-col h-full bg-primary max-h-full">
      <Header />
      <div className="flex flex-row h-full">
        <div className="w-1/5 min-h-screen flex flex-col justify-center items-center border-r-4 border-darklight">
          <h4 className="text-3xl font-bold">Meus Notions</h4>
          <Notions data={notions} />
        </div>
        <div className="w-4/5 min-h-screen flex justify-end items-end">
          <NotionInfo />
        </div>
      </div>
    </div>
  );
}

export default MyNotions;