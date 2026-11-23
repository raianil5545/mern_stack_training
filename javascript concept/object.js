const person = {
    name: 'John',
    age: 30,
    city: 'New York'
}

// console.log(person);
// console.log(person.name);
// console.log(person['age']);
// console.log(person['city']);

// person.name = 'Jane';
// console.log(person.name);

// person['age'] = 31;
// console.log(person['age']);

// person['city'] = 'Los Angeles';
// console.log(person['city']);

// console.log(person);

// // add and delete properties
// person.email = 'john@email.com';
// console.log(person);

// delete person.city;
// console.log(person);

// // check if property exists
// console.log('age' in person);
// console.log(Object.hasOwn(person, 'age'));
// console.log(Object.hasOwn(person, 'city'));

// // nested object
// const user = {
//     name: 'Anil',
//     age: 22,
//     address: {
//         city: 'Kathmandu',
//         country: 'Nepal'
//     }
// }

// console.log(user);
// console.log(user.address.city);
// console.log(user['address']['country']);

// user.address.city = 'Pokhara';
// console.log(user.address.city);

// // optional chaining and nullish coalescing
// console.log(user.address?.city);
// console.log(user.contact?.phone);
// console.log(user.phone ?? 'N/A');

// const product = {
//     title: 'Product 1',
//     price: 100,
//     quantity: 10,
//     getPrice() {
//         return this.price * this.quantity;
//     },
//     getItemInfo(){
//         return `${this.title} costs ${this.price} per item`;
//     }
// }

// console.log(product.getPrice());
// console.log(product.getItemInfo());

// // object keys, values and entries
// console.log(Object.keys(product));
// console.log(Object.values(product));
// console.log(Object.entries(product));

// // shorthand property and computed key
// const name = 'Sita';
// const age = 20;
// const roleKey = 'role';

// const student = {
//     name,
//     age,
//     [roleKey]: 'student'
// }
// console.log(student);

// // object assign
// const updatedProduct = Object.assign({}, product, { price: 200 });
// console.log(updatedProduct);
// console.log(product);

// // shallow copy vs deep copy
// const shallowCopy = {...product};
// console.log(shallowCopy);

// shallowCopy.title = 'Product 2';
// console.log(shallowCopy);
// console.log(product);

// // shallow copy problem with nested object
// const original = {
//     title: 'Laptop',
//     details: {
//         color: 'black'
//     }
// }

// const nestedShallowCopy = {...original};
// nestedShallowCopy.details.color = 'red';
// console.log(nestedShallowCopy);
// console.log(original);

// // deep copy using JSON.parse(JSON.stringify())
// // works for plain data but removes functions
// const jsonCopy = JSON.parse(JSON.stringify(product));
// jsonCopy.title = 'Product 3';
// console.log('------------jsonCopy--------------------');
// console.log(jsonCopy);
// console.log(product);

// // deep copy for nested object without functions
// const nestedDeepCopy = structuredClone(original);
// nestedDeepCopy.details.color = 'blue';
// console.log(nestedDeepCopy);
// console.log(original);

// // deep copy using structuredClone does not work if object has functions
// // const structuredCloneCopy = structuredClone(product);
// // structuredCloneCopy.title = 'Product 4';
// // console.log(structuredCloneCopy);
// // console.log(product);

// // desctructuring
// const {title, price, quantity} = product;
// console.log(`${title} costs ${price} per item in the destructured object`);

// // destructuring with rename and default value
// const {title: productTitle, discount = 0} = product;
// console.log(productTitle, discount);

// // nested destructuring
// const {address: {city, country}} = user;
// console.log(city, country);
