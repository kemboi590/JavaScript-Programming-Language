//fetch data useing async await

// async function fetchUsers() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()
//     let usernames = ''
//     data.forEach(user => {
//         usernames += user.username + ", "
//     });
//     document.body.innerHTML = usernames
//     console.log(usernames);
// }
// fetchUsers()

let nameUsed = document.getElementById('names')
let userNames = document.getElementById('usernames')
let Email = document.getElementById('emails')
let userAddress = document.getElementById('address')
let userStreet = document.getElementById('street')
let zipCode = document.getElementById('zipcode')


async function fetchUsers() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(res);
    let data = await res.json()
    let name = ''
    let usernames = ''
    let email = ''
    let address = ''
    let street = ''
    let zipcode = ''
    
    
    data.forEach((user) => {
        name += `<h4> ${user.name} </h4>`
        usernames += `<p>${user.username} </p>` 
        email += `<p> ${user.email} </p>`
        address += `<p> ${user.address.city} </p>`
        street += `<p> ${user.address.street} </p>`
        zipcode += `<p> ${user.address.zipcode} </p>`

    })
   
    userNames.innerHTML = usernames
    nameUsed.innerHTML = name
    Email.innerHTML = email
    userAddress.innerHTML = address 
    userStreet.innerHTML = street
    zipCode.innerHTML = zipcode
    console.log(data);
   
}

fetchUsers()