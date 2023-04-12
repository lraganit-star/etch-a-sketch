
var popup = document.getElementById("popup");

function popupFunc() {
    var size = prompt('What do you want the grid size to be?');
    return size;
}

var size = popupFunc();
console.log(size);

for (let i = 0; i < size ** 2; i++) {
    const div = document.createElement('div');
    div.setAttribute('style', 
                    'width: 50px; height: 50px; border: 1px solid black');
    div.classList.add("square");
    div.addEventListener("mouseover", (event) => event.target.style.backgroundColor = "orange");
    div.addEventListener("mouseout", (event) => event.target.style.backgroundColor = "purple");    
    document.getElementById("squares").appendChild(div);
}

const squares = document.getElementById("squares");
var width = 52 * size
squares.style.width = width + 'px'

// clearButton.addEventListener("onclick", onClick)

// function onClick() {
//     squares.style.backgroundColor = "white";
// }

