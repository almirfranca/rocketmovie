import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BG_700};

  display: flex;
  align-items: center;

  justify-content: space-between;
  gap: 26px;

  padding: 0 60px;
`;

export const LogoMovie = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.ROSE};

  display: flex;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-right: 12px;
    /* line-height: 24px; */

    a {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};

      &:hover {
        color: ${({ theme }) => theme.COLORS.ROSE};
      }
    }

    button {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY};
      background: none;
      border: none;

      &:hover {
        border-radius: 4px;
        background-color: ${({ theme }) => theme.COLORS.BG_700};

        scale: 1.1;
      }
      transition: scale 0.2s;
    }
  }
`;

export const Search = styled.div`
  width: 100%;
  max-width: 800px;
`;
