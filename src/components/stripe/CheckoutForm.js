import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "./index.css";

const API_URL = process.env.REACT_APP_API_URL;

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [response, setResponse] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      //send token to backend here
      try {
        const { id } = paymentMethod;
        const response = await axios.post(`${API_URL}/stripe/charge`, {
          amount: 530,
          id: id,
        });

        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          setResponse(response.data.message);
          elements.getElement(CardElement).clear();
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
        setResponse(response.data.message);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div className="checkout" key={1}>
      <div>$5.30 for 6 random stickers</div>
      <form
        id="stripeform"
        key={2}
        onSubmit={handleSubmit}
        style={{ maxWidth: 400 }}
      >
        <CardElement />
        <button>Pay</button>
      </form>
      <div key={3}>{response}</div>
    </div>
  );
};
