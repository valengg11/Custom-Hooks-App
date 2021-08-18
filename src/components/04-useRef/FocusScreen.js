import React, { useRef } from "react";
import "../02-useEffect/effect.css";

const FocusScreen = () => {
  const inputRef = useRef();
//   console.log(ref);
  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef)
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input 
        ref={inputRef} 
        className="form-control" 
        placeholder="Tu nombre" 
      />
      <button className="btn btn-info mt-3" onClick={handleClick}>
        Focus
      </button>
    </>
  );
};

export default FocusScreen;
