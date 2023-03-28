const container = document.querySelector('.container');
const body = document.querySelector('body');

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
        
        div.style.width = `${Math.floor(container.clientWidth/number)}px`;
        div.style.height = `${Math.floor(container.clientHeight/number)}px`;
        

        div.addEventListener('mouseenter', (e)=> {
        if (mouseDown) {
            div.style.backgroundColor = "black"
            }
        });
        container.appendChild(div);
    }
}

createGrid(16);