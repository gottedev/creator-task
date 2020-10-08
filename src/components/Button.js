import React from "react";

function Button({ type, className, value, clickHandler, styles }) {
  return (
    <div>
      <button
        className={className || type}
        styles={styles}
        onClick={clickHandler}
      >
        {value}
      </button>
    </div>
  );
}

export default Button;
