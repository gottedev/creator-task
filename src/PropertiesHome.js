import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "recompose";
import { WithAuth, WithLoader } from "./assets/hocs";
import { Properties } from "./components";
import { setProperties } from "./actions";
import "./app.scss";

const PropertiesHome = ({ getPropertiesData }) => {
  useEffect(() => {
    getPropertiesData();
  }, []);
  return (
    <div className="App">
      <Properties />
    </div>
  );
};

const mapStateToProps = (state) => ({
  propertiesData: state.reducer,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getPropertiesData: () => setProperties(),
    },
    dispatch
  );

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuth
)(PropertiesHome);
