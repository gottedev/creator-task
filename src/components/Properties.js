import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Bed, BathTub, Sofa, Edit } from "../assets/icons";
import Card from "./Card";
import CardItem from "./CardItem";
import Button from "./Button";
import "./properties.scss";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination]);

function Properties({ data, isAdmin, handleModel }) {
  console.log(data);
  let updatedData = [];

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
      <div style={{ position: "relative" }} key={key}>
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
                <img src={photos.photo} width="100%" height="100%" alt="test" />
              </SwiperSlide>
            ))}
            <Card>
              {isAdmin && (
                <CardItem className="booknow-boxitem edit-property-btn">
                  <div
                    onClick={(e) =>
                      handleModel(
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
                <p>Available from {availableDate}</p>
              </CardItem>
              <CardItem className="booknow-boxitem icon-container-outer">
                <div className="icon-container">
                  <Bed />
                  <div>&nbsp;{numberOfBedroom} Bedroom</div>
                </div>
                <div className="icon-container">
                  <BathTub /> &nbsp;
                  <div>{numberOfBathroom} Bathroom</div>
                </div>
                <div className="icon-container">
                  <Sofa /> &nbsp;
                  <div>{numberOfLivingroom} Living Space</div>
                </div>
              </CardItem>
              <CardItem className="booknow-boxitem bills-container-outer">
                <span>
                  £{propertyPrice}
                  &nbsp;PPPW
                </span>
                &nbsp;Excluding Bills
              </CardItem>
              <CardItem className="booknow-boxitem button-container-outer">
                <Button className="primary-btn" value="Book Now" />
              </CardItem>
            </Card>
          </Swiper>
        </div>
      </div>
    );
  }
  return <div className="properties-container">{updatedData}</div>;
}

export default Properties;
