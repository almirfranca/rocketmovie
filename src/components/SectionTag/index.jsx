import { Container } from "./styles";
import { NewTag } from "../../components/NewTag";

// eslint-disable-next-line react/prop-types, no-unused-vars
export function SectionTag({ isNew, value, onClick, ...rest }) {
  return (
    <Container {...rest}>
      <NewTag placeholder="Nova tag" isNew />
      <NewTag value="Familia" />
    </Container>
  );
}
