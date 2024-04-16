import { Container, Profile, LogoMovie, Search } from "./styles";

// import { Input } from "../Input";
import { Link } from "react-router-dom";
import avatarImg from "../../assets/avatarImg.png";

// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

// eslint-disable-next-line react/prop-types
export function Header({ children }) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarImg;

  return (
    <Container>
      <LogoMovie>RocketMovies</LogoMovie>

      <Search>{children}</Search>

      <Profile>
        <div>
          <Link to="/profile">{user.name}</Link>
          <button type="button" onClick={handleSignOut}>
            Sair
          </button>
        </div>

        <img src={avatarURL} alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
