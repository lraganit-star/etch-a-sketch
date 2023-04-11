console.clear()

for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.setAttribute('style', 
                    'width: 50px; height: 50px; border: 1px solid black');
    div.classList.add("square");
    div.addEventListener("mouseover", (event) => event.target.style.backgroundColor = "orange", false);
    div.addEventListener("mouseout", (event) => event.target.style.backgroundColor = "purple", false);    
    document.getElementById("squares").appendChild(div);
}
