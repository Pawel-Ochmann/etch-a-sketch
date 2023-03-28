const container = document.querySelector('.container');
const body = document.querySelector('body');
const spinner = document.querySelector('.spinner');
const button = document.querySelector('button');

button.addEventListener('click', ()=> {
    container.innerHTML = '';
    let number = prompt('How many square in line would You like to have?',16);
    if (number > 64) number = 64;
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
        
        div.style.width = `${480/number}px`;
        div.style.height = `${480/number}px`;
        

        div.addEventListener('mouseenter', (e)=> {
        if (mouseDown) {
            div.style.backgroundColor = createRandomRGB()
            }
        });
        container.appendChild(div);
    }

}


function randomColor() {
   return Math.floor(Math.random()*256)
}
function createRandomRGB() {
    let r = randomColor();
    let g = randomColor();
    let b = randomColor();

    return `rgb(${r},${g},${b})`
}

