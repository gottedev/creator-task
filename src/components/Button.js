import React from "react";

function Button({ type, className, value, clickHandler, styles }) {
  return (
    <div>
      <button
        className={className || type}
        styles={styles}
        onClick={clickHandler}
      >
        <h3>{value}</h3>
      </button>
    </div>
  );
}

export default Button;
