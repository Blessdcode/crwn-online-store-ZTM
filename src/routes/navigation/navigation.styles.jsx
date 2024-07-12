import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media (max-width: 600px) {
    height: 60px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    height: 65px;
    margin-bottom: 22px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media (max-width: 600px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 22px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 600px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media (max-width: 600px) {
    padding: 8px 10px;
  }

  @media (max-width: 768px) {
    padding: 9px 12px;
  }
`;
