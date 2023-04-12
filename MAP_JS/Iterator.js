//A to do list
//ON MONDAY
//6 am wake up
//8am go to library
//12am take lunch
//4pm have a rest

const MONDAY = new Map();
MONDAY.set(6, 'wake up');
MONDAY.set(8, 'Go to library');
MONDAY.set(12, 'Take lunch');
MONDAY.set(4, 'Have a rest');

//Iterating the map
//we can iterate the keys or the values
//iterate the keys
const MondayKeys = MONDAY.keys()
console.log(MondayKeys); //returns the keys in the map
//acces the first key
const firstKey = MondayKeys.next().value
console.log(`The fist key of the map is: ${firstKey}`);
//accessing the second Value of the map 

const mondayValue = MONDAY.values()
console.log(mondayValue); //Logs out all the values of the map
let firstValue = mondayValue.next().value //this will be the first value
console.log("first value is: ", firstValue); //wake up
let secondValue = mondayValue.next().value //this will be the second value
console.log("second value is : ", secondValue); //go to library
