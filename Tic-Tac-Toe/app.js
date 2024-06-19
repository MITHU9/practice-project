let boxes = document.querySelectorAll(".box");
let gameContainer = document.querySelector(".container");
let resetBtn = document.querySelector(".resetBtn");
let newGameBtn = document.querySelector("#newBtn");
let msg = document.querySelector(".msg");
let msgBox = document.querySelector(".msg-container");

let turnO = true;
let counter = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgBox.classList.add("hide");
  counter = 0;
};

const newGame = () => {
  turnO = true;
  counter = 0;
  enableBoxes();
  msgBox.classList.add("hide");
  gameContainer.classList.remove("hide");
  resetBtn.classList.remove("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "red";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "black";
      turnO = true;
    }
    counter++;
    box.disabled = "true";
    checkWinner();
  });
});
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

let showWinner = (winner) => {
  if (winner === "O" || winner === "X") {
    msg.innerText = `Congratulation! Winner is ${winner}..`;
  } else {
    msg.innerText = "Game Draw! Try Again..";
  }
  msgBox.classList.remove("hide");
  gameContainer.classList.add("hide");
  resetBtn.classList.add("hide");
  disableBoxes();
};
const checkWinner = () => {
  let winnerFound = false;

  for (let pattern of winPatterns) {
    let box1Val = boxes[pattern[0]].innerText;
    let box2Val = boxes[pattern[1]].innerText;
    let box3Val = boxes[pattern[2]].innerText;

    if (box1Val != "" && box2Val != "" && box3Val != "") {
      if (box1Val === box2Val && box2Val === box3Val) {
        showWinner(box1Val);
        winnerFound = true;
        break;
      }
    }
  }
  if (counter === 9 && !winnerFound) {
    showWinner(9);
  }
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", newGame);
