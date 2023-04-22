const Tech=  [
    { tittle: 'Web dev', about: 'html, css' },
    { tittle: 'IOT ', about: 'devices' },
    {tittle: 'cloud', about: 'azure'}
    
]
let errorMessage = 'Opps, we ran into a problem'
function getTech() {
    let stack = ''
    setTimeout(() => {
        
        Tech.forEach((tech) => {
            stack += `<li>${tech.tittle}</li>`
        })
        document.body.innerHTML = stack
        console.log('success');
    }, 2000)
   
}

function createTech(tech) {
  
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Tech.push(tech)
            let err = false
            if (!err) {
                resolve()
            }
            else {
                reject(errorMessage)
            }
        },6000)


    })
}
createTech({ tittle: "Cyber security" }).then(getTech).catch((err) => {
    
    document.body.innerHTML = errorMessage

    console.log(errorMessage)

}
)