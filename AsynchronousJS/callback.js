const Tech=  [
    { tittle: 'Web dev', about: 'html, css' },
    { tittle: 'IOT ', about: 'devices' },
    {tittle: 'cloud', about: 'azure'}
    
]

function getTech() {
    let stack = ''
    setTimeout(() => {
        
        Tech.forEach((tech) => {
            stack += `<li>${tech.tittle}</li>`
        })
        document.body.innerHTML = stack
        console.log(stack);
    }, 2000)
   
}

function createTech(tech, callback) {
    setTimeout(() => {
        Tech.push(tech)
        callback()
      },4000)
}
createTech({tittle:'cyber security'},getTech)
