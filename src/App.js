import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header.component";
import CurrentPlayer from "./components/current-player/currentPlayer.component";
import Board from "./components/board/board.component";
import ScoreBoard from "./components/scoreboard/scoreboard.component";
import CustomButton from "./components/custom-button/customButton.component";

function App() {
  const [players, setPlayers] = useState({
    playerOne: "Player 1",
    playerTwo: "Player 2"
  });

  const [scores, setScores] = useState({
    playerOne: "0",
    playerTwo: "0"
  });

  const [currentPlayer, setCurrentPlayer] = useState(players.playerOne);

  return (
    <div>
      <Header />
      <CurrentPlayer currentPlayer={currentPlayer} />
      <Board />
      <ScoreBoard players={players} scores={scores} />
      <CustomButton title={"undo"} />
    </div>
  );
}

export default App;
