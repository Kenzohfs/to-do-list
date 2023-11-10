import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
`;

export const ToDoListWrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(304px, 1fr));
  gap: 16px;
`;

export const ContainerActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  height: 40px;
`;
