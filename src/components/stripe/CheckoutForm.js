import React, { useState, useRef } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "./index.css";
import emailjs from "@emailjs/browser";

const API_URL = process.env.REACT_APP_API_URL;
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_ADDRESS_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

export const CheckoutForm = () => {
  const form = useRef();

  const stripe = useStripe();
  const elements = useElements();
  const [response, setResponse] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        setResponse("Success");
        form.current.reset();
      },
      (error) => {
        setResponse(error.text);
      }
    );
  };

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
          sendEmail(event);
          console.log("CheckoutForm.js 25 | payment successful!");
          setResponse("payment successful!");
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
        ref={form}
        id="stripeform"
        key={2}
        onSubmit={handleSubmit}
        style={{ maxWidth: 400 }}
      >
        <div className="address">
          <label>Address Line #1</label>
          <input type="text" id="address1" name="address1"></input>
          <label>Address Line #2</label>
          <input type="text" id="address2" name="address2"></input>
          <label>City</label>
          <input
            type="text"
            id="city"
            name="city"
            style={{ width: "150px" }}
          ></input>
          <label>State</label>
          <input
            type="text"
            id="state"
            name="state"
            style={{ width: "80px" }}
          ></input>
          <label>Zip Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            style={{ width: "80px" }}
          ></input>
        </div>

        <CardElement />
        <button>Pay</button>
      </form>
      <div key={3}>{response}</div>
    </div>
  );
};
