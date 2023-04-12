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
console.log(MONDAY)  //accessing the key and values of the map

//Get method - used to retrive values in a map. 
const noon = MONDAY.get(12);
console.log('At noon i will ' + noon); //returns at noon i will take lunch

const evening = MONDAY.get(9);
console.log(`In the evening i will ${evening}`)

//Has method - treturn true if the value provided by the key exist

//Does our map has 4?
const hasFour = MONDAY.has(4);
console.log(`Does our map has 4? ${hasFour}`)  // returns true


//Does our map has 6?
const hasSix = MONDAY.has(6);
console.log(`Does our map has 6? ${hasSix}`); //returns false

//check size property
const mondaySize = MONDAY.size;
console.log(`The size of the map is ${mondaySize}`);

//Delete Method
console.log(`Dod we successfully delete 12 ${MONDAY.delete(12)}`);  //returns true
console.log(`Dod we successfully delete 3 ${MONDAY.delete(3)}`); //returns false

const mondaySize1 = MONDAY.size;
console.log(`The size of the map is ${mondaySize1}`); //the size will then be decremented by 1

//Clear method
MONDAY.clear()
console.log(`The size of of of our map is ${MONDAY.size}`)


