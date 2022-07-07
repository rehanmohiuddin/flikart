import React from "react";
import headerImg from "../../Assets/logo.png";

function Index() {
  return (
    <div className="flex w-full p-2 box-border bg-sky-600 justify-between">
      <img className="header-main-logo w-48" src={headerImg} />
      <input
        className="outline-none w-56 h-8 border-solid border-1 border-indigo-100 font-poppins p-1 rounded"
        placeholder="Search Products"
      />
    </div>
  );
}

export default Index;
