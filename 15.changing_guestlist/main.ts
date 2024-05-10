let guestList = ["Yousuf","Zain","Ayesha","Amna"];

let dontCome = guestList[0];

console.log(dontCome, "Nahi aa sakta");

guestList.splice(0, 1, "Hasnain");

guestList.forEach(guest => console.log(`Salam ${guest}, would u like to Dinner with me?`));