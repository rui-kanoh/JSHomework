'use strict'

const max = 100
const answer = Math.floor(Math.random() * max)
console.log('0-100で数字を当てて')

let message = '数字を入力して下さい。'
for (let i = 1; i <= max; ++i) {
  const str = window.prompt(message)
  const number = Number.parseInt(str)
  console.log(number.toString())
  if (number === answer) {
    console.log('正解!・・・' + i.toString() + '回目で当てました')
    break
  }

  if (number < answer) {
    message = 'もっと上'
  } else {
    message = 'もっと下'
  }

  if (i === max) {
    console.log(max.toString() + '回やっても当たりませんでした')
  }
}
