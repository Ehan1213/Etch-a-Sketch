"use strict";
const redrawButton = document.querySelector("#redraw");
const content = document.querySelector(".content");
let drawCount = 1;

redrawButton.addEventListener("click", () => {
    let defaultInput = 16;
    let userInput = prompt(`Input amount of boxes per side. \nThe default is 16`);
    if (userInput === ""){
        drawCount++;
        drawGrid(defaultInput, drawCount);
    } else if (userInput > 100){
        alert(`${userInput} by ${userInput} is too many boxes!`);
    }
    else {
        drawCount++;
        drawGrid(userInput, drawCount);

    }
});



function drawGrid(num, drawCount){


    if (drawCount > 1){
        let rowList = document.querySelectorAll(`.row`);
        for(let i = 0; i < rowList.length; i++){
            let rowRemove = rowList[i]
            content.removeChild(rowRemove)

        }
        
    }

    for(let i = 0; i < num; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        row.id = `row${i}`;
        content.appendChild(row);

        let currentRow = document.querySelector(`#row${i}`);
        let rowList = document.querySelectorAll('.row');
        // currentRow.addEventListener('mouseenter', boxEnter(Event))
        // currentRow.addEventListener('mouseleave', boxEnter(Event))
        content.appendChild(currentRow);

        console.log(rowList);
        console.log(currentRow);
        console.log("row.id= " + row.id);
        console.log(`i= ${i}`);
        console.log(`num= ${i}`);
        console.log(`#row= ${i}`);
        console.log(`querySelector= #row${i}`);

        
        
        for(let j = 0; j < num; j++){
            let box = document.createElement("div");
            box.classList.add("box");
            box.addEventListener("mouseenter", (event) =>{
                box.classList.add("black")
            })
            box.addEventListener("mouseleave", (event) =>{
                box.classList.add("white")
                
            })
            currentRow.appendChild(box);
        }
        content.appendChild(currentRow);


    }
};

// function boxLeave(){
//     const target = Event.target.getAttribute("class");
//     console.log(target);
// }

// function boxEnter(){
//     const target = Event.target.getAttribute("class");
//     console.log(target);
// }




// row.addEventListener("mouseenter", () => {
//     alert(`You entered`);

// });



const rowCount = document.querySelectorAll(".row");
const row1 = document.querySelector("#row1")
const boxCount = document.querySelectorAll(".box");
console.log(row1)
console.log(rowCount)
console.log(boxCount)
const test = document.createElement("p")


window.onload = function() {
  drawGrid(15);
  
};




   