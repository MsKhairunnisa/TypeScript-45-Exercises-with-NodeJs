"use strict";
// Define the make_album function
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three functions and creating 3 with different values
let album1 = make_album("Yousuf", "Album title 1");
let album2 = make_album("Zain", "Album title 2");
// calling a make_album function with third parameter 
let album3 = make_album("Amna", "Album title 3", 10);
// print values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
