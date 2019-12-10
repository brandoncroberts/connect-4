import styled from "styled-components";

export const ScoreboardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 7em);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
`;

export const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const ScoreValue = styled.h2`
  display: flex;
  justify-content: center;
  align-self: center;
`;
