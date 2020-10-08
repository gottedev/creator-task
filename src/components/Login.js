import React from "react";
import Card from "./Card";
import CardItem from "./CardItem";
import Button from "./Button";

function Login({ className, handleUser, handleAdmin }) {
  return (
    <div className={className}>
      <Card className="login-container">
        <CardItem>
          <Button
            value="User Login"
            className="primary-btn"
            clickHandler={handleUser}
          />
        </CardItem>
        <CardItem>
          <Button
            value="Admin Login"
            className="primary-btn"
            clickHandler={handleAdmin}
          />
        </CardItem>
      </Card>
    </div>
  );
}

export default Login;
