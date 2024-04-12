import { Container } from "./styles";
import { Tag } from "../Tag";

// eslint-disable-next-line no-unused-vars, react/prop-types
export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
