import React from "react";
import { Login } from "../../components";

const WithAuth = (Component) => ({ propertiesData, getPropertiesData }) => {
  const { isLoggedIn } = propertiesData;
  if (isLoggedIn) {
    return (
      <Component
        propertiesData={propertiesData}
        getPropertiesData={getPropertiesData}
      />
    );
  }
  return <Login className="App" />;
};

export default WithAuth;
