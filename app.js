turn = "X";
let endgame = false;
const changeTurn = ()=>{
    return turn === 'X' ? '0':'X';
}
let boxlist = Array.from(document.getElementsByClassName("box"));
document.getElementById("btn").addEventListener("click",()=>{
    boxlist.forEach((item)=>{
        item.innerHTML = '';
        turn = 'X';
        document.getElementById("current").innerHTML = "Turn of " + turn;
    })
} )
const checkWin = ()=> {
    let winArr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    winArr.forEach((item)=>{
        if(boxlist[item[0]].innerHTML === boxlist[item[1]].innerHTML && boxlist[item[1]].innerHTML === boxlist[item[2]].innerHTML && boxlist[item[0]].innerHTML !== '' ){
            document.getElementById("current").innerHTML = "Winner is " + turn;
            endgame = true;
        }
    })
}
boxlist.forEach((elem)=>{
    elem.addEventListener("click", (e)=>{
        if(e.target.innerHTML === ''){
            e.target.innerHTML = turn;
            checkWin();
            turn = changeTurn();
            if(!endgame){
                document.getElementById("current").innerHTML = "Turn of " + turn;
            }
        }
    })
})

