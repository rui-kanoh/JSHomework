'use strict'

let str = ''
str = window.prompt('何か文字を入力してください')
const strs = str.split(' ')

const strHash = new Map()
strs.forEach(item => {
  if (strHash.has(item)) {
    let number = strHash.get(item)
    ++number
    strHash.set(item, number)
  } else {
    strHash.set(item, 1)
  }
})

let message = '{'
let size = strHash.size
for (const [key, value] of strHash) {
  message += key + ':' + value.toString()
  --size
  if (size !== 0) {
    message += ','
  }
}

message += '}'

console.log(message)
