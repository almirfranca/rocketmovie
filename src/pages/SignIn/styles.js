import styled from "styled-components";
import backgroundImg from "../../assets/signIn.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  text-align: center;

  > h1 {
    font-size: 48px;
    font-weight: 800;

    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > p {
    font-size: 14px;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  > h2 {
    font-size: 24px;
    font-weight: 500;

    margin: 48px 0;
  }

  > a {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
