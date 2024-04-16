import styled from "styled-components";

export const Container = styled.div`
  margin-top: 8px;

  > svg {
    width: 20px;
    height: 20px;
  }

  .star {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }
`;
