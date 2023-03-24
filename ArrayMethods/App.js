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
*/

let items = [
    { name: "cake", price:"100" },
    { name: "Book", price: "80" },
    { name: "plate", price: "120" },
    { name: "bag", price: "800" },
    { name: "cooking oil", price: "400" },
    {name: "bar soap", price: "1000"}
]

let filteredItems = items.filter((item) => {
    return item.price >= 100 && item.price <=400
})

console.log(filteredItems)

let findItem = items.filter((itemlist) => {
    return itemlist.name==="bag" && itemlist.name==="Book"
})

console.log(findItem)
