let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".reset-btn")
let turnO = true;
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let count = 0;

const resetGame = () => {
    turnO = true;
    count = 0 ; 
    enableBoxes();
    msgContainer.classList.add("hide"); // after resetting the game we have to remove the text shown when the winner is declared
};

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

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false; //if this is not set to be false then the next chance will alse appear as O  
        } else {
            box.innerText = "X";
            turnO = true; // true is printed because we want that next value to be appear is X
        }
        box.disabled = true;  // this is applied so that the alphabets can not be changed once they have been entered
        count++; //It counts that how many boxes is filled
        let isWinner= checkWinner();
        console.log(isWinner);
        if(count === 9 && !isWinner){ // !is winner no winner or draw case
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true; // after winner declaration no one can press on the boxes
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false; // after winner declaration no one can press on the boxes
        box.innerText = ""; //Makes empty or It reset the game by removing all the text from the boxes
    }
}

const showWinner = (winner) => {
    msg.innerText = `"Congratulations" WINNER is ${winner}`;
    msgContainer.classList.remove("hide");
    //hide class aquire a property to hide Winner name so if we remove this class it restore its previous property and shows the winner name
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        //for checking the value in the boxes
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {  //for winning the value must not be empty eg. O O _   it must be like this O O O
            if (pos1Val === pos2Val && pos2Val === pos3Val) {  //let pos1= X pos2=X then pos1=pos2 and if pos2=pos3 it means pos3 also contain X
                console.log("WINNER IS", pos1Val) //we can write any pos values it will be same for all
                //display winner on the screen because it is hidden as we set earlier
                showWinner(pos1Val);//pos1 =>passing winner name as an argument
                return true;
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);
