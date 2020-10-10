import * as types from "./types";

const initialState = {
  isLoading: false,
  isError: false,
  isAdmin: false,
  isUser: false,
  isLoggedIn: false,
  isModalOpen: false,
  properties: null,
  property: {
    propertyName: "",
    propertyAddress: "",
    availableDate: null,
    bookNowUrl: "",
    numberOfBedroom: 0,
    numberOfBathroom: 0,
    numberOfLivingroom: 0,
    propertyPrice: 0.0,
    uniquePropertyId: "",
  },
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case types.setLoading:
      return {
        ...state,
        isLoading: payload,
      };

    case types.setError:
      return {
        ...state,
        isError: payload,
      };

    case types.toggleModal:
      return {
        ...state,
        isModalOpen: payload,
      };

    case types.setData:
      return {
        ...state,
        properties: payload,
      };

    case types.updateData:
      return {
        ...state,
        properties: {
          ...state.properties,
          ...payload,
        },
        isModalOpen: false,
      };
    case types.setLogin:
      return {
        ...state,
        isLoggedIn: payload,
      };
    case types.setUser:
      return {
        ...state,
        isUser: payload,
      };
    case types.setAdmin:
      return {
        ...state,
        isAdmin: payload,
      };
    case types.setPropertyName:
      return {
        ...state,
        property: { ...state.property, propertyName: payload },
      };
    case types.setPropertyAddress:
      return {
        ...state,
        property: { ...state.property, propertyAddress: payload },
      };
    case types.setPropertyPrice:
      return {
        ...state,
        property: { ...state.property, propertyPrice: payload },
      };
    case types.setNumberOfBedrooms:
      return {
        ...state,
        property: { ...state.property, numberOfBedroom: payload },
      };
    case types.setNumberOfBathrooms:
      return {
        ...state,
        property: { ...state.property, numberOfBathroom: payload },
      };
    case types.setNumberOfLivingrooms:
      return {
        ...state,
        property: { ...state.property, numberOfLivingroom: payload },
      };
    case types.setAvailableDate:
      return {
        ...state,
        property: { ...state.property, availableDate: payload },
      };
    case types.setBookNowURL:
      return {
        ...state,
        property: { ...state.property, bookNowUrl: payload },
      };
    case types.setAllPropertyDetails:
      return {
        ...state,
        property: { ...payload },
      };
    default:
      return state;
  }
};
