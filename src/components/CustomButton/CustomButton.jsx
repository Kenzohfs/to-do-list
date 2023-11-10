import React from "react";

import { ButtonStyled } from "./CustomButton.styled.js";

const CustomButton = ({ children, onClick }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

export default CustomButton;
