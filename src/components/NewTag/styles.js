import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;

  padding: 8px;
  border-radius: 10px;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BG_700};

  border: ${({ theme, isNew }) =>
    isNew ? ` 1px dashed ${theme.COLORS.BG_700}` : "none"};

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > input {
    height: 28px;
    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
    }
  }
`;
