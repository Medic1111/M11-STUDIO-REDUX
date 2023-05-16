import React from "react";
import { Slide } from "react-awesome-reveal";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFull from "../CheckoutFull/CheckoutFull";
import useAutoLogout from "../../hooks/UseAutoLogout";

const stripePromise = loadStripe(`${import.meta.env.VITE_PUBLIC_KEY}`);

const Checkout = () => {
  useAutoLogout();

  return (
    <Elements stripe={stripePromise}>
      <Slide direction="up">
        <CheckoutFull />
      </Slide>
    </Elements>
  );
};

export default Checkout;
