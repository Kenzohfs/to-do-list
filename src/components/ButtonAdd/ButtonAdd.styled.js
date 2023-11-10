import styled from "styled-components";

export const ButtonAddStyled = styled.button`
  display: grid;
  place-items: center;
  padding: 0.5rem;
  border: 0.15rem solid var(--green);
  border-radius: 0.3rem;
  background-color: transparent;
  color: var(--text);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: var(--green-hover);
    color: var(--background);
  }

  &:active {
    background-color: var(--green-pressed);
    color: var(--background);
  }
`;
