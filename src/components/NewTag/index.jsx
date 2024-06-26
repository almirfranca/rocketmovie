import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

// eslint-disable-next-line react/prop-types, no-unused-vars
export function NewTag({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
