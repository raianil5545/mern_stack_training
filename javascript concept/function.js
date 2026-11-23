// // function declaration: hoisting is supported here 
// greetName("John doe");

// function greetName(name){
//     console.log(`Hello ${name}`);
// }

// // anonymous function 
// // greet("Jane Doe") // doesn't support the hoisting here so the function declaration and definition must be at the top.
// const greet = function(name){
//     console.log(`Hello from greet function ${name}`);
// }
// greet("Jane Doe");

// // arrow function
// const greetArr = (name) => {
// console.log(`Hello from the arrow function: ${name}`)
// }
// greetArr("Arrow name")


// rest paramteter 
// function sum(...nums){
//     let total = 0;
//     for (const num of nums){
//         total += num;
//     }
//     return total
// }
// console.log(sum(5, 10, 20, 40, 50))

// an arrow function to find the mean of the values with the rest parameter 
// const mean = (...nums) => {
//     const total = nums.reduce((acc, num) => acc+num, 0)
//     return total / nums.length;
// }


function calculateMean(...nums){
    let sum = 0;
    for (const index in nums){
        sum += nums[index];
    }
    return sum / nums.length;
}
console.log(calculateMean(10, 20, 30, 40))