let posts = [
    { tittle: "Technology", body: "AI is taking the Tech" },
    { tittle: "Web dev", body: "Node taking the backend" },
    { tittle: "cloud", body: "Azure cloud" },
    { tittle: "Machine learning", body: "computer knowledge" }
]

function getPost() {
    setTimeout(() => {
        let output = ""
        posts.forEach((post) => {
            output += `<li>${post.tittle} </li>`
        })
        document.body.innerHTML = output
    },2000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const err = false
            if (!err) {
                 resolve()
            }
            else {
                reject("Opps. something went wrong!!!")
            }
            
        },4000)
    })
}


async function init() {
    await createPost({ tittle: 'IOT', body: 'for devices' })
        .then(getPost).catch(err => console.log(err))
    getPost
}

init()
