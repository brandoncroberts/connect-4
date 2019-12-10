import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import CurrentPlayer from "./components/current-player/currentPlayer.component";
import Board from "./components/board/board.component";
import ScoreBoard from "./components/scoreboard/scoreboard.component";
import CustomButton from "./components/custom-button/customButton.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      players: {
        playerOne: "Player 1",
        playerTwo: "Player 2"
      },
      scores: {
        playerOne: "0",
        playerTwo: "0"
      },
      currentPlayer: "playerOne"
    };
  }

  switchPlayer = () => {
    if (this.state.currentPlayer === "playerOne") {
      this.setState({ currentPlayer: "playerTwo" });
    } else {
      this.setState({ currentPlayer: "playerOne" });
    }
  };

  addClassToSlot = e => {
    const slotsInCol = e.currentTarget.children;
    let i;
    for (i = 5; i >= 0; i -= 1) {
      if (
        !slotsInCol[i].classList.contains("playerOne") &&
        !slotsInCol[i].classList.contains("playerTwo")
      ) {
        slotsInCol[i].classList.add(this.state.currentPlayer);
        break;
      }
    }
  };

  addColumnEventListeners = arrayOfColumns => {
    arrayOfColumns.forEach(column =>
      column.addEventListener("click", e => {
        this.addClassToSlot(e);
        this.switchPlayer();
      })
    );
  };

  newGame = () => {
    const columns = document.querySelectorAll(".column");
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
