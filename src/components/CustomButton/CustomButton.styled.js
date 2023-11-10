import styled from "styled-components";

export const ButtonStyled = styled.button`
  height: fit-content;
  background-color: var(--action);
  color: var(--text);
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--action-hover);
  }

  &:active {
    background-color: var(--action-pressed);
  }
`;
