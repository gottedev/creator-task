import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PRODURL
    : process.env.REACT_APP_BaseUrl;

console.log(process.env.NODE_ENV, "env check");

const getProperties = async () => {
  const url = `${BASE_URL}/properties`;
  const properties = await axios.get(url);
  const { data } = properties;
  if (data.status === 404 || data.status === 403 || data.status === 500) {
    throw Error("processingError");
  }
  return data;
};

const updateProperty = async (payload) => {
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
