import { Container, Content, NewMovie } from "./styles";
import { FiPlus } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { Section } from "../../components/Section";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <div>
          <h1>Meus Filmes</h1>
          <NewMovie to="/new">
            <FiPlus />
            Adicionar Filme
          </NewMovie>
        </div>

        <Section>
          <Movie
            data={{
              title: "Interestellar",
              tags: [
                { id: "1", name: "Familia" },
                { id: "2", name: "Drama" },
              ],
            }}
          />
          <Movie
            data={{
              title: "Interestellar",
              tags: [
                { id: "1", name: "Familia" },
                { id: "2", name: "Drama" },
              ],
            }}
          />
          <Movie
            data={{
              title: "Interestellar",
              tags: [
                { id: "1", name: "Familia" },
                { id: "2", name: "Drama" },
              ],
            }}
          />
        </Section>
      </Content>
    </Container>
  );
}
