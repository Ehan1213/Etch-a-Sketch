const redrawButton = document.querySelector("#redraw")
const content = document.querySelector(".content")

redrawButton.addEventListener("click", () => {
    let defaultInput = 16;
    let redraw = true
    userInput = prompt(`Input amount of boxes per side. \nThe default is 16`);
    if (userInput === ""){
        drawGrid(defaultInput)
    } else if (userInput > 100){
        alert(`${userInput} by ${userInput} is too many boxes!`)
    }
    drawGrid(userInput, redraw)
});



function drawGrid(num, reDrawBool = false){
    reDraw = reDrawBool

    if (redraw === true){
        row.removeChild(box)
        content.removeChild(row)
    }
        
    for(let i = 0; i < num; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        row.id = `row${i}`;
        content.appendChild(row);

        let currentRow = document.querySelector(`#row${i}`);
        content.appendChild(currentRow);

        for(let j = 0; j < num; j++){
            let box = document.createElement("div");
            box.classList.add("box");
            currentRow.appendChild(box);
        }
        content.appendChild(currentRow);
        
        
    }

};

function clearGrid(){

}



const rowCount = document.querySelectorAll(".row");
const row1 = document.querySelector("#row1")
const boxCount = document.querySelectorAll(".box");
console.log(row1)
console.log(rowCount)
console.log(boxCount)
const test = document.createElement("p")


window.onload = function() {
  drawGrid(16);
  test
  content.appendChild(test)
  
};



// row.addEventListener("mouseenter", () => {
//     alert(`You entered`);

// });


   