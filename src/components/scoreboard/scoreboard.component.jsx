import React from "react";
import {
  ScoreboardWrapper,
  Board,
  Title,
  ScoreValue,
  Header
} from "./scoreboard.styles";

const Scoreboard = ({ players, scores }) => {
  return (
    <ScoreboardWrapper>
      <Board>
        <Header>Score</Header>
        <Title>{players.playerOne}</Title>
        <Title>{players.playerTwo}</Title>
        <ScoreValue>{scores.playerOne}</ScoreValue>
        <ScoreValue>{scores.playerTwo}</ScoreValue>
      </Board>
    </ScoreboardWrapper>
  );
};

export default Scoreboard;
