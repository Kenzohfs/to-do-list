import React, { useState } from "react";

import { InputStyled } from "./Input.styled";

const Input = ({
  placeholder = "Digite aqui",
  text = "",
  onChange = () => {},
}) => {
  const [value, setValue] = useState(text);

  return (
    <InputStyled
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => {
        onChange(value);
        setValue("");
      }}
    />
  );
};

export default Input;
