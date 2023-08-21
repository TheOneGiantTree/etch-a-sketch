
const main = document.getElementById('main');
const header = document.getElementById('header');

let userInput = 16;
let randomMode = false;

let resetButton = document.createElement('button');
resetButton.textContent = 'Reset?';
header.appendChild(resetButton);
resetButton.addEventListener('click', resetPrompt);

let randomButton = document.createElement('button');
randomButton.textContent = 'Randomize';
header.appendChild(randomButton);
randomButton.addEventListener('click', toggleRandom);

setGrid(userInput);

function toggleRandom(){
    randomMode = !randomMode;
    if(randomMode){
        randomButton.classList.add('on');
    }
    else {
        randomButton.classList.remove('on');
    }
}

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
        if(randomMode){
            changeRandom(cell);
        }
        else{
            changeColor(cell);
        }
    })
}

function changeRandom(cell){
    const randomColor = '#' + Math.random().toString(16).slice(-6);
    cell.style.backgroundColor = randomColor;
}
function changeColor(cell){
    cell.classList.add('black');
}
