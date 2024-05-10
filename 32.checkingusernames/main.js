"use strict";
// Array of Current users
let current_users = ["Yousuf", "Zain", "Amna", "Ayesha", "Hasnain"];
// Array of New users
let new_users = ["Abdullah", "Maha", "zain", "Ali", "Sana"];
// loop through new_users to check for usernames availibility
new_users.forEach(new_one_user => {
    // making a condition for username exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    // print different messages using If_Else statement
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This Username ${new_one_user} is available`);
    }
});
