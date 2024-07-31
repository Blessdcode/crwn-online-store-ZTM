import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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
    width: 100%;
  }
`;
