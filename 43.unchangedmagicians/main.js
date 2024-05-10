"use strict";
// define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// function to make magicians great through .map() it will modify array 
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// define an array of magicians names
let magicians_names = ["Harry Poter", "DR.strange", "Black Widow"];
// Making a copy of original array through .slice() function
let copy_magician_names = magicians_names.slice();
// Modify the copied array to include "THE Great " with their names
let copy_great_magicians = make_great(copy_magician_names);
// show both arrays original and copied
// original
console.log("Original Array\n");
show_magicians(magicians_names);
//Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
