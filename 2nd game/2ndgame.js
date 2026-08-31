let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx]
};

const drawGame = () => {
    msg.innerText = "Game was Draw. play again.";
    msg.style.backgroundColor = "red"
}

const showWinner = (userWin, userchoice, compchoice) => {
    if(userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green"
    }else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lose ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black"
    }
}

const playGame = (userchoice) => {
//     //generate computer choice
    const compchoice = genCompChoice();

     if(userchoice === compchoice) {
//         //Draw game
        drawGame();
    } else {
       let userWin = true;
       if(userchoice === "rock") {
        // scissors, paper
        userWin = compchoice === "paper" ? false : true;
       }else if(userchoice === "paper") {
            userWin = compchoice === "scissors" ? false : true;
       }else {
        userWin = compchoice === "rock" ? false : true;
       }
       showWinner(userWin, userchoice, compchoice)
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playGame(userchoice)
    });
});




