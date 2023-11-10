import styled from "styled-components";

export const ContainerTask = styled.div`
  padding: 1rem;
  width: 100%;
  background-color: var(--background);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Text = styled.p`
  color: var(--text);
  width: 80%;
  word-break: break-all;

  ${(props) => {
    if (props.$check) {
      return `
        text-decoration: line-through;`;
    }
  }}
`;

export const ContainerActions = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
`;

export const IconButton = styled.button`
  border: "none";
  background: "transparent";
  cursor: "pointer";
`;
