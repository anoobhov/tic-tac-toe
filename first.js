document.querySelector('.board').addEventListener('click',(event)=>{
    // console.log(event.target.id)
    document.getElementById(event.target.id).innerHTML="X"
})