const redrawButton = document.querySelector("#redraw")
const container = document.querySelector(".container")

redrawButton.addEventListener("click", () => {
    let defaultInput = 16;
    userInput = prompt(`Input amount of boxes per side. \nThe default is 16`);
    if (userInput === null){
        drawGrid(defaultInput)
    }
    drawGrid(userInput)
});

function drawGrid(num){
    

};