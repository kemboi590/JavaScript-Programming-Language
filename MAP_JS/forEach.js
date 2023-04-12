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

//forEach method take in parametors that represents the key and values of a map
MONDAY.forEach((value, key) => {
    if (key === 12) {
        console.log(`If it is ${key} the its time to ${value}`);
    }
})

MONDAY.forEach((value, key) => {
    if (value === 'Have a rest') {
        console.log("you can " , value + " because it is at", key + "pm");
    }
})