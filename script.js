/* -----------------------------
   Part 2: JavaScript Functions
------------------------------*/

// Global variable (scope demonstration)
let globalMultiplier = 2;

// Function with parameters and return value
function calculateArea(width, height) {
  // local scope variables
  let area = width * height * globalMultiplier; 
  return area;
}

// Function to display calculation
function showCalculation() {
  let width = 5;
  let height = 4;
  let result = calculateArea(width, height); // uses parameters + return
  document.getElementById("calc-result").innerText =
    `Rectangle area (with multiplier ${globalMultiplier}): ${result}`;
}

/* -----------------------------
   Part 3: Combining CSS + JS
------------------------------*/

// Select elements
const animateBtn = document.getElementById("animate-btn");
const jsBox = document.querySelector(".js-box");

// Reusable function to toggle animation
function toggleAnimation(element, className) {
  element.classList.toggle(className);
}

// Event listener to trigger animation
animateBtn.addEventListener("click", function () {
  toggleAnimation(jsBox, "active");
});

