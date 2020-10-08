import axios from "axios";

const BASE_URL = process.env.REACT_APP_BaseUrl;

const getProperties = async () => {
  console.log("url", `${BASE_URL}/properties`);
  const url = `${BASE_URL}/properties`;
  const properties = await axios.get(url);
  const { data } = properties;
  if (data.status === 404 || data.status === 403 || data.status === 500) {
    throw Error("processingError");
  }
  return data;
};

const updateProperty = async (payload) => {
  console.log("url", `${BASE_URL}/updateproperty`);
  const url = `${BASE_URL}/updateproperty`;
  const properties = await axios.put(url, JSON.stringify(payload), {
    headers: { "Content-Type": "application/json" },
  });
  const { data } = properties;
  if (data.status === 404 || data.status === 403 || data.status === 500) {
    throw Error("processingError");
  }
  return data;
};

export { getProperties, updateProperty };
