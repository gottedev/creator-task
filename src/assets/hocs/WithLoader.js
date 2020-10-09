import React from "react";
import { RingLoader } from "react-spinners";

const WithLoader = (Component) => (state) => {
  const {
    propertiesData: { isLoading },
  } = state;
  if (isLoading) {
    return (
      <div className="ResultContainer">
        <RingLoader height="250" width="250" color="rgb(99, 159, 170)" />
      </div>
    );
  }
  return <Component {...state} />;
};

export default WithLoader;
