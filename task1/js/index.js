'use strict'

const str = window.prompt('数字を入力してください')
const number = Number.parseInt(str)
let message = ''
for (let i = 1; i <= number; ++i) {
  if (i % 3 === 0 || i % 5 === 0) {
    if (i % 3 === 0) {
      message += 'Fizz'
    }

    if (i % 5 === 0) {
      message += 'Buzz'
    }
  } else {
    message += i.toString()
  }

  message += ','
}

console.log(message)
