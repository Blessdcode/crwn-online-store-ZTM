import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector";
import { clearCart } from "../../store/cart/cart.action";


import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const dispatch = useDispatch()

  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const handleClearCart = ()=>{
    dispatch(clearCart())
  }

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      <Button onClick={handleClearCart}>CLEAR CART</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
