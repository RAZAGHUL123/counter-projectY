let counter =0;
let counterElement = document.getElementById("counter");

function updateCounter() {
  counterElement.innerText = counter;
}

function handleIncrement() {
  counter +=1;
 updateCounter();
}

function handleDecrement() {
counter -=1;
updateCounter();
}

let incrementButton = document.getElementById("increment-button");
incrementButton.addEventListener("click", handleIncrement);

let decrementButton = document.getElementById("decrement-button");
decrementButton.addEventListener("click", handleDecrement);

updateCounter();
