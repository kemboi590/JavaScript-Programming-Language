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



//Enties method will return the key and value of a map in an array
const mapEntries = MONDAY.entries()
console.log(mapEntries); //will log out all the entries of a map

//lets access the fourth entry
mapEntries.next()     //will be first entry
mapEntries.next()     //will be second entry
mapEntries.next()     //will be third entry
let thirdEntry = mapEntries.next().value
console.log('The value of the third entry is :' , thirdEntry);
