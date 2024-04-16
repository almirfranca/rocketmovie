/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { TiStarFullOutline } from "react-icons/ti";

const fivePositionArray = [1, 2, 3, 4, 5];

export function Rating({ data, ...rest }) {
  return (
    <Container {...rest}>
      {fivePositionArray.map((number) => {
        const shouldPaint = number <= data.rating;

        return (
          <TiStarFullOutline key={number} className={shouldPaint && "star"} />
        );
      })}
    </Container>
  );
}
