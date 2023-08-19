
const main = document.getElementById('main');
const header = document.getElementById('header');

let userInput = 16;

let resetButton = document.createElement('button');
resetButton.textContent = 'Reset?';
header.appendChild(resetButton);
resetButton.addEventListener('click', resetPrompt);

setGrid(userInput);

function resetPrompt(){
    userInput = prompt('How big would you like the grid? (1-64)');
    if(userInput < 1 || userInput >64){
        resetPrompt();
    }
    setGrid(userInput);
}

function setGrid(input){
    document.documentElement.style.setProperty('--columns', input);
    document.documentElement.style.setProperty('--rows', input);
    main.innerHTML = '';
    for (i = 0; i<(userInput*userInput); i++){
        let cell = document.createElement('div');
        cell.className = 'cell';
        main.appendChild(cell);
        hover(cell);
    }
}

function hover(cell){
    cell.addEventListener('mouseenter', () => {
        changeColor(cell);
    })
}
function changeColor(cell){
    cell.classList.add('black');
}
