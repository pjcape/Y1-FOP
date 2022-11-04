
// Name: Pranjal Prathap Bavikai
// Class: DIT/FT/1A/04
// Admin Number: 2228396


// creating member class to define each member's properties and methods
class Member {
    constructor(name, m_type, date_j, date_ob, points) {
        this.name = name;
        this.m_type = m_type;
        this.date_j = date_j;
        this.date_ob = date_ob;
        this.points = points;
    }
    getName() {
        return this.name;
    }
    getM_type() {
        return this.m_type;
    }
    getDate_j() {
        return this.date_j;
    }
    getDate_ob() {
        return this.date_ob;
    }
    getPoints() {
        return this.points;
    }
    // get details of the members
    getDetails() {
        return '\n' + "Name: " + this.name + '\n' + "Membership Type: " + this.m_type + '\n' + "Date joined: " + this.date_j + '\n' + "Date of birth: " + this.date_ob + '\n' + "Points Earned: " + this.points
    }

}

// creating MemberGroup class to represent an array(detailarr) of all members, other properties and methods.
class MemberGroup {
    constructor() {
        this.detailarr = [];
        this.detailarr.push(new Member("Leonardo", "Gold", "1 Dec 2019", "1 Jan 1980", "1400"));
        this.detailarr.push(new Member("Catherine", "Ruby", "14 Jan 2020", "28 Oct 1985", "250"));
        this.detailarr.push(new Member("Luther", "Gold", "29 Apr 2020", "16 Mar 1992", "3350"));
        this.detailarr.push(new Member("Bruce", "Diamond", "3 jun 2020", "18 Mar 1994", "40200"));
        this.detailarr.push(new Member("Amy", "Gold", "5 Jun 2020", "31 May 2000", "500"));

    }
    // checks through the name of the whole list of members in array(detailarr) to match with x(name) and if it does it returns boolean value true
    testforname(x) {
        for (var i = 0; i < membergrp.detailarr.length; i++) {
            if (x.toLowerCase() == membergrp.detailarr[i].name.toLowerCase()) {
                return true;
            }
        }

    }
    // finds the index of the object that contains x(name) in the array(detailarr)
    findindex(x) {
        for (var i = 0; i < membergrp.detailarr.length; i++) {
            if (x.toLowerCase() == membergrp.detailarr[i].name.toLowerCase()) {
                return i;
            }
        }
    }
    // checks if x(name) is a member then returns the points obtained by member x 
    updatepoints(x) {
        for (var i = 0; i < membergrp.detailarr.length; i++) {
            if (x.toLowerCase() == membergrp.detailarr[i].name.toLowerCase()) {
                membergrp.detailarr[i].points = parseInt(membergrp.detailarr[i].points);
                return membergrp.detailarr[i].points;
            }
        }
    }
    // checks if x(name) is a member then it updates the membership type everytime the points reach a certain amount 
    change_mtype(x) {
        for (var i = 0; i < membergrp.detailarr.length; i++) {
            if (x.toLowerCase() == membergrp.detailarr[i].name.toLowerCase()) {
                if (membergrp.detailarr[i].points >= 20000) {
                    membergrp.detailarr[i].m_type = "Diamond";
                    return membergrp.detailarr[i].m_type;
                }
                else if (membergrp.detailarr[i].points >= 5000 && membergrp.detailarr[i].points < 20000) {
                    membergrp.detailarr[i].m_type = "Platinum";
                    return membergrp.detailarr[i].m_type;
                }
                else if (membergrp.detailarr[i].points >= 500 && membergrp.detailarr[i].points < 5000) {
                    membergrp.detailarr[i].m_type = "Gold";
                    return membergrp.detailarr[i].m_type;
                }
                else {
                    membergrp.detailarr[i].m_type = "Ruby";
                    return membergrp.detailarr[i].m_type;
                }
            }
        }
    }

