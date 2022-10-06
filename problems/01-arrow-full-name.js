/***********************************************************************
Write a function using fat arrow syntax, `arrowGetFullName(person)` that takes in
a person object and returns a string containing their full name.

Assign the below function to a variable using the const keyword. Using the const
keyword will allow any value assigned to that variable protection from being
reassigned within that scope.

Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
arrowGetFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
arrowGetFullName(p2); // => 'Charlie Brown'

***********************************************************************/


// takes in object (person) -- will all ojbects contain 'firstName' and 'lastName' key?
// capture the first name, capture the last name
// concat those two
// return a string containing the full name

// let value = 'another string'    <-------- string template literal syntax
// console.log(`string ${value}`)

const arrowGetFullName = (obj) => {
  // console.log(obj)
  let { firstName, lastName } = obj
  // console.log(firstName, lastName)
  return `${firstName} ${lastName}`
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowGetFullName;
} catch (e) {
  module.exports = null;
}
