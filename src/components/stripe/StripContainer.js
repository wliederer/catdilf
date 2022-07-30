import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY =
  "pk_test_51LQsoeJeMlmSQr0k9s4j3sykUsAv4hlSjW2B1191eUXjraZSBjLW6mydciYp0oTvEpnzIAMvOhmcLrEiuEFxh8wu00NsYLlouJ";

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
