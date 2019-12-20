import styled from "styled-components";

export const ScoreboardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 7em);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
`;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  grid-column: 1 /3;
`;

export const Title = styled.h3`
  color: #181818;
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const ScoreValue = styled.h2`
  color: #181818;
  display: flex;
  justify-content: center;
  align-self: center;
`;
