import React from "react";

function Square({ value }) {
  function handleClick() {
    console.log('clicked!');
  }
}


export default function Board() {
  return (
    <div>
      <button
      className="square"
      onClick={handleClick}
      >
      {value}
    </button>
    </div>
  ); 
}
