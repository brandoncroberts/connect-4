import React from "react";
import { ScoreboardWrapper, Title, ScoreValue } from "./scoreboard.styles";

const Scoreboard = ({ players, scores }) => {
  return (
    <ScoreboardWrapper>
      <Title>{players.playerOne}</Title>
      <Title>{players.playerTwo}</Title>
      <ScoreValue>{scores.playerOne}</ScoreValue>
      <ScoreValue>{scores.playerTwo}</ScoreValue>
    </ScoreboardWrapper>
  );
};

export default Scoreboard;
