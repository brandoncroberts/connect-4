import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import CurrentPlayer from "./components/current-player/currentPlayer.component";
import Board from "./components/board/board.component";
import ScoreBoard from "./components/scoreboard/scoreboard.component";
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
      currentPlayer: "playerOne",
      startingPlayer: "",
      lastMove: [],
      gameInProgress: false
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
        this.setState({
          lastMove: [
            ...this.state.lastMove,
            { slot: slotsInColumn[i], player: this.state.currentPlayer }
          ]
        });

        const linearVictoryCheckResult = linearVictoryCheck(
          slotsInColumn,
          i,
          this.state.currentPlayer
        );

        const diagonalVictoryCheckResult = diagonalVictoryCheck(
          this.state.currentPlayer
        );

        if (linearVictoryCheckResult) {
          alert(`${linearVictoryCheckResult.winner} wins`);
          this.incrementWinnerScore(linearVictoryCheckResult.winner);
          this.onVictory();
        }

        if (diagonalVictoryCheckResult) {
          alert(`${diagonalVictoryCheckResult.winner} wins`);
          this.incrementWinnerScore(diagonalVictoryCheckResult.winner);
          this.onVictory();
        }

        break;
      }
    }
  };

  onVictory = () => {
    const columns = document.querySelectorAll(".column");
    this.setState({ lastMove: [] });
    this.setState({ gameInProgress: false });
    this.removeColumnEventListeners(columns);
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

  undoLastMove = () => {
    const lastMove = this.state.lastMove.pop();
    if (lastMove) {
      this.setState({ currentPlayer: lastMove.player }, () => {
        lastMove.slot.classList.remove(this.state.currentPlayer);
      });
    }
  };

  disableUndoButtonCheck = () => {
    if (this.state.lastMove.length === 0) return "disabled";
    if (this.state.gameInProgress === false) return "disabled";
  };

  toggleStartingPlayer = () => {
    const nextStartingPlayer =
      this.state.startingPlayer === "playerOne" ? "playerTwo" : "playerOne";

    this.setState({ startingPlayer: nextStartingPlayer });
    this.setState({ currentPlayer: nextStartingPlayer });
  };

  newGame = () => {
    const columns = document.querySelectorAll(".column");
    this.setState({ gameInProgress: true });
    this.removeClassesFromSlots();
    this.addColumnEventListeners(columns);
    this.toggleStartingPlayer();
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <CurrentPlayer
          currentPlayer={this.state.players[this.state.currentPlayer]}
        />

        <div className="main-grid">
          <div className="buttons-container">
            <button className="custom-button" onClick={this.newGame}>
              New Game
            </button>
            <button
              className="custom-button"
              onClick={this.undoLastMove}
              disabled={this.disableUndoButtonCheck()}
            >
              Undo
            </button>
          </div>
          <Board />
          <ScoreBoard players={this.state.players} scores={this.state.scores} />
        </div>
      </div>
    );
  }
}

export default App;
