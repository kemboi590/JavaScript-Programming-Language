//object and values

const resone = {id: 1}
const restwo = {id: 2}
const resthree = {id : 3}
const resfour = {id: 4}
const resfive = { id: 5 }
//The weak set has 3 metods, add(), has() and delete()
//add()
const respondents = new WeakSet()
respondents.add(resone).add(restwo).add(resthree).add(resfour).add(resfive)
console.log("our respondents are:", respondents);

//has()
const hasfive = respondents.has(resfive)
console.log(`Does the Weak Set has id 5: ${hasfive}`);
const ressix = {id: 6}
const hassix = respondents.has(ressix)
console.log(`Does the Weak set has id 6 ? ${hassix}`);

//delet()
respondents.delete(resthree);
console.log("Does our weak set has resthree: ", respondents.has(resthree));

