import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BG_700};
  color: ${({ theme }) => theme.COLORS.TEXT_GRAY};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.GRAY};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }

  > svg {
    margin-left: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
`;
