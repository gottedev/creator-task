import React from "react";

function CardItem({ children, styles, className }) {
  return (
    <div className={className || "box-container-item"} styles={styles}>
      {children}
    </div>
  );
}

export default CardItem;
