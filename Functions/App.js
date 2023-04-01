//A function takes 2 parameters and when called it takes 2 arguements
/*
function product(a, b) {
    return a * b
}
 console.log(product(4,7))
*/

//Hoisting
/*
let w = myfunction(4, 3)
console.log(w)
function myfunction(x, y) {
     return x*y
}
*/
//using a function to perfom a set of opertation
/*
function AreaOfCircle(r) {
     //3.142*r*r
    return 22/7*r*r
}
console.log(AreaOfCircle(7))
*/

// using functions as a variable (FUNCTION EXPRESSION)

/*
let mathematics= AreaOfCircle(7)/2
console.log(mathematics)

function variableFunction() {
    let age = true;
    console.log(typeof age)
    console.log(age)
}
variableFunction()
*/

//you can reuse a name of a variable inside different funtions
/*
function variableFunction2() {
    let age = 5;
    console.log(typeof age)
    console.log(age)
}
variableFunction2()
*/


//types of functions
//1. Named Function
//A named function is a function that is declared with a name.

/*
 
function addNumbers(a, b) {
    return a+b
}
console.log(addNumbers(1, 2))


function sayHello(name) {
    console.log(`Hello ${name} you are employed`)
}
sayHello("Kemboi Brian")
sayHello("Kevin Wachira")

sayHello("Sussan Wanjiku")

sayHello("Delphine Nyamusi")

*/


//anonymous function
//An anonymous function is a function without a name.
// It can be declared and used like a regular function, but it does not have a name associated with it.

/*
let Hello = function () {
     console.log("Anonymous function")
}
Hello()
 */

//Arrow Function
//A arrow function is a shorter syntax for writing a function expression in JavaScript.
//It is an anonymous function, meaning it doesn’t have a name.


/*
let result = (a, b) => {
    return a*b
}
console.log(result(4, 4))

let result2 = () => {
    return "my name is Brian Kemboi"
}
console.log(result2())
*/


//callback function
//A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.

/* 
function CalculateSum(a, b, callback) {
    let result = a + b
    callback(result)
}

CalculateSum(2, 4, function (result) {
    console.log(result)
})

*/



/*
let age = parseInt(prompt("Enter Your age"));
let income = parseInt(prompt("Enter your family income"));
let grade = prompt("Enter your grade (A/B/C/D/E");

const checkElegibility =(age, income, grade)=>{

   if(age >= 18 && income < 100000 && (grade === "A" || grade ==="B") ){
       console.log("Your are eligible for loan")
   } else {
       console.log("You are not eligible for loan")
   }
}
checkElegibility(age, income, grade);


*/

/*
function checkVoters(age) {
    if (age >= 18) {
    console.log('You are eligible to vote.');
    } else {
    console.log('You are not eligible to vote.');
    }
    }

    checkVoters(17)
*/




// Write a program in JavaScript that uses an if-else statement and
// a function to check if someone is eligible to vote, given that the voting age is 18 years.

// function votingAge(age) {
//     if (age >= 18) {
//         return 'you are elligiable to vote'
//     }
//     else {
//         return 'you are not eligiable to vote'
//     }
// }


// console.log(votingAge(17));
// console.log(votingAge(18));
// console.log(votingAge(19));





// Write a program in JavaScript that uses an if-else statement and operators
//  to determine eligibility for a student loan.Requirements for eligibility
//  include being over 18 years old, achieving a grade of A or B,
//     and having a family income of less than 100, 000 shillings a year.


// const age = prompt("Enter your age")
// const earnings = prompt("Enter the annual earnings")
// const grade = prompt("Enter you Grade")
// if (age < 18 && earnings <= 100000 && (grade == "A" || grade == "B")) {

//     console.log("You cant be awarded because you are a kid");

// } else if (age >= 18 && earnings > 100000 && (grade == "A" || grade == "B")) {

//     console.log("You family earnings decline you eligibility");

// } else if (age >= 18 && earnings < 100000 && (grade === "C" || grade === "D")) {

//     console.log("You garde disqualifies you");

// } else {

//     console.log("Disbursement in progress");

// }






































