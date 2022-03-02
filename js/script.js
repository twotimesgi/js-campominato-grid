let difficultyElem = document.getElementById("difficulty");
let playBtn = document.getElementById("playBtn");
let cellN;
let text = document.querySelector(".text");
let field = document.querySelector(".field");
let perRow;

playBtn.addEventListener("click",function(){
    field.innerHTML = "";
    text.style.display = "none";
    field.dataset.diff = difficultyElem.value;

    switch(difficultyElem.value){
        case 'Easy':
            cellN = 49;
            break;
        case 'Medium':
            cellN = 81;
            perRow = "9";
            break;
        case 'Hard':
            cellN = 100;
            perRow = "10";
            break;
    }
    
    for(let i = 1; i <= cellN; i++){
        let cell = document.createElement("div");
        cell.innerHTML = i;
        cell.classList.add("cell");
        cell.addEventListener("click", function(){
            cell.classList.add("clicked");
        });
        field.append(cell);
    }
});