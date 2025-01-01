let turn = 'O'
let total_turn=0
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

const printer = (event)=>
{
        // console.log(event.target.id)
        let element = document.getElementById(event.target.id)
        element.textContent = turn
        if(board_array[element.id]==='E')
        {
            total_turn++
            if (turn=='X')
            {
                board_array[element.id]=turn
                turn='O'
                if(check_winner())
                {
                    document.getElementById('winner').innerHTML='Winner is X'
                    document.querySelector('.board').removeEventListener('click',printer)
                    return
                }
                
            }
            else
            {
                board_array[element.id]=turn
                turn="X"
                if(check_winner())
                {
                    document.getElementById('winner').innerHTML='Winner is O'
                    document.querySelector('.board').removeEventListener('click',printer)
                    return
                }
            }
        }
        if(total_turn==9)
        {
            document.getElementById('winner').innerHTML='Match is draw'
        }
    
}
document.querySelector('.board').addEventListener('click',printer)


const restart = document.querySelector('button')
restart.addEventListener('click',()=>{
    const cell = document.getElementsByClassName('cell')
    Array.from(cell).forEach((value)=>{
        value.innerHTML=""
    })
    board_array=new Array(9).fill("E");
    document.querySelector('.board').addEventListener('click',printer)
    document.getElementById('winner').innerHTML=''
})