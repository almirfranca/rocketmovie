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
    overflow-y: scroll;
    padding: 64px 10px;
  }
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: start;

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 24px;
  }

  .arrayStars {
    margin-top: 8px;

    > svg {
      width: 24px;
      height: 24px;
    }
  }

  .star {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  .userCreated {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 24px;
    margin-bottom: -20px;

    color: ${({ theme }) => theme.COLORS.GRAY};

    > span {
      display: flex;
      align-items: center;
      gap: 8px;

      > img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }
    }

    .clock {
      color: ${({ theme }) => theme.COLORS.ROSE};
    }
  }

  > p {
    font-size: 16px;
    text-align: justify;
    margin-bottom: 16px;
  }
`;
