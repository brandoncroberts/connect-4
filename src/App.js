import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import CurrentPlayer from "./components/current-player/currentPlayer.component";
import Board from "./components/board/board.component";
import ScoreBoard from "./components/scoreboard/scoreboard.component";
import CustomButton from "./components/custom-button/customButton.component";
import {
  diagonalVictoryCheck,
  linearVictoryCheck
} from "./utils/victoryChecks";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      players: {
        playerOne: "Player 1",
        playerTwo: "Player 2"
      },
      scores: {
        playerOne: 0,
        playerTwo: 0
      },
      currentPlayer: "playerOne"
    };
  }

  toggleCurrentPlayer = () => {
    if (this.state.currentPlayer === "playerOne") {
      this.setState({ currentPlayer: "playerTwo" });
    } else {
      this.setState({ currentPlayer: "playerOne" });
    }
  };

  addClassToSlot = e => {
    const slotsInColumn = e.currentTarget.children;
    let i;
    for (i = 5; i >= 0; i -= 1) {
      if (
        !slotsInColumn[i].classList.contains("playerOne") &&
        !slotsInColumn[i].classList.contains("playerTwo")
      ) {
        slotsInColumn[i].classList.add(this.state.currentPlayer);

        const linearVictoryCheckResult = linearVictoryCheck(
          slotsInColumn,
          i,
          this.state.currentPlayer
        );

        const diagonalVictoryCheckResult = diagonalVictoryCheck(
          this.state.currentPlayer
        );

        const columns = document.querySelectorAll(".column");

        if (linearVictoryCheckResult) {
          alert(`${linearVictoryCheckResult.winner} wins`);
          this.removeColumnEventListeners(columns);
          this.incrementWinnerScore(linearVictoryCheckResult.winner);
        }

        if (diagonalVictoryCheckResult) {
          alert(`${diagonalVictoryCheckResult.winner} wins`);
          this.removeColumnEventListeners(columns);
          this.incrementWinnerScore(diagonalVictoryCheckResult.winner);
        }

        break;
      }
    }
  };

  eventListenerFunctions = e => {
    this.addClassToSlot(e);
    this.toggleCurrentPlayer();
  };

  addColumnEventListeners = arrayOfColumns => {
    arrayOfColumns.forEach(column =>
      column.addEventListener("click", this.eventListenerFunctions)
    );
  };

  removeColumnEventListeners = arrayOfColumns => {
    arrayOfColumns.forEach(column =>
      column.removeEventListener("click", this.eventListenerFunctions)
    );
  };

  incrementWinnerScore = winner => {
    this.setState({
      scores: {
        ...this.state.scores,
        [winner]: this.state.scores[winner] + 1
      }
    });
  };

  removeClassesFromSlots = () => {
    const slots = document.querySelectorAll(".slots");
    slots.forEach(slot => slot.classList.remove("playerOne", "playerTwo"));
  };

  newGame = () => {
    const columns = document.querySelectorAll(".column");
    this.removeClassesFromSlots();
    this.addColumnEventListeners(columns);
  };

  render() {
    return (
      <div>
        <Header />
        <CurrentPlayer
          currentPlayer={this.state.players[this.state.currentPlayer]}
        />
        <Board />
        <button onClick={this.newGame}>New Game</button>
        <ScoreBoard players={this.state.players} scores={this.state.scores} />
        <CustomButton title={"undo"} />
      </div>
    );
  }
}

export default App;