    // returns the total number of members in membership type x 
    membercount(x) {
        var member_count = 0
        for (var i = 0; i < membergrp.detailarr.length; i++) {
            if (x.toLowerCase() == membergrp.detailarr[i].m_type.toLowerCase()) {
                member_count++;
            }
        }
        return member_count;
    }
    // returns the total points of a certain membership type 
    member_totalpt(x) {
        var membertotalpt = 0
        for (var i = 0; i < membergrp.detailarr.length; i++) {
            if (x.toLowerCase() == membergrp.detailarr[i].m_type.toLowerCase()) {
                membertotalpt += parseInt(membergrp.detailarr[i].points);
            }
        }
        return membertotalpt;
    }
    // adds new member into array(detailarr) points are assigned as 0 and default membership type of new member is ruby
    addmember(name, dob) {
        membergrp.detailarr.push(new Member(name, "Ruby", new Date().toUTCString().slice(5, 16), dob, "0"));
    }
    // checks through the membership type of the whole list of members in array(detailarr) to match with x(membership type)
    test_mtype(x) {
        for (var i = 0; i < membergrp.detailarr.length; i++) {
            if (x.toLowerCase() == membergrp.detailarr[i].m_type.toLowerCase()) {
                return true;
            }
        }
    }

}



var member = new Member();
var membergrp = new MemberGroup();


console.log("Welcome to XYZ Membership Loyalty Programme!");

// variable declaration

var input = require("readline-sync");
var name = input.question("Please enter your name: ").toLowerCase();

// to validate floating point input

var validInput = /\d+\.\d+/


// re-promts for valid admin name until valid admin name(alice) is entered

while (name != "alice") {
    console.log("Only Admin is allowed");
    name = input.question("Please enter your name: ");
    name = name.toLowerCase();

}

// alice is the admin and hence only she can have access to the member information

