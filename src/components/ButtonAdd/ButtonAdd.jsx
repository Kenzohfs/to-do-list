import React from "react";

import Add from "../../assets/add.png";

import { ButtonAddStyled } from "./ButtonAdd.styled.js";

const ButtonAdd = ({ onClick = () => {} }) => {
  return (
    <ButtonAddStyled onClick={onClick}>
      <img src={Add} alt="Add" />
    </ButtonAddStyled>
  );
};

export default ButtonAdd;
