import React from "react";
import { Title } from "./currentPlayer.styles";

const CurrentPlayer = ({ currentPlayer }) => {
  return (
    <div>
      <Title>Current Player:</Title>
      <Title>{currentPlayer}</Title>
    </div>
  );
};

export default CurrentPlayer;
