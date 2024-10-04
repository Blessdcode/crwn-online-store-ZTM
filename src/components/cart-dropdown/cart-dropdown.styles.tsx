import styled from "styled-components";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 370px;
  height: 440px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
    ${InvertedButton} {
    margin-top: 10px;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: fit-content;
    right: 0;
  }
`;

export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
  @media (max-width: 600px) {
    margin-top: 25px;
  }
`;

export const CartItems = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: white;
  }
`;
