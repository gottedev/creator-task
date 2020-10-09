import React from "react";
import { UpdatePropertyModal } from "../../components";

const WithModal = (Component) => ({
  propertiesData,
  updatePropertyData,
  handleModal,
  handleAllPropertyDetails,
}) => {
  const { isModalOpen, isAdmin } = propertiesData;
  if (isAdmin) {
    return (
      <>
        <Component
          propertiesData={propertiesData}
          updatePropertyData={updatePropertyData}
          handleModal={handleModal}
          handleAllPropertyDetails={handleAllPropertyDetails}
        />
        <UpdatePropertyModal
          toggleModal={handleModal}
          isModalOpen={isModalOpen}
        />
      </>
    );
  }
  return (
    <Component
      propertiesData={propertiesData}
      updatePropertyData={updatePropertyData}
      handleModal={handleModal}
      handleAllPropertyDetails={handleAllPropertyDetails}
    />
  );
};

export default WithModal;
