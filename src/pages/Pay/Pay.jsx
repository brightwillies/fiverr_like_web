import React, { useState, useEffect } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';

const stripePromise = loadStripe("pk_test_51PvTh3JnSNieiHDCuVKLIfOxTC8VUVHWCclBdhpQO75BEVWt3L3KV3J8mMRUOxPhKpmOtCqVc977sRLkODLnicwz00rOjRzVa1");

const Pay = () => {
    const [clientSecret, setClientSecret] = useState("");

    const { id } = useParams();
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await newRequest.post(`/orders/create-payment-intent/${id}`)
                setClientSecret(res.data.clientSecret);
            } catch (error) {
                console.log(error);
            }

        };
        makeRequest();
    }, []);

    const appearance = {
        theme: 'stripe',
      };

      const options = {
        clientSecret,
        appearance,
      };

    return (
        <div className="pay">
  {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm/>
        </Elements>
      )}
        </div>
    )
}

export default Pay
