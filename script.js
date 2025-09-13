// --------------------
// Part 1: Basics
// --------------------
let userAge = 20; // variable
let isAdult;

if (userAge >= 18) {
  isAdult = "Yes, you are an adult.";
} else {
  isAdult = "No, you are not an adult.";
}

// Display result in HTML
document.getElementById("basics-output").textContent = `Age: ${userAge} → ${isAdult}`;


// --------------------
// Part 2: Functions
// --------------------

// Function 1: calculate total
function calculateTotal() {
  let total = addNumbers(10, 25);
  document.getElementById("function-output").textContent = "Total is: " + total;
}

// Function 2: reusable add function
function addNumbers(a, b) {
  return a + b;
}


// --------------------
// Part 3: Loops
// --------------------

// Example 1: Countdown
function showCountdown() {
  let countdownList = document.getElementById("countdown-list");
  countdownList.innerHTML = ""; // clear previous

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = "Countdown: " + i;
    countdownList.appendChild(li);
  }
}

// Example 2: Loop through array
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach((fruit) => console.log("Fruit:", fruit));


// --------------------
// Part 4: DOM Manipulation
// --------------------

// Change text content
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("dom-text").textContent = "🎉 Text has been changed!";
});

// Toggle highlight class
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.getElementById("highlight-text").classList.toggle("highlight");
});

// Add new item dynamically
document.getElementById("addItemBtn").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item added!";
  document.getElementById("item-list").appendChild(newItem);
});
