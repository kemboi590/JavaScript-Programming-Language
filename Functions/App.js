//A function takes 2 parameters and when called it takes 2 arguements
function product(a, b) {
    return a * b
}
 console.log(product(4,7))

//Hoisting 
let w = myfunction(4, 3)
console.log(w)
function myfunction(x, y) {
     return x*y
}

//using a function to perfom a set of opertation
function AreaOfCircle(r) {
     //3.142*r*r
    return 22/7*r*r
}
console.log(AreaOfCircle(7))


// using functions as a variable (FUNCTION EXPRESSION)
let mathematics= AreaOfCircle(7)/2
console.log(mathematics)

function variableFunction() {
    let age = true;
    console.log(typeof age)
    console.log(age)
}
variableFunction()

//you can reuse a name of a variable inside different funtions
function variableFunction2() {
    let age = 5;
    console.log(typeof age)
    console.log(age)
}
variableFunction2()

