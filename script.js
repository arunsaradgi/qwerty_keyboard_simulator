const textDisplay = document.getElementById("display")

function keyClicked(e) {
    e.preventDefault();
    console.log(e.target.innerText);
    let char = e.target.innerText;
    textDisplay.value += char
}

const row3 = ["Z", "X", "C", "V", "B", "N", "M"];

let lastrow = document.getElementById("row3");

row3.forEach((key) => {
    let keyElement = document.createElement("button");
    keyElement.classList.add("key");
    keyElement.innerText = key;
    keyElement.addEventListener("click", (event) => keyClicked(event));
    lastrow.appendChild(keyElement)
});