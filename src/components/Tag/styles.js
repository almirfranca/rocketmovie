import styled from "styled-components";

export const Container = styled.span`
  font-size: 14px;
  padding: 5px 14px;
  border-radius: 6px;
  margin-right: 6px;

  color: ${({ theme }) => theme.COLORS.GRAY};
  background-color: ${({ theme }) => theme.COLORS.BG_700};
`;
