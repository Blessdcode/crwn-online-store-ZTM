import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/test.utils";
import CartIcon from "../cart-icon.component";

describe("Cart Icon test", () => {
  test("Use preloaded state to render", () => {
    const initialCartItems = [
      { id: 1, name: "Item A", imageUrl: "test", price: 10, quantity: 0 },
    ];

    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          CartItems: initialCartItems,
        },
      },
    });

    const cartIconElement = screen.getByText("1");
    expect(cartIconElement).toBeInTheDocument();
  });
});
