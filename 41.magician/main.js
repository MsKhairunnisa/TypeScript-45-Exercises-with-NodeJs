"use strict";
// define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// define an array containing magicians name
let magician_names = ["Harry Poter", "Dr.strange", "Black widow"];
// call the function to print each magician name
show_magicians(magician_names);
