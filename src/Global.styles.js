import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Ubuntu", sans-serif;
  padding: 20px 40px;
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}

 ${'' /* @media (max-width: 768px) {
body {
    
    padding: 10px 15px;
  }
 } */}
`;
