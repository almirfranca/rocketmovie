import { TiArrowLeft } from "react-icons/ti";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { SectionTag } from "../../components/SectionTag";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

export function NewMovie() {
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
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações..." />

          <Section title="Marcadores">
            <SectionTag />
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
