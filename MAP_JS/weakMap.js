const Nairobi = { Nairobi: 'Kasarani' };
const Kerugoya = { Kerugoya: 'kutus' }
const Nandi = { Nandi: "Kapsabet" }
const Eldoret = { Eldoret: 'Kapseret' }

//set method in a weakMap
const cities = new WeakMap();
cities.set(Nairobi, "Kasarani");
cities.set(Kerugoya, "Kutus");
cities.set(Nandi, "Kapsabet");
cities.set(Eldoret, "Kapseret")

// get method
//get the value of key Nairobi
const NairobiVal = cities.get(Nairobi)
console.log(`The value of Nairobi is : ${NairobiVal}`);

//get the value of the key Nandi
const NandiVal = cities.get(Nandi);
console.log(`The value of Nandi is : ${NandiVal}`);

// has method
const Muranga = {Muranga: "Kisesee"}
const searching = cities.has(Kerugoya);
console.log("Does the weak map has Kerugoya:", searching);

const searching2 = cities.has(Muranga);
console.log("Does the weak map has Muranga:", searching2);

//delete method

cities.delete(Eldoret)