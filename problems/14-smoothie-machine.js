/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

// const smoothieMachine = (...args) => {
//   // let string = `I'm having a smoothie with ${[...args].join(' and ')}`
//   // let secondString = ''
//   let innerFunction = (...args2) => { //['milk']
//     // stringArray = stringArray.concat(args2)//'milk'
//     let firstPart = args
//     let theRest = [...args2]
//     let firstWord = theRest.shift()
//     console.log(firstWord, theRest.length)
//     if (theRest.length === 0) {
//       secondString += firstWord
//     } else {
//       secondString += firstWord + ' and ' + theRest.join(' and ') + ' and '
//     }
//     // string += secondString
//     return string + " and " + secondString
//   }
//   return innerFunction
// }
const smoothieMachine = (...args) => {
  let firstPart = [...args].join(' and ')
  let argArr = []
  let string = "I'm having a smoothie with"

  const banana = (...args2) => {
    argArr.push(...args2)
    if (!firstPart) {
      return string + ' ' + argArr.join(" and ");
    } else {
      return string + ' ' + firstPart + ' and ' + argArr.join(" and ");
    }
  }
  return banana
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
