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
  return answerStr
}

const answerStr = createRandomValue()

const retryNum = 9
for (let i = 0; i < retryNum; ++i) {
  const str = window.prompt('4桁の数字は？')
  if (str === '') {
    console.log('終了します。')
    break
  }

  if (str.length !== 4) {
    console.log('入力値が4桁ではありません。')
    continue
  }

  let hit = 0
  let blow = 0
  for (let i = 0; i < str.length; ++i) {
    if (answerStr[i] === str[i]) {
      ++blow
    }

    for (const ans of answerStr) {
      if (ans === str[i]) {
        ++hit
      }
    }
  }

  if (blow === str.length) {
    console.log((i + 1).toString() + '回で正解!')
    break
  } else {
    console.log('外れ: ' + hit.toString() + 'Hits, ' + blow.toString() + 'Blow')
    if (i === retryNum - 1) {
      console.log('既定の回数を超えました。正解は' + answerStr + 'です。')
      break
    } else {
      continue
    }
  }
}