while (name == "alice") {
    // declare choice variable
    var choice = input.question("\nHi " + name[0].toUpperCase() + name.slice(1, 5) + ", " + "please select your choice:"
        + "\n\t1. Display all members' information"
        + "\n\t2. Display member information"
        + "\n\t3. Add new member"
        + "\n\t4. Update points earned"
        + "\n\t5. Statistics"
        + "\n\t6. Exit "
        + "\n\t>> ");
    // program only ends when valid admin name alice is entered and choice number 6 is entered
    // validation is done for choice menu
    while (isNaN(choice) || choice <= 0 || choice >= 7 || choice == " " || validInput.test(choice) || choice == 1 || choice == 2 || choice == 3 || choice == 4 || choice == 5) {
        if (isNaN(choice) || choice <= 0 || choice >= 7 || choice == " " || validInput.test(choice)) {
            console.log("Please enter a valid input.");
            choice = input.question("\nHi " + name[0].toUpperCase() + name.slice(1, 5) + ", " + "please select your choice:"
                + "\n\t1. Display all members' information"
                + "\n\t2. Display member information"
                + "\n\t3. Add new member"
                + "\n\t4. Update points earned"
                + "\n\t5. Statistics"
                + "\n\t6. Exit "
                + "\n\t>> ");
        }
        else if (choice == 1) {
            console.log();
            for (var i = 0; i < membergrp.detailarr.length; i++) {
                console.log(membergrp.detailarr[i].getDetails());

            }

            choice = input.question("\nHi " + name[0].toUpperCase() + name.slice(1, 5) + ", " + "please select your choice:"
                + "\n\t1. Display all members' information"
                + "\n\t2. Display member information"
                + "\n\t3. Add new member"
                + "\n\t4. Update points earned"
                + "\n\t5. Statistics"
                + "\n\t6. Exit "
                + "\n\t>> ");

        }
        else if (choice == 2) {
            // asks for member name
            var member_name = input.question("Please enter member\'s name: ");
            // checks if member exists

            if (membergrp.testforname(member_name) == true) {
                for (var i = 0; i < membergrp.detailarr.length; i++) {
                    if (member_name.toLowerCase() == membergrp.detailarr[i].name.toLowerCase()) {
                        console.log(membergrp.detailarr[i].getDetails());
                    }
                }
            }
            else {
                console.log("Member does not exist.");
            }
            choice = input.question("\nHi " + name[0].toUpperCase() + name.slice(1, 5) + ", " + "please select your choice:"
                + "\n\t1. Display all members' information"
                + "\n\t2. Display member information"
                + "\n\t3. Add new member"
                + "\n\t4. Update points earned"
                + "\n\t5. Statistics"
                + "\n\t6. Exit "
                + "\n\t>> ");

        }
        else if (choice == 3) {
            var member_name = input.question("Please enter member\'s name: ");
            // checks if member is already in the data base this is so that only new member can be entered
            while (true) {
                // checks for any blank input and numerical input (additional feature)
                if (member_name == "" || isNaN(member_name) != true) {
                    console.log("\nPlease enter a valid input.");
                    member_name = input.question("Please enter member\'s name: ");
                }
                else if (membergrp.testforname(member_name) == true) {
                    console.log("\nMember's name already exists in database. Please enter a new name");
                    member_name = input.question("Please enter member\'s name: ");

                }
                else {
                    break;
                }
            }
            var member_dob = input.question("Please enter member\'s date of birth: ");
            // adds member to array(detailarr)
            membergrp.addmember(member_name, member_dob);

            choice = input.question("\nHi " + name[0].toUpperCase() + name.slice(1, 5) + ", " + "please select your choice:"
                + "\n\t1. Display all members' information"
                + "\n\t2. Display member information"
                + "\n\t3. Add new member"
                + "\n\t4. Update points earned"
                + "\n\t5. Statistics"
                + "\n\t6. Exit "
                + "\n\t>> ");
        }



        else if (choice == 4) {
            var member_name = input.question("Please enter member\'s name: ");
            // checks if input member_name is a member 
            if (membergrp.testforname(member_name) == true) {
                var amt_spent = input.question("Please enter amount spent: ");
                // amount spent should be floating pint numbers
                amt_spent = parseFloat(amt_spent).toFixed(2)
                // initialize variable additional_pts
                var additional_pts = 0;
                // validate amount spent
                while (true) {
                    if (isNaN(amt_spent) || amt_spent < 0) {
                        console.log("Please enter a valid amount.");
                        amt_spent = input.question("Please enter amount spent: ");
                        amt_spent = parseFloat(amt_spent).toFixed(2);
                    }
                    else {
                        break;
                    }
                }
                if (amt_spent == 0) {
                    additional_pts += 0;
                }
                else if (amt_spent <= 50) {
                    additional_pts += 10;

                }
                else if (amt_spent >= 50.01 && amt_spent <= 100) {
                    additional_pts += 50;

                }
                else if (amt_spent >= 100.01 && amt_spent <= 200) {
                    additional_pts += 100;

                }
                else if (amt_spent >= 200.01 && amt_spent <= 500) {
                    additional_pts += 200;

                }
                else if (amt_spent >= 500.01 && amt_spent <= 1000) {
                    additional_pts += 500;

                }
                else if (amt_spent >= 1000.01 && amt_spent <= 2500) {
                    additional_pts += 1000;

                }
                else if (amt_spent >= 2500.01) {
                    additional_pts += 2000;

                }
                membergrp.detailarr[membergrp.findindex(member_name)].points = (membergrp.updatepoints(member_name) + additional_pts).toString();
                membergrp.detailarr[membergrp.findindex(member_name)].m_type = membergrp.change_mtype(member_name);
                // display details of the member (additional feature)
                console.log(membergrp.detailarr[membergrp.findindex(member_name)].getDetails());
            }
            else {
                console.log("Member does not exist.");
            }

            choice = input.question("\nHi " + name[0].toUpperCase() + name.slice(1, 5) + ", " + "please select your choice:"
                + "\n\t1. Display all members' information"
                + "\n\t2. Display member information"
                + "\n\t3. Add new member"
                + "\n\t4. Update points earned"
                + "\n\t5. Statistics"
                + "\n\t6. Exit "
                + "\n\t>> ");
        }
        else if (choice == 5) {
            // prompts for a sub menu
            var subchoice = input.question("\t\tPlease select an option from the sub-menu:"
                + "\n\t\t1. Display names of (all) a certain type of members only."
                + "\n\t\t2. Display the name of the youngest and oldest member in the system."
                + "\n\t\t3. Display the name of members with the highest and lowest points earned."
                + "\n\t\t4. Display total number of members in each membership type."
                + "\n\t\t5. Display the total points in each membership type."
                + "\n\t\t6. Return to main-menu"
                + "\n\t\t>> ");
            // validation is done for subchoice menu (additional feature)
            while (isNaN(subchoice) || subchoice <= 0 || subchoice >= 7 || subchoice == " " || validInput.test(subchoice) || subchoice == 1 || subchoice == 2 || subchoice == 3 || subchoice == 4 || subchoice == 5) {
                if (isNaN(subchoice) || subchoice <= 0 || subchoice >= 7 || subchoice == " " || validInput.test(subchoice)) {
                    console.log("\t\tPlease enter a valid input.");
                    console.log();
                    subchoice = input.question("\t\tPlease select an option from the sub-menu:"
                        + "\n\t\t1. Display names of (all) a certain type of members only."
                        + "\n\t\t2. Display the name of the youngest and oldest member in the system."
                        + "\n\t\t3. Display the name of members with the highest and lowest points earned."
                        + "\n\t\t4. Display total number of members in each membership type."
                        + "\n\t\t5. Display the total points in each membership type."
                        + "\n\t\t6. Return to main-menu"
                        + "\n\t\t>> ");
                }

                else if (subchoice == 1) {
                    var whatis_mtype = input.question("\t\tEnter Membership Type: ");
                    // checks if a valid membership type is keyed in
                    while (true) {
                        if (whatis_mtype.toLowerCase() != "ruby" && whatis_mtype.toLowerCase() != "gold" && whatis_mtype.toLowerCase() != "platinum" && whatis_mtype.toLowerCase() != "diamond") {
                            console.log("\t\tPlease enter a valid membership type.");
                            whatis_mtype = input.question("\n\t\tEnter Membership Type: ");

                        }
                        else {
                            break;
                        }

                    }
                    // checks if membership type entered(whatis_mtype) exists in array(detailarr)
                    if (membergrp.test_mtype(whatis_mtype) == true) {
                        for (var i = 0; i < membergrp.detailarr.length; i++) {
                            if (whatis_mtype.toLowerCase() == membergrp.detailarr[i].m_type.toLowerCase()) {
                                console.log("\t\tMember(s) of membership type " + whatis_mtype + ": " + membergrp.detailarr[i].name + ".");
                            }
                        }
                    }
                    // blank output if no member has a certain membership type
                    else {
                        console.log("\t\tMember(s) of membership type " + whatis_mtype + ": ");

                    }
                    subchoice = input.question("\n\t\tPlease select an option from the sub-menu:"
                        + "\n\t\t1. Display names of (all) a certain type of members only."
                        + "\n\t\t2. Display the name of the youngest and oldest member in the system."
                        + "\n\t\t3. Display the name of members with the highest and lowest points earned."
                        + "\n\t\t4. Display total number of members in each membership type."
                        + "\n\t\t5. Display the total points in each membership type."
                        + "\n\t\t6. Return to main-menu"
                        + "\n\t\t>> ");

                }
                else if (subchoice == 2) {
                    // create array to  store all the date of birth
                    var dobArray = [];
                    for (var i = 0; i < membergrp.detailarr.length; i++) {
                        dobArray.push(parseInt(membergrp.detailarr[i].date_ob.slice(6, 11)));
                    }
                    // loop for checking youngest member 
                    for (var i = 0; i < dobArray.length; i++) {
                        var young = Math.max(...dobArray);
                        if (dobArray[i] == young) {
                            console.log("\t\tYoungest member: " + membergrp.detailarr[i].name);
                        }
                    }
                    // loop for checking oldest member
                    for (var i = 0; i < dobArray.length; i++) {
                        var old = Math.min(...dobArray);
                        if (dobArray[i] == old) {
                            console.log("\t\tOldest member: " + membergrp.detailarr[i].name);
                        }
                    }

                    subchoice = input.question("\n\t\tPlease select an option from the sub-menu:"
                        + "\n\t\t1. Display names of (all) a certain type of members only."
                        + "\n\t\t2. Display the name of the youngest and oldest member in the system."
                        + "\n\t\t3. Display the name of members with the highest and lowest points earned."
                        + "\n\t\t4. Display total number of members in each membership type."
                        + "\n\t\t5. Display the total points in each membership type."
                        + "\n\t\t6. Return to main-menu"
                        + "\n\t\t>> ");
                }
                else if (subchoice == 3) {
                    // create array to  store all the date of birth
                    var pointsArray = [];
                    for (var i = 0; i < membergrp.detailarr.length; i++) {
                        pointsArray.push(parseInt(membergrp.detailarr[i].points));
                    }
                    // loop for checking youngest member 
                    for (var i = 0; i < pointsArray.length; i++) {
                        var maxpoint = Math.max(...pointsArray);
                        if (pointsArray[i] == maxpoint) {
                            console.log("\t\tHighest member: " + membergrp.detailarr[i].name);
                        }
                    }
                    // loop for checking oldest member
                    for (var i = 0; i < pointsArray.length; i++) {
                        var minpoint = Math.min(...pointsArray);
                        if (pointsArray[i] == minpoint) {
                            console.log("\t\tLowest member: " + membergrp.detailarr[i].name);
                        }
                    }

                    subchoice = input.question("\n\t\tPlease select an option from the sub-menu:"
                        + "\n\t\t1. Display names of (all) a certain type of members only."
                        + "\n\t\t2. Display the name of the youngest and oldest member in the system."
                        + "\n\t\t3. Display the name of members with the highest and lowest points earned."
                        + "\n\t\t4. Display total number of members in each membership type."
                        + "\n\t\t5. Display the total points in each membership type."
                        + "\n\t\t6. Return to main-menu"
                        + "\n\t\t>> ");

                }
                else if (subchoice == 4) {
                    console.log("\t\truby: " + membergrp.membercount("ruby"))
                    console.log("\t\tgold: " + membergrp.membercount("gold"))
                    console.log("\t\tplatinum: " + membergrp.membercount("platinum"))
                    console.log("\t\tdiamond: " + membergrp.membercount("diamond"))

                    subchoice = input.question("\n\t\tPlease select an option from the sub-menu:"
                        + "\n\t\t1. Display names of (all) a certain type of members only."
                        + "\n\t\t2. Display the name of the youngest and oldest member in the system."
                        + "\n\t\t3. Display the name of members with the highest and lowest points earned."
                        + "\n\t\t4. Display total number of members in each membership type."
                        + "\n\t\t5. Display the total points in each membership type."
                        + "\n\t\t6. Return to main-menu"
                        + "\n\t\t>> ");

                }
                else if (subchoice == 5) {
                    console.log("\t\truby: " + membergrp.member_totalpt("ruby"))
                    console.log("\t\tgold: " + membergrp.member_totalpt("gold"))
                    console.log("\t\tplatinum: " + membergrp.member_totalpt("platinum"))
                    console.log("\t\tdiamond: " + membergrp.member_totalpt("diamond"))

                    subchoice = input.question("\n\t\tPlease select an option from the sub-menu:"
                        + "\n\t\t1. Display names of (all) a certain type of members only."
                        + "\n\t\t2. Display the name of the youngest and oldest member in the system."
                        + "\n\t\t3. Display the name of members with the highest and lowest points earned."
                        + "\n\t\t4. Display total number of members in each membership type."
                        + "\n\t\t5. Display the total points in each membership type."
                        + "\n\t\t6. Return to main-menu"
                        + "\n\t\t>> ");
                }
            }
            choice = input.question("\nHi " + name[0].toUpperCase() + name.slice(1, 5) + ", " + "please select your choice:"
                + "\n\t1. Display all members' information"
                + "\n\t2. Display member information"
                + "\n\t3. Add new member"
                + "\n\t4. Update points earned"
                + "\n\t5. Statistics"
                + "\n\t6. Exit "
                + "\n\t>> ");
        }
    }
    console.log("Thank you & goodbye!");
    break;

}









