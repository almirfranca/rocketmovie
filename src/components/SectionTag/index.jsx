import { Container } from "./styles";
// import { NewTag } from "../../components/NewTag";

// import { useState } from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
export function SectionTag({ isNew, value, onClick, ...rest }) {
  // const [tags, setTags] = useState([]);
  // const [newTag, setNewtag] = useState("");

  // function handleAddTag() {
  //   setTags((prevTags) => [...prevTags, newTag]);
  //   setNewtag("");
  // }

  // function handleRemoveTag(tagDeleted) {
  //   setTags((prevTags) => prevTags.filter((tag) => tag !== tagDeleted));
  // }

  return (
    <Container {...rest}>
      {/* <NewTag
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
      ))} */}
    </Container>
  );
}
