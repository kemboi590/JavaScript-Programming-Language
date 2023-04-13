
//item to be added to a set
/*
1. chocolate
2.vanilla
3.vanilla
4.Strawberry
5.cofee
6.chocolate
*/

const sweetTaste = new Set();
sweetTaste.add('chocolate').add('vanila').add('vanila').add('strawberry').add('cofee').add('chocolate')

//we use the entries method to store all the entries of a set
//to get the net entry, we use the next() and to get the value we use he .value extension
//what is the third entry of the set?
const sweetTasteEntries = sweetTaste.entries()
sweetTasteEntries.next()
sweetTasteEntries.next()
const ThirdEntry = sweetTasteEntries.next().value
console.log(`The third entry of the set is: ${ThirdEntry}`); //returns the value twice in an array

//forEach method
//it loops through the set and log out depending on the conditions
sweetTaste.forEach((value) => {
    if (value !== 'chocolate') {
        console.log("Sweet taste:", value);
    }
})