import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { bindActionCreators } from "redux";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import moment from "moment";
import { Bed, BathTub, Sofa, Edit } from "../assets/icons";
import { WithLoader } from "../assets/hocs";
import {
  setUpdatedProperty,
  setAllPropertyDetails,
  toggleModal,
} from "../actions";
import WithModal from "../assets/hocs/WithModal";
import Card from "./Card";
import CardItem from "./CardItem";
import Button from "./Button";
import "./properties.scss";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination]);

function Properties({ propertiesData, handleModal, handleAllPropertyDetails }) {
  let updatedData = [];
  const { properties: data, isLoading, isAdmin } = propertiesData;

  const handleClick = (values, e) => {
    handleAllPropertyDetails(values);
    handleModal(true);
  };

  const bookNowHandler = (value) => {
    console.log("url", `${value}`);
    window.open(value, "_blank");
  };

  const formatDate = (date) => moment(date).format("DD MMM YYYY");

  if (!isLoading) {
    for (let key in data) {
      const photos = data[key]["photos"];
      const uniquePropertyId = key;
      const propertyName = data[key]["address"]["property_name"];
      const propertyAddress = data[key]["address"]["road_name"];
      const availableDate = data[key]["end_date"];
      const numberOfBedroom = data[key]["cluster_size"];
      const numberOfBathroom = data[key]["bathrooms"];
      const numberOfLivingroom = data[key]["living_space"];
      const bookNowUrl = data[key]["book_now_url"];
      const propertyPrice = data[key]["price_per_person_per_week"];
      updatedData.push(
        <div className="book-now-box-outer" key={key}>
          <div style={{ marginBottom: "20px" }}>
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              pagination
              preventClicksPropagation
            >
              {photos.map((photos, index) => (
                <SwiperSlide
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  key={index}
                >
                  <img src={photos.photo} alt="test" />
                </SwiperSlide>
              ))}
              <Card>
                {isAdmin && (
                  <CardItem className="booknow-boxitem edit-property-btn">
                    <div
                      onClick={(e) =>
                        handleClick(
                          {
                            propertyName,
                            propertyAddress,
                            availableDate,
                            numberOfBedroom,
                            numberOfBathroom,
                            numberOfLivingroom,
                            bookNowUrl,
                            propertyPrice,
                            uniquePropertyId,
                          },
                          e
                        )
                      }
                    >
                      <Edit />
                    </div>
                  </CardItem>
                )}
                <CardItem className="booknow-boxitem title-container-outer">
                  <h2>
                    {propertyName},{propertyAddress}
                  </h2>
                </CardItem>
                <CardItem className="booknow-boxitem availability-container-outer">
                  <p>Available from {formatDate(availableDate)}</p>
                </CardItem>
                <CardItem className="booknow-boxitem icon-container-outer">
                  <div className="icon-container">
                    <Bed />
                    <p>&nbsp;{numberOfBedroom} Bedroom</p>
                  </div>
                  <div className="icon-container">
                    <BathTub /> &nbsp;
                    <p>{numberOfBathroom} Bathroom</p>
                  </div>
                  <div className="icon-container">
                    <Sofa /> &nbsp;
                    <p>{numberOfLivingroom} Living Space</p>
                  </div>
                </CardItem>
                <CardItem className="booknow-boxitem bills-container-outer">
                  <p>
                    <span>
                      £{propertyPrice}
                      &nbsp;PPPW
                    </span>
                    &nbsp;Excluding Bills
                  </p>
                </CardItem>
                <CardItem className="booknow-boxitem button-container-outer">
                  <Button
                    className="primary-btn"
                    value="BOOK NOW"
                    clickHandler={() => bookNowHandler(bookNowUrl)}
                  />
                </CardItem>
              </Card>
            </Swiper>
          </div>
        </div>
      );
    }
  }
  return <div className="properties-container">{updatedData}</div>;
}

const mapStateToProps = (state) => ({
  propertiesData: state.reducer,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      upadatePropertyData: (values) => setUpdatedProperty(values),
      handleAllPropertyDetails: (values) => setAllPropertyDetails(values),
      handleModal: (status) => toggleModal(status),
    },
    dispatch
  );

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithModal,
  WithLoader
)(Properties);
