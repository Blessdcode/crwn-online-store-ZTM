import { useState } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
  NotificationContainer,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  // const { addItemToCart } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const [message, setMessage] = useState(false);

  const handleAddToCart = () => {
    setMessage(`Item has been added to cart!!`);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
    handleAddToCart();
  };

  return (
    <ProductCartContainer ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}>
        Add to cart
      </Button>
      {message && <NotificationContainer>{message}</NotificationContainer>}
    </ProductCartContainer>
  );
};

export default ProductCard;
