import React, { Fragment } from "react";
import Overlay from "./Overlay";

export default function Popup({ children }) {
  return (
    <Fragment>
      <Overlay />
      <div className="w-[90%] flex items-center justify-center lg:w-[30%] p-4  bg-white z-[60] rounded-lg shadow-lg absolute top-[15%] left-5 lg:left-[35%]">
        {children}
      </div>
    </Fragment>
  );
}
