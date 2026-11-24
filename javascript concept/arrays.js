// arrays are ordered list of values
// arrays are zero indexed
// arrays are mutable
// arrays are dynamic
// arrays are heterogeneous
// arrays are iterable
const fruits = new Array('apple', 'banana', 'mango')
// const fruits = ['apple', 'banana', 'mango']
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits.length);


// update the value of an array
fruits[0] = 'orange';
console.log(fruits);

// add a new value to the array
fruits.push('pineapple');
console.log(fruits);

// add a new value to the beginning of the array
fruits.unshift('kiwi');
console.log(fruits);

// remove the last value from the array
fruits.pop();
console.log(fruits);

// remove the first value from the array
fruits.shift();
console.log(fruits);

// remove the value at a specific index
fruits.splice(1, 1);
console.log(fruits);

// check if a value exists in the array
console.log(fruits.includes('banana'));
console.log(fruits.includes('orange'));

console.log('------------indexOf--------------------');
console.log(fruits);
// check if a value exists in the array and return the index of the first occurrence
console.log(fruits.indexOf('banana'));
console.log(fruits.indexOf('orange'));

// check if a value exists in the array and return the index of the last occurrence
console.log(fruits.lastIndexOf('banana'));
console.log(fruits.lastIndexOf('orange'));

// loop through the array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// loop through the array using forEach
fruits.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit}`);
});

// loop through the array using for...of
for (const fruit of fruits) {
    console.log(fruit);
}

// loop through the array using for...in
for (const index in fruits) {
    console.log(`${parseInt(index) + 1}. ${fruits[index]}`);
}


// number array 
const numbers = [10, 20, 30, 40, 50];

// map: transform each element of the array and return a new array
console.log('------------map--------------------');
const doubled = numbers.map((num, index) => `${index + 1} ${num * 2}`);
console.log(doubled);
console.log(numbers);

// filter: filter the array and return a new array
console.log('------------filter--------------------');
const filtered = numbers.filter((num) => num > 30);
console.log(filtered);
console.log(numbers);

// reduce: reduce the array to a single value
console.log('------------reduce--------------------');
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
console.log(numbers);

// find: find the first element that satisfies the condition
console.log('------------find--------------------');
const found = numbers.find((num) => num > 30);
console.log(found);
console.log(numbers);

// findIndex: find the index of the first element that satisfies the condition
console.log('------------findIndex--------------------');
const foundIndex = numbers.findIndex((num) => num > 30);
console.log(foundIndex);
console.log(numbers);

// some: check if at least one element satisfies the condition
console.log('------------some--------------------');
const some = numbers.some((num) => num > 30);
console.log(some);
console.log(numbers);

// every: check if all elements satisfy the condition
console.log('------------every--------------------');
const every = numbers.every((num) => num > 30);
console.log(every);
console.log(numbers);


// slice: return a new array with the selected elements
console.log('------------slice--------------------');
const sliced = numbers.slice(1, 3);
console.log(sliced);
console.log(numbers);

// splice: add elements to the array and return the removed elements
console.log('------------splice--------------------');
const spliced = numbers.splice(1, 3, 60, 70, 80);
console.log(spliced);
console.log(numbers);


// spread operator: spread the elements of the array into a new array
console.log('------------spread operator--------------------');
const spreaded = [...numbers, 90, 100];
console.log(spreaded);
console.log(numbers);

// concat: concatenate two arrays and return a new array
console.log('------------concat--------------------');
const concatenated = numbers.concat([110, 120]);
console.log(concatenated);
console.log(numbers);

// sort and reverse change the original array
// use spread to keep original safe
console.log('------------sort--------------------');
const sortedAscending = [...numbers].sort((a, b) => a - b);
console.log(sortedAscending);
console.log(numbers);

// sort in descending order
const sortedDescending = [...numbers].sort((a, b) => b - a);
console.log(sortedDescending);
console.log(numbers);

// reverse: reverse the array
console.log('------------reverse--------------------');
const reversed = [...numbers].reverse();
console.log(reversed);
console.log(numbers);

// array destructuring
console.log('------------array destructuring--------------------');
const [first, second, ...rest] = numbers;
console.log(first);
console.log(second);
console.log(rest);

// array destructuring with skip values
const [firstItem, , thirdItem, ...remaining] = numbers;
console.log(firstItem);
console.log(thirdItem);
console.log(remaining);


// array with objects as real example for later use 
const users = [
    {id: 1, name: 'John', email: 'john@example.com', role: 'admin'},
    {id: 2, name: 'Jane', email: 'jane@example.com', role: 'staff'},
    {id: 3, name: 'Jim', email: 'jim@example.com', role: 'staff'},
]

// map: transform each element of the array and return a new array
console.log('------------map--------------------');
const names = users.map((user) => user.name);
console.log(names);

// filter
const adminUsers = users.filter((user) => user.role === 'admin');
console.log(adminUsers);

// find
const adminUser = users.find((user) => user.role === 'admin');
console.log(adminUser);

// findIndex
const adminUserIndex = users.findIndex((user) => user.role === 'admin');
console.log(adminUserIndex);

// reduce 
console.log('------------reduce count staff users--------------------');
const staffUserCount = users.reduce((acc, user) => user.role === 'staff' ? acc + 1 : acc, 0);
console.log(staffUserCount);

// Array.isArray: check if value is an array
console.log('------------Array.isArray--------------------');
console.log(Array.isArray(fruits));
console.log(Array.isArray(users));
console.log(Array.isArray('hello'));
console.log(Array.isArray({name: 'John'}));

// at: get value by index and also supports negative index
console.log('------------at--------------------');
const scores = [10, 20, 30, 40, 50];
console.log(scores.at(0));
console.log(scores.at(2));
console.log(scores.at(-1));
console.log(scores.at(-2));

// join: convert array to string
console.log('------------join--------------------');
console.log(fruits.join(', '));
console.log(fruits.join(' - '));
console.log(fruits.join(''));

// split: convert string to array
console.log('------------split--------------------');
const text = 'apple,banana,mango';
const splitFruits = text.split(',');
console.log(splitFruits);
console.log('hello world'.split(' '));

// flat: flatten nested array
console.log('------------flat--------------------');
const nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat());
console.log(nested.flat(2));

// flatMap: map then flatten one level
console.log('------------flatMap--------------------');
const flatMapped = users.flatMap((user) => [user.name, user.role]);
console.log(flatMapped);

// findLast and findLastIndex
console.log('------------findLast--------------------');
const values = [10, 25, 30, 45, 50];
const lastFound = values.findLast((num) => num > 30);
console.log(lastFound);

const lastFoundIndex = values.findLastIndex((num) => num > 30);
console.log(lastFoundIndex);