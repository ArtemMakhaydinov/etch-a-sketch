let resolution = 16;
document.onload = addDivs(resolution);

const button = document.querySelector('button');

//Reset button
button.addEventListener('click', () => {
    document.querySelectorAll('.square').forEach((div) => {
        document.querySelector('.container').removeChild(div);
    });

    enterNewResolution()
});

//Prompt validation
function enterNewResolution(){
    let enter = prompt('Enter square grid resolution (100 max):');

    if(enter <= 100){
        resolution = enter;
        addDivs(resolution);
    } else {
        enterNewResolution();
    }
}

//Grid constructor
function addDivs(r) {

    for (let i = 1; i <= r ** 2; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('square', 'div_' + i);

        const containerDiv = document.querySelector('.container');
        containerDiv.style.cssText = `grid-template-columns: repeat(${r}, ${800 / r}px);
        grid-template-rows: repeat(${r}, ${800 / r}px);`;
        containerDiv.appendChild(newDiv);
    };
    hoverColor();
};

function hoverColor() {
    for (let i = 0; i < resolution ** 2; i++) {
        const hoveredDiv = document.querySelectorAll('.square')[i];
        hoveredDiv.addEventListener('mouseover', () => {
            hoveredDiv.classList.add('hovered');
        })
    }
}