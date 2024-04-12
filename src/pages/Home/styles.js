import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 60px;
  overflow-y: scroll;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 47px;

    > h1 {
      font-size: 32px;
      font-weight: 500;
    }
  }
`;

export const NewMovie = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.TEXT_GRAY};

  padding: 12px;
  font-size: 16px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-right: 6px;
  }
`;
