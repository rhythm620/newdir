let gameSeq = [];
let userSeq = [];

let btns  =["yellow","red","blue","green"];

let started = false;

let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    // console.log("game started");
    if(started == false){
        started = true;

        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },100);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },100);
}

function levelUp(){
    userSeq=[];
    level ++;

    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];r
    
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    // console.log(userSeq);
    gameFlash(randBtn); 
}

function checkAns(idx){
    // let idx = level-1;

    if(userSeq[idx] ==  gameSeq[idx]){
        if(userSeq.length ==  gameSeq.length){
            setTimeout(levelUp,100);
        }
    }
    else{
        h2.innerHTML =`Game Over! Your score was <b>${level}</b>  <br> Press Any Key to Start Again...`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"
        },100)

        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id") ;
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);//har baar last button ko hi check krenge naa

}

let allBtns = document.querySelectorAll(".btn");

for(button of allBtns){
    button.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq =[];
    level =0;
}