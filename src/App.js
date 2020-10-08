import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { getProperties, updateProperty } from "./api";
import { Card, CardItem, Properties, Button, Login, Input } from "./components";
import { Cross } from "./assets";
import "./app.scss";

function App() {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [toggleModel, setToggleModel] = useState(false);
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  const [propertyName, setPropertyName] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [price, setPrice] = useState("");
  const [Availability, setAvailability] = useState("");
  const [bookNowURL, setBookNowURL] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [livingrooms, setLivingrooms] = useState("");
  const [uniquePropertyId, setUniquePropertyId] = useState("");
  const [forceRefresh, setForceRefresh] = useState(false);

  Modal.setAppElement("#modal");

  useEffect(() => {
    console.log("in effect");
    const fetchData = async () => {
      try {
        const properties = await getProperties();
        setData(properties);
      } catch (e) {
        setError(true);
      }
    };
    fetchData();
  }, [forceRefresh]);
  useEffect(() => {
    setLoading(false);
  }, [data]);

  const handleModal = (
    {
      propertyName,
      propertyAddress,
      availableDate,
      bookNowUrl,
      numberOfBedroom,
      numberOfBathroom,
      numberOfLivingroom,
      propertyPrice,
      uniquePropertyId,
    },
    e
  ) => {
    setPropertyName(propertyName);
    setPropertyAddress(propertyAddress);
    setPrice(propertyPrice);
    setAvailability(availableDate);
    setBookNowURL(bookNowUrl);
    setBathrooms(numberOfBathroom);
    setBedrooms(numberOfBedroom);
    setLivingrooms(numberOfLivingroom);
    setToggleModel(!toggleModel);
    setUniquePropertyId(uniquePropertyId);
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

  const handleAvailability = (e) => {
    setAvailability(e.target.value);
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
    setLivingrooms(e.target.value);
  };

  const handleUser = () => {
    setUserLoggedIn(!isUserLoggedIn);
  };

  const handleAdmin = () => {
    setUserLoggedIn(!isUserLoggedIn);
    setAdmin(!isAdmin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const propertyDetails = {
      address: {
        property_name: propertyName,
        road_name: propertyAddress,
      },
      end_date: Availability,
      book_now_url: bookNowURL,
      cluster_size: bedrooms,
      bathrooms,
      living_space: livingrooms,
      price_per_person_per_week: price,
      unique_id: uniquePropertyId,
    };
    updateProperty(propertyDetails);
    setForceRefresh(!forceRefresh);
  };

  return (
    <div className="App">
      {isUserLoggedIn ? (
        <>
          <Properties data={data} handleModel={handleModal} isAdmin={isAdmin} />
          <Modal isOpen={toggleModel}>
            <div
              className="property-edit-modal-item property-edit-modal-close-btn"
              onClick={(e) => handleModal({}, e)}
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
                      value={price}
                      onChange={handlePrice}
                    />
                  </CardItem>
                  <CardItem className="property-edit-modal-item">
                    <Input
                      type="text"
                      label="Availability"
                      value={Availability}
                      onChange={handleAvailability}
                    />
                  </CardItem>
                  <CardItem className="property-edit-modal-item">
                    <Input
                      type="text"
                      label="Book Now Url"
                      value={bookNowURL}
                      onChange={handleBookNowURL}
                    />
                  </CardItem>
                  <CardItem className="property-edit-modal-item">
                    <Input
                      type="number"
                      label="No of Bedroom"
                      value={bedrooms}
                      onChange={handleBedrooms}
                    />
                  </CardItem>
                  <CardItem className="property-edit-modal-item">
                    <Input
                      type="number"
                      label="No of Bathroom"
                      value={bathrooms}
                      onChange={handleBathrooms}
                    />
                  </CardItem>
                  <CardItem className="property-edit-modal-item">
                    <Input
                      type="number"
                      label="No of Livingroom"
                      value={livingrooms}
                      onChange={handleLivingRooms}
                    />
                    <Button className="primary-btn" value="submit" />
                  </CardItem>
                </form>
              </Card>
            </div>
          </Modal>
        </>
      ) : (
        <Login handleUser={handleUser} handleAdmin={handleAdmin} />
      )}
    </div>
  );
}

export default App;
