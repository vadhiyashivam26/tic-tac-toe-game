let allBtns = document.querySelectorAll(".btn");
let p = document.querySelector(".win");

let turn = 'X';

let gameRule = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


for(btns of allBtns){
    btns.addEventListener("click", checkbtn);
}

function checkbtn(){
    let btn = this;
    let winner;

    if(turn == 'X'){
        btn.innerText = 'X';
        turn = '0';
        p.innerText = `now ${turn} 's turn.`;
    } else {
        btn.innerText = '0';
        turn = 'X';
        p.innerText = `now ${turn} 's turn.`;
    }
    btn.disabled = true;
    checkWinner();
}

function checkWinner(){
    for(let pattern of gameRule){
        pos1Val = allBtns[pattern[0]].innerText;
        pos2Val = allBtns[pattern[1]].innerText;
        pos3Val = allBtns[pattern[2]].innerText; 

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                p.innerText = `${pos1Val} is winner`;
                btndisable();
            }
        }
    }
}

function btndisable(){
    for(let btns of allBtns){
        btns.disabled = true;
    }
}

let resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", () =>{
    for(let btns of allBtns){
        btns.innerText = "";
        btns.disabled = false;
        turn = 'X';
        p.innerText = 'Click to start game';
    }
});