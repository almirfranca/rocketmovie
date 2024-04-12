import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BG_MARKS};

  gap: 8px;

  width: 100%;
  min-height: 56px;
  padding: 8px;

  border-radius: 10px;
`;
