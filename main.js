const container = document.querySelector('.container');
const body = document.querySelector('body');
const button = document.querySelector('button');

button.addEventListener('click', ()=> {
    container.innerHTML = '';
    let number = prompt('How many square in line would You like to have?',16);
    if (number > 100) number = 100;
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
            console.log(div.style.backgroundColor)
            
            if(!div.style.backgroundColor) {
            div.style.backgroundColor = createRandomRGB()
            }
            else 
            {
            div.style.backgroundColor = getColorsFromStyles(div.style.backgroundColor);
            }
            console.log(div.style.backgroundColor)
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

function getColorsFromStyles(string) {
    let rgb = string.slice(5,-1);
    let darkRgb = rgb.split(',');
    let rgb2 = darkRgb.map((e)=> {
        e = +e-30;
        if (e<0) e=0;
        return e;
    })
    return `rgb(${rgb2[0]},${rgb2[1]},${rgb2[2]})`
}

console.log(getColorsFromStyles("rgb(231,15,57)"))