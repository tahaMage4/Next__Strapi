import CheckOut from "@components/CheckOut";
import Container from "@components/Container";
import React from "react";

const checkout = ({ cart }) => {
  return (
    <Container>
      <CheckOut cart={cart} />
    </Container>
  );
};

export default checkout;
