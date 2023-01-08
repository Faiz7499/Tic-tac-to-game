let turn="X";
let gameover=false
//the below function work for the chaning the turn like when x is prented then next turn will be of 0.
const changeturn=()=>{
   
    return turn==="X"?"0":"X";
    
}
const checkwin=()=>{
  let boxtext=document.getElementsByClassName('boxtext');
  let wins=[
    // the first 3 terms shows the box number for winning purpose .and rest of these are showing for tralation of a ray which present on overlap currently as soon as the of the line matches the line will move with respect to the rest of these elements.
    [1,2,3,4,3,5,0],
    [5,6,7,8,3,15,0],
    [9,10,11,12,3,25,0],
    [13,14,15,16,3,35,0],
    [1,5,9,13,-3,15,90],
    [2,6,10,14,3,15,90],
    [3,7,11,15,13,15,90],
    [4,8,12,16,23,15,90]
    [1,6,11,16,3,15,45],
    [4,7,10,13,3,15,135],
  ]
//   wins.foreach works on the above whole array  for checking the conditions to check.
  wins.forEach(e =>{
    // boxtext it is a class which is present of each box .boxtext[e[0]] means ~ that the boxtext which is present at [0] position .inner text uska text    that will match other box in line or in diagonals if match then it will show
    console.log(boxtext[e[0]].innerText);
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText && boxtext[e[1]].innerText===boxtext[e[2]].innerText && 
        boxtext[e[3]].innerText===boxtext[e[2]].innerText && boxtext[e[0]].innerText!=="")){
        document.getElementsByClassName('info')[0].innerText="The Player "+boxtext[e[0]].innerText+" Wins The Match";

        gameover=true;
        document.querySelector('.line').style.width="25vw";

        document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
    }
  })
}
console.log("1")
// the first begning of the program. box class is taken from the html and then for each loop is applied on it .after applying the text is taken from that fo 
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    if(!gameover){
    element.addEventListener('click',()=>{
        console.log("1")
        if (boxtext.innerText==='') {
            boxtext.innerText=turn;
            turn=changeturn();
            checkwin();
            if(!gameover){
            document.getElementsByClassName('info')[0].innerText="Turn for "+turn;};
            
        }
    })
}
    })
// below function will for the reloading the page .
let bt=document.getElementById('bt');
bt.addEventListener('click',()=>{
    window.location.reload();
})
