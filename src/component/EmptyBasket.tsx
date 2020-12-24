import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

const EmptyBasket = () => {
  return (
    <div className="ShoppingBasket">
      <div className="empty_cart">
        <Alert className="" severity="info">
          <AlertTitle>Empty Cart</AlertTitle>
          Select any product to check cart —{" "}
          <strong>Go and check it out!</strong>
        </Alert>
      </div>
    </div>
  );
};

export default EmptyBasket;
