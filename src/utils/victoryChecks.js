import diags from "./possibleDiagonals";

export const linearVictoryCheck = (slotsInColumn, index, currentPlayer) => {
  let count = 0;
  for (let i = 0; i < slotsInColumn.length; i++) {
    const columnSlot = slotsInColumn[i];
    if (columnSlot.classList.contains(currentPlayer)) {
      count += 1;
      if (count === 4) return { winner: currentPlayer };
    } else {
      count = 0;
    }
  }

  const slotsInRow = document.querySelectorAll(`.row${index}`);
  count = 0;

  for (let i = 0; i < slotsInRow.length; i++) {
    const rowSlot = slotsInRow[i];
    if (rowSlot.classList.contains(currentPlayer)) {
      count += 1;
      if (count === 4) return { winner: currentPlayer };
    } else {
      count = 0;
    }
  }
};

export const diagonalVictoryCheck = currentPlayer => {
  const slots = document.querySelectorAll(".slots");

  for (let v = 0; v < diags.length; v += 1) {
    let diagonalCounter = 0;
    for (let q = 0; q < diags[v].length; q += 1) {
      if (slots[diags[v][q]].classList.contains(currentPlayer)) {
        diagonalCounter += 1;
        if (diagonalCounter === 4) {
          if (currentPlayer === "playerOne") {
            return "player one wins";
          } else if (currentPlayer === "playerTwo") {
            return "player two wins";
          }
        }
      }
    }
  }
};
