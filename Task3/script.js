let display = document.getElementById('inputbox'); // Ensure the id matches exactly
let buttons = document.querySelectorAll('button');
let string = ''; // Initialize an empty string to hold the input

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let value = e.target.innerHTML.trim(); // Trim to avoid issues with extra spaces

        console.log(`Button clicked: ${value}`); // Log clicked value for debugging

        if (value === 'DEL') {
            // Delete the last character
            string = string.slice(0, -1); // .slice() is more concise than .substring()
            display.value = string;

        } else if (value === 'AC') {
            // Clear all input
            string = '';
            display.value = string;

        } else if (value === '=') {
            try {
                // Evaluate the string as a mathematical expression
                string = eval(string);
                display.value = string;
            } catch (error) {
                display.value = "Error"; // Handle invalid expressions
                string = '';
            }

        } else {
            // Append the button's value to the string
            string += value;
            display.value = string;
        }

        console.log(`Current string: ${string}`); // Log current input string
    });
});
