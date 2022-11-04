
// Name: Pranjal Prathap Bavikai
// Class: DIT/FT/1A/04
// Admin Number: 2228396


// list of information of the members (5 arrays)
var Leonardo = ["Leonardo", "Gold", "1 Dec 2019", "1 Jan 1980", "1400"];
var Catherine = ["Catherine", "Ruby", "14 Jan 2020", "28 Oct 1985", "250"];
var Luther = ["Luther", "Gold", "29 Apr 2020", "16 Mar 1992", "3350"];
var Bruce = ["Bruce", "Diamond", "3 jun 2020", "18 Mar 1994", "40200"];
var Amy = ["Amy", "Ruby", "5 Jun 2020", "31 May 2000", "500"];

// 2D array
var memberList = [Leonardo, Catherine, Luther, Bruce, Amy];


console.log("Welcome to XYZ Membership Loyalty Programme!");

// variable declaration
var info = 0;
var validInput = /\-?\d+\.\d+/g
var input = require("readline-sync");
var name = input.question("Please enter your name: ");
name = name.toLowerCase();

// program keeps looping until valid admin name is entered
while (name != "alice") {
    console.log("Only Admin is allowed");
    name = input.question("Please enter your name: ");
    name = name.toLowerCase();

}
// alice is the admin and hence only she can have access to the member information
while (name == "alice") {
    // declare choice variable
    var choice = input.question("\n" + "Hi " + name[0].toUpperCase() + name.slice(1, 5) + ", " + `please select your choice:
        1. Display all members' information        
        2. Update points earned        
        3. Statistics       
        4. Exit   
        >> `);
    // program only ends when valid admin name alice is entered and choice number 4 is entered
    while (choice != 4) {
        if (isNaN(choice) || choice <= 0 || choice >= 5 || choice == " " || validInput.test(choice)) {
            console.log("Please enter a valid input.");
            choice = input.question("\n" + "Hi " + name[0].toUpperCase() + name.slice(1, 5) + ", " + `please select your choice:
        1. Display all members' information        
        2. Update points earned        
        3. Statistics       
        4. Exit   
        >> `);
        }
        else if (choice == 2 || choice == 3) {
            console.log("Sorry, work in progress!");
            choice = input.question("\n" + "Hi " + name[0].toUpperCase() + name.slice(1, 5) + ", " + `please select your choice:
            1. Display all members' information        
            2. Update points earned        
            3. Statistics       
            4. Exit   
            >> `);
        }
        else if (choice == 1) {
            console.log();
            for (var i = 0; i < memberList.length; i++) {
                console.log("Name: " + memberList[i][info]);
                info++;
                console.log("Membership Type: " + memberList[i][info]);
                info++;
                console.log("Date joined: " + memberList[i][info]);
                info++;
                console.log("Date of birth: " + memberList[i][info]);
                info++;
                console.log("Points Earned: " + memberList[i][info]);
                info++;
                info = 0;
                console.log();
            }
            choice = input.question("\n" + "Hi " + name[0].toUpperCase() + name.slice(1, 5) + ", " + `please select your choice:
            1. Display all members' information        
            2. Update points earned        
            3. Statistics       
            4. Exit   
            >> `);
        }
    }
    console.log("Thank you & goodbye!");
    break;
}








