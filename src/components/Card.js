import React from "react";

function Card({ children, styles, className }) {
  return (
    <div className={className || "box-container"} styles={styles}>
      {children}
    </div>
  );
}

export default Card;
