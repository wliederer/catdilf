import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

const stripeTestPromise = loadStripe(PUBLIC_KEY).catch((err) =>
  console.error(err)
);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;
