import { Container, Content, NewMovie } from "./styles";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { Section } from "../../components/Section";

import { FiPlus } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Input } from "../../components/Input";

export function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`);
      setMovies(response.data);
    }
    fetchMovies();
  }, [search]);

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquisar pelo titúlo"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>
      <Content>
        <div>
          <h1>Meus Filmes</h1>
          <NewMovie to="/new">
            <FiPlus />
            Adicionar Filme
          </NewMovie>
        </div>

        <Section>
          {movies.map((movie) => (
            <Movie
              key={String(movie.id)}
              data={movie}
              onClick={() => handleDetails(movie.id)}
            />
          ))}
        </Section>
      </Content>
    </Container>
  );
}
