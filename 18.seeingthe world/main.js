"use strict";
// Making a Array of Countries and its Original Order
let countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesToVisit);
// Print the Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriesToVisit].sort());
// SHOW that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);
// Print the Array in Reversed Order without modifiying the Actual array List
console.log("Reverse Order:", [...countriesToVisit].reverse());
//Show that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);
// we have Changed the Original Array Order Now
console.log("Original Array Reversed:", countriesToVisit.reverse());
// Print the array to show that it's back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());
//Print the array to show that its Order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// We have Changed again the Original Array Order Now in reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());
