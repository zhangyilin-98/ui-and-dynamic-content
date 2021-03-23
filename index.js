// Getting the references 
// to the interactive elements of the markup:
let input = document.getElementById('content');
let add = document.getElementById('add');
let list = document.getElementById('list');

function addItem() {
	
	// clean up the eventual white space in input
	input.value =input.value.trim();
		
	// Do the indeted items below
	// if the user input is not empty:
		
		// Create the new list item
		let li = document.createElement('li');

		// Collect the user input from the input-tag
		li.innerHTML ="<span class='icon'> > </span>"+ input.value;

		// Attach list item to the unordered list 
		list.appendChild(li);
	
		// Clear the text-field
	
	// otherwise
	
		// Use alert popup box to alert the error message
	
	// else block ends here 
}

add.addEventListener('click', addItem);