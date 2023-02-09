import classes from "./CheckoutForm.module.css";
import { cardStyle } from "../../assets/card-style";
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../features/ui-slice";
import { authActions } from "../../features/auth-slice";
import { useCheckoutMutation } from "../../features/api-slice";

const CheckoutForm = ({ setShowConfirm }) => {
  const stripe = useStripe();
  const elements = useElements();
  const cart = useSelector((state) => state.auth.currentUser.cart);
  const userId = useSelector((state) => state.auth.currentUser._id);
  const dispatch = useDispatch();
  const [checkout] = useCheckoutMutation();
  const [err, setErr] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (elements == null) return;
    dispatch(uiActions.setIsLoading(true));

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      let args = {
        userId,
        id: paymentMethod.id,
        amount: cart.reduce((acc, obj) => {
          {
            return acc + obj.item.price * obj.quantity;
          }
        }, 0),
        cart,
      };

      let transaction = await checkout(args);

      if (transaction.error) {
        dispatch(uiActions.setIsLoading(false));
        return setErr(true);
      }

      setShowConfirm(true);
      dispatch(authActions.setCurrentUser(transaction.data));
      dispatch(uiActions.setIsLoading(false));
    }
  };
  return (
    <div className={classes.formBox}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <p className={classes.title}>Checkout</p>
        <CardElement options={cardStyle} />
        <input
          className={classes.input}
          type={"text"}
          placeholder="Address"
          value="P. Sherman"
          readOnly
        />
        <input
          className={classes.input}
          type={"text"}
          placeholder="Address 2"
          value={"42 Wallaby Way"}
          readOnly
        />
        <input
          className={classes.input}
          type={"text"}
          placeholder="City"
          value="Sydney"
          readOnly
        />
        <input
          className={classes.input}
          type={"text"}
          placeholder="Zip"
          value="11111"
          readOnly
        />
        <div className={classes.btnBox}>
          <button
            className={classes.btn}
            type="submit"
            disabled={!stripe || !elements}
            onClick={(e) => {
              e.preventDefault();
              dispatch(uiActions.closeModal());
            }}
          >
            CANCEL
          </button>
          <button
            className={classes.btn}
            type="submit"
            disabled={!stripe || !elements}
          >
            PAY
          </button>
        </div>
        {err && <p>Something is wrong with your payment</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
