let boxes = document.querySelectorAll(".box");
let rest = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;
let pattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetgame=()=>{
    turno = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        check();
    });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText = `Congratulation, Winner is ${winner} `;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const check = () => {
    let isTie = true; 
    for (let patt of pattern) {
        let pos1 = boxes[patt[0]].innerText;
        let pos2 = boxes[patt[1]].innerText;
        let pos3 = boxes[patt[2]].innerText;
        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            showwinner(pos1);
            return; 
        }
    }
    for (let box of boxes) {
        if (box.innerText === "") {
            isTie = false;
            break;
        }
    }
    if (isTie) {
        msg.innerText = "It's a tie!";
        msgcontainer.classList.remove("hide");
        disableboxes();
    }
};
newgamebtn.addEventListener("click",resetgame);
rest.addEventListener("click",resetgame);