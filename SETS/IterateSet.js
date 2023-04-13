
//item to be added to a set
/*
1. chocolate
2.vanilla
3.vnnilla
4.Strawberry
5.cofee
6.chocolate
*/

const sweetTaste = new Set();
sweetTaste.add('chocolate').add('vanila').add('vanila').add('strawberry').add('cofee').add('chocolate')

//Iterate the set
//we use the values method and next method
//what is our second value in the set?
const sweetTasteValues = sweetTaste.values();
sweetTasteValues.next() // will be our first set value

const secondValue = sweetTasteValues.next().value;
console.log(`Our second value of the set is: ${secondValue}`);