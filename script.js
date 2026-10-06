// 1. Grab the elements from the HTML (The DOM)
let countDisplay = document.getElementById('count');
let increaseBtn = document.getElementById('increase');
let decreaseBtn = document.getElementById('decrease');

// 2. Create a variable to hold our number
let currentCount = 0;

// 3. Listen for clicks on the "Increase" button
increaseBtn.addEventListener('click', function() {
    currentCount++; // Add 1
    countDisplay.textContent = currentCount; // Update the screen
});

// 4. Listen for clicks on the "Decrease" button
decreaseBtn.addEventListener('click', function() {
    currentCount--; // Subtract 1
    countDisplay.textContent = currentCount; // Update the screen
});