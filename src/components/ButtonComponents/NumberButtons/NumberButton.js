import React from "react";

const NumberButton = ({currentNumber}) => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>
        {currentNumber}
        </button>    
    </div>
  );
};

export default NumberButton;
