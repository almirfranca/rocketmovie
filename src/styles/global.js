import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BG_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;

    ::-webkit-scrollbar {
      width: 10px;
      background: none;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.ROSE};    
      border-radius: 16px;      
    }
  }

  body, input, button, taxtarea {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }


`;
