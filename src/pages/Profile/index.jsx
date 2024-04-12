import { Container, Form, Avatar } from "./styles";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {
  TiArrowLeft,
  TiUser,
  TiMail,
  TiLockClosed,
  TiCamera,
} from "react-icons/ti";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <TiArrowLeft size={24} />
          Voltar
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="http://github.com/almirfranca.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <TiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={TiUser} />
        <Input placeholder="E-mail" type="text" icon={TiMail} />
        <Input placeholder="Senha atual" type="password" icon={TiLockClosed} />
        <Input placeholder="Nova senha" type="password" icon={TiLockClosed} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
