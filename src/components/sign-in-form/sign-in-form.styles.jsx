import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
    @media (max-width: 600px) {
      font-size: 20px;
    }
  }

  span {
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
  @media (max-width: 600px) {
    width: fit-content;
    /* overflow: hidden; */
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
   flex-direction: column;
   gap: 15px;
  }
`;
