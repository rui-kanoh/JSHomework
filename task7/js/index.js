'use strict'

function clamp(number, min, max) {
  if (number < min) {
    number = min
  } else if (number > max) {
    number = max
  }

  return number
}

function createRandomValue() {
  let first = Math.floor(Math.random() * 10)
  first = clamp(first, 0, 9)
  let second = Math.floor(Math.random() * 10)
  second = clamp(second, 0, 9)
  for (let i = 0; i < 10; ++i) {
    if (second !== first) {
      break
    }

    second += Math.floor(Math.random() * 20) - 10
    second = clamp(second, 0, 9)
  }

  let third = Math.floor(Math.random() * 10)
  third = clamp(third, 0, 9)
  for (let i = 0; i < 10; ++i) {
    if (third !== first && third !== second) {
      break
    }

    third += Math.floor(Math.random() * 20) - 10
    third = clamp(third, 0, 9)
  }

  let forth = Math.floor(Math.random() * 10)
  forth = clamp(forth, 0, 9)
  for (let i = 0; i < 10; ++i) {
    if (forth !== first && forth !== second && forth !== third) {
      break
    }

    forth += Math.floor(Math.random() * 20) - 10
    forth = clamp(forth, 0, 9)
  }

  const answerStr = first.toString() + second.toString() + third.toString() + forth.toString()
  const answer = Number.parseInt(answerStr)
  return answer
}

const answer = createRandomValue()
console.log(('0000' + answer.toString()).slice(-4))
