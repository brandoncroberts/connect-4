import React from "react";
import { Wrapper, Title } from "./currentPlayer.styles";

const CurrentPlayer = ({ currentPlayer }) => {
  return (
    <Wrapper className="current-player">
      <Title>{currentPlayer}'s turn</Title>
    </Wrapper>
  );
};

export default CurrentPlayer;
