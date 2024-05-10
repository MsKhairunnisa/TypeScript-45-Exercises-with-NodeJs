"use strict";
// define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// define an array of magicians names
let magicians_names = ["Harry Poter", "DR.strange", "Black Widow"];
let great_magicians = make_great(magicians_names);
show_magicians(great_magicians);
