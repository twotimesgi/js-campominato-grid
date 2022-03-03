let difficultyElem = document.getElementById("difficulty");
let playBtn = document.getElementById("playBtn");
let text = document.querySelector(".text");
let field = document.querySelector(".field");
let cellNumber = [49,81,100];

playBtn.addEventListener("click",function(){
    field.innerHTML = "";
    field.classList.add("field-borders");
    text.style.display = "none";
    field.dataset.diff = difficultyElem.value;
    
    for(let i = 1; i <= cellNumber[difficultyElem.value]; i++){
        let cell = document.createElement("div");
        cell.innerHTML = i;
        cell.classList.add("cell");
        cell.addEventListener("click", function(){
            cell.classList.add("clicked");
        });
        field.append(cell);
    }
});