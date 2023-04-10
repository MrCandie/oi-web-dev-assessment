import React from "react";

export default function Overlay({ closeModal }) {
  return (
    <div
      onClick={() => {
        closeModal ? closeModal() : console.log("");
      }}
      className="w-full h-[200vh] z-[30] absolute top-0 left-0 bottom-0 bg-[rgba(0,0,0,0.1)]"
    ></div>
  );
}
