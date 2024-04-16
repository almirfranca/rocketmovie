import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { SectionTag } from "../../components/SectionTag";
import { Button } from "../../components/Button";
import { NewTag } from "../../components/NewTag";

import { TiArrowLeft } from "react-icons/ti";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";

export function NewMovie() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewtag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevTags) => [...prevTags, newTag]);
    setNewtag("");
  }

  function handleRemoveTag(tagDeleted) {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagDeleted));
  }

  async function handleNewMovie() {
    if (!title) {
      return alert("Digite o título da nota.");
    }

    if (!rating) {
      return alert("De a sua nota de 0 a 5");
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou limpe o campo."
      );
    }

    await api.post("/movies", {
      title,
      description,
      rating,
      tags,
    });

    alert("Filme criado com sucesso.");
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              {" "}
              <TiArrowLeft />
              Voltar
            </Link>
            <h1>Novo filme</h1>
          </header>

          <div>
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <Textarea
            placeholder="Observações..."
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Marcadores">
            <SectionTag>
              <NewTag
                placeholder="Nova tag"
                isNew
                onChange={(e) => setNewtag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />

              {tags.map((tag, index) => (
                <NewTag
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
            </SectionTag>
          </Section>

          <Button title="Salvar" onClick={handleNewMovie} />
        </Form>
      </main>
    </Container>
  );
}
