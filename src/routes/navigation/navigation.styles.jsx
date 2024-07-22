import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
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
    width: 50px;
  }
  
  @media (max-width: 768px) {
    /* margin-left: 50px; */
    padding-left: 0;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-start;
    margin-left: 50px;
    /* flex-direction: column; */
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 0 10px;
  }

 
`;
