let turn = 'X'
document.querySelector('.board').addEventListener('click',(event)=>{
    // console.log(event.target.id)
    document.getElementById(event.target.id).innerHTML=turn
    if (turn=='X')
        turn='O'
    else
    turn="X"
})