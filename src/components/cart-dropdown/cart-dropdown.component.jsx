import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";



import {CartDropdownContainer, cartItems, EmptyMessage} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const clearItemHandler = () => clearCart();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <cartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </cartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      <Button onClick={clearItemHandler}>CLEAR CART</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
