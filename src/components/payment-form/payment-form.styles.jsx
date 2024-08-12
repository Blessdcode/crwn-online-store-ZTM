import styled from "styled-components";

import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;


export const EmptyMessage = styled.div`
  font-size: 28px;
  font-weight: 500;
  margin-bottom:16px;
  @media (max-width: 600px) {
    margin-top: 25px;
  }
`;


export const SignInPrompt = styled.span`
  font-size: 18px;
  margin: 20px auto;
  color: red;  
`;