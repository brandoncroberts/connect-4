import possibleDiagonalWins from "./possibleDiagonals";

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
  for (let i = 0; i < possibleDiagonalWins.length; i += 1) {
    let count = 0;
    for (let j = 0; j < possibleDiagonalWins[i].length; j += 1) {
      if (slots[possibleDiagonalWins[i][j]].classList.contains(currentPlayer)) {
        count += 1;
        if (count === 4) return { winner: currentPlayer };
      }
    }
  }
};
