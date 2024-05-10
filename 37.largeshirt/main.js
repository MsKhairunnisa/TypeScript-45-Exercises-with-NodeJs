"use strict";
// making a function
function make_shirt(size = "Large", printMessage = "I Love TypeScript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
// Calling a function with by default values
make_shirt();
// Calling a function now with Medium size and default message
make_shirt("Medium");
// calling a function now wiyh small size and also differet print message
make_shirt("Small", "I Love Javascript");
