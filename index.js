const quantity = 256
document.onload = addDivs(quantity);

function addDivs(q) {
    for (let i = 1; i <= q; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('square', 'div_'+ i);
        const containerDiv = document.querySelector('.container');
        containerDiv.appendChild(newDiv);
    };
};

for(let i = 0; i < quantity; i++){
    const hoveredDiv = document.querySelectorAll('.square')[i];
    hoveredDiv.addEventListener('mouseover', () => {
        hoveredDiv.classList.add('hovered');
    })
}