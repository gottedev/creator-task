import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import moment from "moment";
import { connect } from "react-redux";
import { compose } from "recompose";
import { bindActionCreators } from "redux";
import DatePicker from "react-datepicker";
import { Cross } from "../assets/icons";
import Card from "./Card";
import CardItem from "./CardItem";
import Button from "./Button";
import Input from "./Input";
import * as actions from "../actions";

import "react-datepicker/dist/react-datepicker.css";

function UpdatePropertyModal({
  propertiesData,
  updatePropertyData,
  setPropertyName,
  setPropertyAddress,
  setPrice,
  setAvailability,
  setBookNowURL,
  setBedrooms,
  setBathrooms,
  setLivingRooms,
  toggleModal,
  isModalOpen,
}) {
  const {
    propertyName,
    propertyAddress,
    availableDate,
    bookNowUrl,
    numberOfBedroom,
    numberOfBathroom,
    numberOfLivingroom,
    propertyPrice,
    uniquePropertyId,
  } = propertiesData.property;

  const defaultDate = (date) => moment(date).format("YYYY-MM-DD");

  Modal.setAppElement("#modal");

  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(new Date(availableDate));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePropertyData({
      address: {
        property_name: propertyName,
        road_name: propertyAddress,
      },
      end_date: availableDate,
      book_now_url: bookNowUrl,
      cluster_size: numberOfBedroom,
      bathrooms: numberOfBathroom,
      living_space: numberOfLivingroom,
      price_per_person_per_week: propertyPrice,
      unique_id: uniquePropertyId,
    });
  };

  const handleModal = () => {
    toggleModal(false);
  };

  const handlePropertyName = (e) => {
    setPropertyName(e.target.value);
  };
  const handlePropertyAddress = (e) => {
    setPropertyAddress(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleAvailability = (date) => {
    if (date) {
      const formatDate = defaultDate(date);
      setDate(date);
      setAvailability(formatDate);
    } else {
      setDate(date);
    }
  };
  const handleBookNowURL = (e) => {
    setBookNowURL(e.target.value);
  };
  const handleBedrooms = (e) => {
    setBedrooms(e.target.value);
  };
  const handleBathrooms = (e) => {
    setBathrooms(e.target.value);
  };
  const handleLivingRooms = (e) => {
    setLivingRooms(e.target.value);
  };

  return (
    <Modal isOpen={isModalOpen}>
      <div
        className="property-edit-modal-item property-edit-modal-close-btn"
        onClick={(e) => handleModal(false)}
      >
        <Cross />
      </div>

      <div className="property-edit-card-outer">
        <Card className="property-edit-card">
          <form onSubmit={handleSubmit}>
            <CardItem className="property-edit-modal-item">
              <Input
                type="text"
                label="Title"
                value={propertyName}
                onChange={handlePropertyName}
              />
            </CardItem>
            <CardItem className="property-edit-modal-item">
              <Input
                type="text"
                label="Address"
                value={propertyAddress}
                onChange={handlePropertyAddress}
              />
            </CardItem>
            <CardItem className="property-edit-modal-item">
              <Input
                type="text"
                label="Price"
                value={propertyPrice}
                onChange={handlePrice}
              />
            </CardItem>
            <CardItem className="property-edit-modal-item">
              <label htmlFor="date-picker">Available Date</label>
              <DatePicker
                id="date-picker"
                selected={date}
                onChange={handleAvailability}
                isClearable
              />
            </CardItem>
            <CardItem className="property-edit-modal-item">
              <Input
                type="text"
                label="Book Now Url"
                value={bookNowUrl}
                onChange={handleBookNowURL}
              />
            </CardItem>
            <CardItem className="property-edit-modal-item">
              <Input
                type="number"
                label="No of Bedroom"
                value={numberOfBedroom}
                onChange={handleBedrooms}
              />
            </CardItem>
            <CardItem className="property-edit-modal-item">
              <Input
                type="number"
                label="No of Bathroom"
                value={numberOfBathroom}
                onChange={handleBathrooms}
              />
            </CardItem>
            <CardItem className="property-edit-modal-item">
              <Input
                type="number"
                label="No of Livingroom"
                value={numberOfLivingroom}
                onChange={handleLivingRooms}
              />
              <Button className="primary-btn" value="submit" />
            </CardItem>
          </form>
        </Card>
      </div>
    </Modal>
  );
}

const mapStateToProps = (state) => ({
  propertiesData: state.reducer,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updatePropertyData: (propertyData) =>
        actions.setUpdatedProperty(propertyData),
      setPropertyName: (name) => actions.setPropertyName(name),
      setPropertyAddress: (address) => actions.setPropertyAddress(address),
      setPrice: (price) => actions.setPropertyPrice(price),
      setAvailability: (date) => actions.setAvailableDate(date),
      setBookNowURL: (url) => actions.setBookNowUrl(url),
      setBedrooms: (rooms) => actions.setNumberOfBedrooms(rooms),
      setBathrooms: (rooms) => actions.setNumberOfBathrooms(rooms),
      setLivingRooms: (rooms) => actions.setNumberOfLivingrooms(rooms),
      toggleModal: (status) => actions.toggleModal(status),
    },
    dispatch
  );

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  UpdatePropertyModal
);
