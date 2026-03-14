// Save the reference to text-field into a variable.
const textField = document.querySelector("#item");

// Save the reference to new-item button into a variable.
const addItemButton = document.querySelector("#add-item-btn");

// Save the reference to unordered list into a variable.
const shoppingList = document.querySelector("#shopping-list");

// Save the reference to paragraph for feedback
const feedback = document.querySelector(".feedback");


// Start function addItem
function addItem(){

// Create list-item and store output in a variable
const listItem = document.createElement("li");


// Check if user entered value
if(textField.value.trim() !== ""){

// Use textContent property
listItem.textContent = textField.value.trim();

// Append list item
shoppingList.appendChild(listItem);

// Clear feedback
feedback.textContent = "";

// Clear text field
textField.value = "";

// Put cursor back
textField.focus();

}

else{

// Print error message
feedback.textContent = "Nothing entered!";

}

}


// Register function on click
addItemButton.addEventListener("click", addItem);