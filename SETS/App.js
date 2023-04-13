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
console.log(sweetTaste); //logs out values and avoids duplicates

//has method to ceck if he value exist in a set

const hasCake = sweetTaste.has('cake')
console.log(`Does our set has a cake? ${hasCake}`); //returns false

const hasCofee = sweetTaste.has('cofee');
console.log(`Does our set has a cofee? ${hasCofee}`); //returns true


//checking the size of our set
//we use the size property
console.log(`Our set has ${sweetTaste.size} elements`); //returns 4 values

//dekete method.
//used to remove values from the set
const deleteCofee = sweetTaste.delete('cofee');
console.log(`Does our set has cofee ? ${sweetTaste.has('cofee')}`);

//clear method
//used to remove all the elements from the set
sweetTaste.clear();
console.log(`The new size of our set is ${sweetTaste.size}`);

