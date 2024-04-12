import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  max-width: 800px;
  margin: 38px auto;

  padding: 6px;

  > header {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 36px;

    a {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.ROSE};
      font-size: 16px;

      svg {
        margin-right: 8px;
      }
    }

    h1 {
      font-size: 36px;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > div {
    display: flex;
    gap: 30px;
  }
`;
