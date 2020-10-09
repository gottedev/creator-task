import React from "react";

function Button({ type, className, value, clickHandler, styles }) {
  return (
    <div>
      <button
        className={className || type}
        styles={styles}
        onClick={clickHandler}
      >
        <h2>{value}</h2>
      </button>
    </div>
  );
}

export default Button;
