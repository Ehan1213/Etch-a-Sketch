const redrawButton = document.querySelector("#redraw")
const container = document.querySelector(".container")

redrawButton.addEventListener("click", () => {
    let defaultInput = 16;
    userInput = prompt(`Input amount of boxes per side. \nThe default is 16`);
    if (userInput === ""){
        drawGrid(defaultInput)
    } else if (userInput > 100){
        alert(`${userInput} by ${userInput} is too many boxes!`)
    }
    
    drawGrid(userInput)
});

function drawGrid(num){
    grid = num ** 2 
    for(let i = 0; i < grid; i++){
        const box = document.createElement("div")
        box.classList.add("box")
        container.appendChild(box)
    }

};


window.onload = function() {
  drawGrid(16);
};
   