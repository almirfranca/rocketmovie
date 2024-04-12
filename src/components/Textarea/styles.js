import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  font-family: "Roboto Slab", serif;
  font-size: 16px;

  background-color: ${({ theme }) => theme.COLORS.BG_700};
  color: ${({ theme }) => theme.COLORS.GRAY};

  border: none;
  resize: none;

  margin-bottom: 8px;
  margin-top: 20px;
  border-radius: 10px;
  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
`;
