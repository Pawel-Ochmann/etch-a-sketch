const container = document.querySelector('.container');
const body = document.querySelector('body');
const spinner = document.querySelector('.spinner');
const button = document.querySelector('button');

button.addEventListener('click', ()=> {
    container.innerHTML = '';
    let number = prompt('How many square in line would You like to have?',16);
    if (number > 50) number = 50;
    createGrid(number);
})
button.addEventListener('click', ()=> {'click', createGrid(2)})


let mouseDown = false;

body.addEventListener('mousedown', ()=> {
    mouseDown = true;
});
body.addEventListener('mouseup', ()=> {
    mouseDown = false;
})


function createGrid(number) {

    let squareNumber = number*number;
    for (let i = 0; i<squareNumber; i++) {
        let div = document.createElement('div');
        
        div.style.width = `${Math.floor(480/number)}px`;
        div.style.height = `${Math.floor(480/number)}px`;
        

        div.addEventListener('mouseenter', (e)=> {
        if (mouseDown) {
            div.style.backgroundColor = "black"
            }
        });
        container.appendChild(div);
    }

}


