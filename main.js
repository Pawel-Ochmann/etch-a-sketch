const container = document.querySelector('.container');
let div = document.createElement('div');
div.style.width = '960px';
div.style.height = '960px';
div.addEventListener('mouseenter', (e)=> {
    div.style.backgroundColor = "black"
});
container.appendChild(div);