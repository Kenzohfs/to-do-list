import styled from "styled-components";

export const ContainerListWrapper = styled.div`
  height: fit-content;
  width: 100%;
  padding: 1rem;
  background-color: var(--background-contrast);
  border-radius: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--text);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
`;
