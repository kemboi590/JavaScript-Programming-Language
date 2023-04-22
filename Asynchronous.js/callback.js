let posts = [
    { tittle: "Technology", body: "AI is taking the Tech" },
    {tittle: "Web dev", body: "Node taking the backend"}

]

function getPost() {
    let output = ''
    setTimeout(() => {
        posts.forEach((post) => {
            output += `<li>${post.tittle} </li>`
        })
        document.body.innerHTML = output
    },1000)
}
getPost()

function createPost(post , callback) {
    setTimeout(() => {
        posts.push(post)
      callback()  
    },8000)
}

createPost({tittle: "IOT", body: "tech for devices"}, getPost)