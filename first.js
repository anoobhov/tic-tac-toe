let turn = 'O'

let winner = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

let board_array = new Array(9).fill("E");

function check_winner()
{
    for(let [index0,index1,index2] of winner)
    {
        if(board_array[index0]!='E'&&board_array[index1]!='E'&&board_array[index1]!='E'&&board_array[index0]===board_array[index1]&&board_array[index0]===board_array[index2])
            return 1
    }
    return 0
}

document.querySelector('.board').addEventListener('click',(event)=>{
    // console.log(event.target.id)
    let element = document.getElementById(event.target.id)
    element.textContent = turn
    if(board_array[element.id]==='E')
    {
        if (turn=='X')
        {
            board_array[element.id]=turn
            turn='O'
            if(check_winner())
            {
                document.getElementById('winner').innerHTML='Winner is X'
            }
            
        }
        else
        {
            board_array[element.id]=turn
            turn="X"
            if(check_winner())
            {
                document.getElementById('winner').innerHTML='Winner is O'
            }
        }
    }
    

})