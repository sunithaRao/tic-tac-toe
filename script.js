let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerX, playerO

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked.");
    if (turnO) {
      //PlayerO
      box.innerText = "O";
      box.classList.add("redO");
      box.classList.remove("greenX");

      turnO = false;
    } else {
      //PlayerX
      box.innerText = "X";
      box.classList.add("greenX");
      box.classList.remove("redO");
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 !== "" && posVal2 !== "" && posVal3 !== "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        console.log("Winner", posVal1);
        showWinner(posVal1);
      }
    }
  }
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
