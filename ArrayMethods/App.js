///ARRAY METHODS
/*
1. Filter()
2. Map()
3.Foreach
4.Reduce()
5.pop()
6.push()
7.shift()
8.unshift
9.some()
10.find()
11. every()
12.includes()
join()
*/
        //    --- FILTER METHOD ----
        // used to return all elements of an array that pass a certain test.
        //the test is defined in a callback function
let items = [
    { name: "cake", price:"100" },
    { name: "Book", price: "80" },
    { name: "plate", price: "120" },
    { name: "bag", price: "800" },
    { name: "cooking oil", price: "400" },
    { name: "bar soap", price: "1000" },
    { name: "Unga", price: "70" },
    {name: "Pan", price: "500"}
]

let filteredItems = items.filter((item) => {
    return item.price >= 50 && item.price <=400
})

console.log(filteredItems)

let findItem = items.filter((itemlist) => {
    return itemlist.name==="bag" && itemlist.name==="Book"
})

console.log(findItem)




        //example 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ArrNumbers = numbers.filter(function (num) {
    
    return num % 2 === 0
  
});
console.log(ArrNumbers);




           // ---JOIN METHOD -----
let myArray1 = ['bannana', 'apple', 'lemon', 'orange'];
let delimiter = ' , ';
let myString = myArray1.join(delimiter);
console.log(myString);


let myArray2 = [1, 2, 3, 4, 5, 6];
console.log(typeof(myArray2));  // will return an object
let joining = ', ';
let myString2 = myArray2.join(joining);
console.log(myString2); 
console.log(typeof(myString2)); // will return a string

