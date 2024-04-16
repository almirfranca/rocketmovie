import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: start;

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BG_ROSE_OPACITY};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > span {
    display: flex;
    overflow: hidden;

    max-height: 38px;
    margin-top: 15px;

    font-size: 14px;
    text-align: left;
    font-weight: 200;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  .arrayStars {
    margin-top: 8px;

    > svg {
      width: 20px;
      height: 20px;
    }
  }

  .star {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 20px;
  }
`;
