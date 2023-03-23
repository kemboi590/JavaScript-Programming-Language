

//A system to check if you are elligiable for HELB loan

let age = prompt("Enter your age:");
let earnings = prompt("Enter your family annual earnings")
let yourGrade = prompt("Enter you KCSE Grade")

if((age<18) && (earnings < 100000) && (yourGrade == "A" ||  yourGrade == "B")) {
    console.log("You are young")
} else if ((age >= 18) && (earnings > 100000) && (yourGrade == "A" || yourGrade == "B")) {
    console.log("You have adequate annual earnings")
} else if ((age >= 18) && (earnings < 100000) && (yourGrade !== "A") || yourGrade !== "B") {
    console.log("Your grade did not meet the minimum grade")
} else {
    console.log("Disbursement in progress")
}
if(age <= 18) {
    console.log("you are not allowed to vote");
} else {
    console.log("you can vote")
}








// switch case

const day = prompt("Enter the day of the week:")
switch (day) {
    case "Monday":
        console.log("Do web development")
        break
    case "Tuesday":
        console.log("Do AI")
        break
    case "Wednesday":
        console.log("Do Cloud computing")
        break
    case "Thursday":
        console.log("Do Ml")
        break
    case "Friday":
        console.log("Take a break")
        break
    default:
        console.log("it has been a busy week")
 }

 





let num= 15
if (num > 10) {
    console.log(`the number is ${num}`) //more than 10 it will print
}
else {
    console.log(`the number is ${num}`) //less than 10 it will  print
}








if ("15" === 15) {
    console.log("they are equal")
}
else {
    console.log("they are not equal")
}




//if
//else
//else if




//Grading System

let grade = 1003

if (grade >= 90 && grade <=100) {
    console.log("A")
}
else if (grade >= 80 &&  grade <= 89) {
    console.log("B")
}
else if (grade >= 70 && grade <= 79) {
    console.log("C")
}
else if (grade >= 60 && grade <= 69) {
    console.log("D")
}
else if (grade < 60 && grade >=0) {
    console.log("E")
}
else {
    console.log("INVALID GRADE")
}



//For loop

let sum = 0
for (let i = 0; i <= 30; i++){
    console.log(sum)
    sum +=1
}



//while loop

 let mynum = 0

while (mynum < 10) {
    console.log("I have passion for JS")
    mynum++;
}





//initialization
let a = 1
do {
    console.log(i)
    a++
} while (a <= 5) 






