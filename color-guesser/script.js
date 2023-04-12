const colorToGuess = document.getElementById("colorToGuess");
const allBoxes = document.querySelectorAll(".box");
const newColBtn = document.getElementById("newColBtn");
const winMsg = document.getElementById("isCorrectMsg");
const displayScore = document.getElementById("Score");

let newColor = null;
let Score = 0;
let guessing = false;


allBoxes.forEach( (colorBox) => {
    colorBox.addEventListener("click", () => {

        if(guessing){

        if(newColor === colorBox.style.backgroundColor){
            Correct()

        } else {
            colorBox.style.opacity = 0;
        }
     
    }

    })

})

const Correct = () => {
    guessing = false;
    winMsg.textContent ="Correct!"
    Score++
    displayScore.textContent = Score


    for (let i = 0; i < allBoxes.length; i++ ){
        allBoxes[i].style.opacity = 1
        allBoxes[i].style.backgroundColor = newColor
    }
}






const resetGame = () => {
    guessing = true;
    winMsg.textContent = ""
    
    for(let i = 0; i < allBoxes.length; i ++){
    

        allBoxes[i].style.backgroundColor = `rgb(${Math.round( Math.random() * 255 )},${Math.round( Math.random() * 255 )},${Math.round( Math.random() * 255 )})`

  
    }

    let itemToGuess = allBoxes[Math.floor(Math.random() * allBoxes.length)]
    
    newColor = itemToGuess.style.backgroundColor;

    colorToGuess. textContent = newColor; 
}

resetGame()

newColBtn.addEventListener("click", resetGame)