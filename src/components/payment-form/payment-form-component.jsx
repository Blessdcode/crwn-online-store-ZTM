import { useState, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { UserContext } from "../../contexts/user.context";
import { clearCart } from "../../store/cart/cart.action";

// import { userContext } from "../../contexts/user.context";

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
  EmptyMessage,
} from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  const { currentUser } = useContext(UserContext);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const dispatch = useDispatch();

   if (!currentUser) return null;
  const displayName = currentUser.displayName;

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
        dispatch(clearCart());
      }
    }
  };
  return (
    <PaymentFormContainer>
      {cartItems.length ? (
        <FormContainer onSubmit={paymentHandler}>
          <h2>Credit Card Payment:</h2>
          <CardElement />
          <PaymentButton
            isLoading={isProcessingPayment}
            buttonType={BUTTON_TYPE_CLASSES.inverted}>
            Pay Now
          </PaymentButton>
        </FormContainer>
      ) : (
        <>
          <EmptyMessage>Your Cart is Empty {displayName}</EmptyMessage>
          
        </>
      )}
    </PaymentFormContainer>
  );
};

export default PaymentForm;
