"use strict";
// Creating a guest list Array
let guestList = ["Yousuf", "Zain", "Ayesha", "Amna"];
// Making variable for those guest who cant come
let dontCome = guestList[0];
//Print the name of guest who cant come
console.log(dontCome, "nahi aa sakty hn");
// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Hasnain");
//Message print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");
// Adding a new value at starting index of array
guestList.unshift("Zahid");
// Adding a new value at ending index of array
guestList.push("Shujja");
// Get a middle index of our guest list array
let middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osama");
console.log("Updated List of our Guest");
// Sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));
