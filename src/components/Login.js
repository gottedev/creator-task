import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "recompose";
import { setAdmin, setUser, setLogin } from "../actions";
import Card from "./Card";
import CardItem from "./CardItem";
import Button from "./Button";

function Login({ className, handleAdmin, handleUser, handleLogin }) {
  return (
    <div className={className}>
      <Card className="login-container">
        <CardItem>
          <Button
            value="User Login"
            className="primary-btn"
            clickHandler={() => {
              handleLogin(true);
              handleUser(true);
            }}
          />
        </CardItem>
        <CardItem>
          <Button
            value="Admin Login"
            className="primary-btn"
            clickHandler={() => {
              handleLogin(true);
              handleAdmin(true);
            }}
          />
        </CardItem>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => ({
  propertiesData: state.reducer,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      handleAdmin: setAdmin,
      handleUser: setUser,
      handleLogin: setLogin,
    },
    dispatch
  );

export default compose(connect(mapStateToProps, mapDispatchToProps))(Login);
