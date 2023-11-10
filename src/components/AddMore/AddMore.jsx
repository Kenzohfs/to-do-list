import React from "react";

import { Container } from "./AddMore.styled.js";
import Input from "../Input/Input.jsx";
import ButtonAdd from "../ButtonAdd/ButtonAdd.jsx";

const AddMore = ({ onClick = () => {}, text = "", onChange = () => {} }) => {
  return (
    <Container>
      <Input onChange={onChange} text={text} placeholder="Digite aqui" />
      <ButtonAdd onClick={onClick} />
    </Container>
  );
};

export default AddMore;
