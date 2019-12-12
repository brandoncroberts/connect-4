import React from "react";
import { Wrapper, Title } from "./currentPlayer.styles";

const CurrentPlayer = ({ currentPlayer }) => {
  return (
    <Wrapper className="current-player">
      <Title>Current Player:</Title>
      <Title>{currentPlayer}</Title>
    </Wrapper>
  );
};

export default CurrentPlayer;
