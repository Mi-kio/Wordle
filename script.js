document.addEventListener("DOMContentLoaded",()=>{

    createSquare();

    function createSquare(){
        const gameboard = document.getElementById("board")

        for(let index = 0; index < 30; index++){
           // const element = array[index];
            let sqaure = document.createElement("div");
            sqaure.classList.add('square')
            sqaure.setAttribute("id",index+1);
            gameboard.appendChild(sqaure);
        }
    }
})