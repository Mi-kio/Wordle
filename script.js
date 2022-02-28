document.addEventListener("DOMContentLoaded",()=>{

    createSquares();

    const guessedWords = [[]]
    let availableSpace = 1; 
    let word = "dairy";
const keys=document.querySelectorAll('.keyboard-row button');



function getCurrentWordArr(){
    const numberOfGuessedWords = guessedWords.length
    return guessedWords[numberOfGuessedWords - 1]
}



function updateGuessedWords(letter){
     const currentWordArr = getCurrentWordArr()

     if(currentWordArr && currentWordArr.length < 5){
         currentWordArr.push(letter)

         const availableSpaceEl = document.getElementById(String(availableSpace))
         availableSpace= availableSpace+1;
         availableSpaceEl.textContent = letter;

     }
}    

function handleSubmitWord(){
const currentWordArr = getCurrentWordArr();

if(guessedWords.length === 6){
    window.alert(`Uh Oh! You missed it! The word is ${word}.`);
}

if(currentWordArr.length !== 5){
    window.alert('Word must be 5 letters');
}
const currentWord = currentWordArr.join('')

if(currentWord === word){
    window.alert("Congratulatios!");
}



guessedWords.push([]);
}


function createSquares(){
        const gameBoard = document.getElementById("board");

        for(let index = 0; index < 30; index++){
           // const element = array[index];
            let square = document.createElement("div");
            square.classList.add('square')
            square.setAttribute("id",index+1);
            gameBoard.appendChild(square);
        }
    }

    for(let i = 0; i < keys.length; i++){
        keys[i].onclick=({target})=>{
            const letter=target.getAttribute("data-key");
     
            if(letter === 'enter'){
                handleSubmitWord()
                return;
            }
            console.log(letter);
            updateGuessedWords(letter);
        };
    }

});

