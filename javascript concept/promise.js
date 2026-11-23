// promise is used to execute the asynchronous task.
// state: pending, fulfilled, rejected 
// pending is initial state 
// fulfilled state: resolve 
// rejected: reject 

const promise = new Promise((resolve, reject) => {
    const success = false;
    if (success){
        setTimeout(() => {
            resolve("Task resolved")
        }, 3000)
    } else {
        setTimeout(() => {
            reject(new Error("Task rejected"))
        }, 2000)
    }
})

promise.
then((result) => console.log(result)).
catch(error => console.log(error.message)).
finally(() => {
    console.log("finished execution")
})


// promise chaining: promise returns new promise in then
function square(n){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(n**2), 1000)
    })
}

square(5).then(result => {
    console.log('step one: ', result)
    return square(result)
})
.then(result => {
    console.log("step 2: ", result)
    return square(result)
}).
then(result => {
    console.log("step 3: ", result)
    return square(result)
}).
then(result => {
    console.log("step 4:", result)
})
.catch(error => console.log(error))

// fetch order is first promise 
// after fetching order we notice that the product id is only present we need product detail
// inside the then statement of product fetch we can fetch the product by id and get the product detail

// running promise in parallel
function timeTaken(ms, processId){
    return new Promise(resolve => setTimeout((resolve(`${processId} took ${ms}`)), ms));
}

Promise.all([
    timeTaken(1000, 'A'),
    timeTaken(2000, 'B'),
    timeTaken(1500, 'C')
]).then(result => console.log(result))

// async and await
async function hello(){
    return "hello"
}
// without resolving promise
const result = hello();
console.log(result)

// resolve promise 
result.then(result => console.log(`after promise resolve: Greeting ${result}`))

const response = await hello();
console.log(response)

try {
    const result = await hello();
    console.log("ok", result)
} catch(error){
    console.log("in error: ", error)
} finally {
    console.log("finally")
}

function getData(isSuccess){
    return new Promise((resolve, reject) => {
        if (isSuccess){
            setTimeout(() => {
                resolve("success")
            })
        } else {
            setTimeout(() => {
                reject("Error")
            })
        }
    })
}

try {
    const response = await getData(false)
    console.log(response)
} catch(error){
    console.log(error)
} finally {
    console.log('done')
}


// http and rest apis 
// apis => restful way 

// http => request and response 
// request parts 
// 1. method: GET POST put patch delete
// 2. url : /product/id /products 
// headers: extra information : like authrization token, content type 
// payload/body: data sent to the server by the client {'title': 'test'}

// response
// status code: 200 success 400 client error 500 internal server server 
// 200 ok 
// 201 created 
// 204 not content 

// 400 bad request 
// 401 unauthorized 
// 403 forbidden 
// 404 not found 
// headers 
// body 


// fetch api 
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
    return response.json()
})
.then(data => console.log(data))
.catch(error => console.log(error))

       

async function createPost(){
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: 'test',
                body:'test body',
                userId: 2
            })
        }
    )
    const data = await response.json();
    console.log(data)
    console.log(response.status)
}
createPost()