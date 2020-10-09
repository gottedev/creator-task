import * as types from "./types";

import { getProperties, updateProperty } from "./api";

export const setLogin = (status) => (dispatch) => {
  dispatch({ type: types.setLogin, payload: status });
};

export const setAdmin = (status) => (dispatch) => {
  dispatch({ type: types.setAdmin, payload: status });
};

export const setError = (status) => (dispatch) => {
  dispatch({ type: types.setAdmin, payload: status });
};

export const setLoading = (status) => (dispatch) => {
  dispatch({ type: types.setLoading, payload: status });
};

export const setUser = (status) => (dispatch) => {
  dispatch({ type: types.setUser, payload: status });
};

export const toggleModal = (status) => (dispatch) => {
  dispatch({ type: types.toggleModal, payload: status });
};

export const setPropertyName = (value) => (dispatch) => {
  dispatch({ type: types.setPropertyName, payload: value });
};

export const setPropertyAddress = (value) => (dispatch) => {
  dispatch({ type: types.setPropertyAddress, payload: value });
};

export const setAvailableDate = (value) => (dispatch) => {
  dispatch({ type: types.setAvailableDate, payload: value });
};

export const setBookNowUrl = (value) => (dispatch) => {
  dispatch({ type: types.setBookNowURL, payload: value });
};

export const setNumberOfBathrooms = (value) => (dispatch) => {
  dispatch({ type: types.setNumberOfBathrooms, payload: value });
};

export const setNumberOfBedrooms = (value) => (dispatch) => {
  dispatch({ type: types.setNumberOfBedrooms, payload: value });
};

export const setNumberOfLivingrooms = (value) => (dispatch) => {
  dispatch({ type: types.setNumberOfLivingrooms, payload: value });
};

export const setPropertyPrice = (value) => (dispatch) => {
  dispatch({ type: types.setPropertyPrice, payload: value });
};

export const setUniquePropertyId = (value) => (dispatch) => {
  dispatch({ type: types.setUniquePropertyId, payload: value });
};

export const setAllPropertyDetails = (value) => (dispatch) => {
  dispatch({ type: types.setAllPropertyDetails, payload: value });
};

export const setProperties = () => (dispatch) => {
  setLoading(true)(dispatch);
  const onSuccess = (data) => {
    dispatch({ type: types.setData, payload: data });
    setLoading(false)(dispatch);
  };

  const onError = () => {
    setError(true)(dispatch);
    setLoading(false)(dispatch);
  };

  getProperties().then(onSuccess).catch(onError);
};

export const setUpdatedProperty = (values) => (dispatch) => {
  setLoading(true)(dispatch);
  const onSuccess = (data) => {
    dispatch({ type: types.updateData, payload: data });
    setLoading(false)(dispatch);
  };

  const onError = () => {
    setError(true)(dispatch);
    setLoading(false)(dispatch);
  };

  updateProperty(values).then(onSuccess).catch(onError);
};
