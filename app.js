let count = 0;

const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

function updateCounter() {
  countElement.textContent = count;
}

function increment() {
  count++;
  updateCounter();
}

function decrement() {
  if (count > 0) {
    count--;
    updateCounter();
  }
}

function reset() {
  count = 0;
  updateCounter();
}

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);
resetButton.addEventListener('click', reset);
