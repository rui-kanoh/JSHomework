'use strict'

function recursive(number) {
  if (number !== 0) {
    return number + recursive(number - 1)
  } else {
    return 0
  }
}

let input = 0
input = window.prompt('何か数字を入力してください')
const inputNumber = Number.parseInt(input, 10)
console.log(recursive(inputNumber))
