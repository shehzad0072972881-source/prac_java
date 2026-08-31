// let headings = document.getElementById("headings")
// console.log(headings);
// let allimages = document.getElementById("allimages")
// console.log(allimages);
// let head1 = document.getElementsByClassName("head1")
// console.log(head1);
// let para = document.getElementsByTagName("p")
// console.log(para);

// let firstEl = document.querySelector("p")
// console.log(firstEl);

// //      property
// let firstEleme = document.querySelector(".head1")
// firstEleme.innerHTML = "Shehzad khan";

// // let allEl = document.querySelectorAll("p")
// // console.log(allEl);

// let allEle = document.querySelectorAll("#allimages")
// console.log(allEle);

// let allElem = document.querySelectorAll("#images")
// console.log(allElem);


//            FRUITS

// let div = document.querySelector("div")
// console.log(div);

// let heading = document.querySelector("h1")
// let heading2 = document.querySelector("h2")

// let box = document.querySelector(".box")
// box.onclick = (evt)=> {
//     console.log("div par click karne se div ka color bi change hoga or text color bi.");
//     box.style.background = "linear-gradient(to right, red, yellow, blue)"
//     box.style.color = "white";
//     console.log(evt)
// };


// let heading = document.querySelector("#head2");
// head2.ondblclick = (event)=> {
//     console.log("double click karne par iska color change hoga or ye bg color bi change hoga.");
//     head2.style.background = "linear-gradient(to right, red, blue, yellow, grey)";
//     head2.style.color = "white";
//     head2.style.fontStyle = "italic";
//     head2.style.display = "flex";
//     head2.style.justifyContent = "center";
//     head2.style.alighnItems = "center";
// };

// let btn = document.querySelector("#btn1")
// btn1.onmouseover = (e)=> {
//     console.log("btn par over karne par color change hoga or border radius bi change hoga or tora sa bara hogaege btn.");
//     console.log(e.target);
//      console.log(e.type);
//      console.log(e.clientX, e.clientY)
//     btn1.style.background = "linear-gradient(to right, red, yellow)";
//     btn1.style.color = "white";
//     btn1.style.borderRadius = "20px";
//     btn1.style.fontSize = "20px"
//     console.log(btn1)
// }

// let btn1 = document.querySelector("#btn1")
// function btnClick(e) {
//     console.log("btn par click hua");
//     btn1.style.background = "linear-gradient(to right, red, yellow)";
//     btn1.style.color = "white";
//     btn1.style.borderRadius = "20px";
//     btn1.style.fontSize = "20px";
//     console.log(e)
// }
// btn1.addEventListener("click", btnClick);

// let btn2 = document.querySelector("#btn2");
// let body = document.querySelector("body");
// let currMode = "light";

// btn2.addEventListener("click", () =>{
//     if (currMode === "light") {
//         currMode = "dark";
//         body.classList.add("dark");
//            body.classList.remove("light")
//     }else {
//         currMode = "light"
//         body.classList.add("light")
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// });

//                                                        GAME TIC TOC TOE

let buttons = document.querySelectorAll(".btn1");
let button = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#newgamebtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#resetbtn")

let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enablebuttons();
    msgcontainer.classList.add("hide");
};

buttons.forEach((btn1) => {
    btn1.addEventListener("click", () => {
       console.log("btn was clicked");
       if (turnO) {
         btn1.innerText = "X";
         btn1.style.color = "#32315c"
         turnO = false;
         
       }else {
        btn1.innerText = "O";
        btn1.style.color = "#9e6b95"
        turnO = true;
       }
       btn1.disabled = true;

       checkWinner ();
    })
});

const disablebuttons = () => {
    for (let btn1 of buttons) {
        btn1.disabled = true;
    }
};

const enablebuttons = () => {
    for (let btn1 of buttons) {
        btn1.disabled = false;
        btn1.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText =  `👑 Congratulations! Winner is .  ${winner} 🏆`;
    msgcontainer.classList.remove("hide");
    disablebuttons();
}

const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1Val = buttons[pattern[0]].innerText;
           let pos2Val = buttons[pattern[1]].innerText;
              let pos3Val = buttons[pattern[2]].innerText;

              if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val === pos3Val) {
                    console.log("winner", pos1Val);
                    showWinner (pos1Val);
                }
              }
    }
} ;

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

