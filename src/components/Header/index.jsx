import { Container, Profile, LogoMovie, Search } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <LogoMovie>RocketMovies</LogoMovie>

      <Search>
        <Input placeholder="Pesquisar pelo titúlo" />
      </Search>

      <Profile>
        <div>
          <Link to="/profile">Almir França</Link>
          <button type="button">Sair</button>
        </div>

        <img src="http://github.com/almirfranca.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
