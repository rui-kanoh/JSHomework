'use strict'

function bubble(ary) {
  const array = Array.from(ary) // for deep copy
  const sortedArray = []

  const arrayLength = array.length
  for (let j = arrayLength; j > 0; --j) {
    for (let i = 0; i < array.length - 1; ++i) {
      if (array[i] > array[i + 1]) {
        const temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
      }
    }

    sortedArray.push(array.pop())
  }

  return sortedArray
}

function quickSub(ary, sorted) {
  if (ary.length === 0) {
    return sorted
  } else if (ary.length === 1) {
    sorted.push(ary[0])
    return sorted
  } else if (ary.length === 2) {
    sorted.push(ary[0] > ary[1] ? ary[0] : ary[1])
    sorted.push(ary[0] > ary[1] ? ary[1] : ary[0])
    return sorted
  }

  let pivot = 0
  let arrayU = []
  let arrayL = []
  for (let i = 0; i < ary.length; ++i) {
    pivot = ary[i]
    arrayU = ary.filter(item => item > pivot)
    arrayL = ary.filter(item => item <= pivot)
    if (arrayU.length !== 0 && arrayL.length !== 0) {
      break
    }
  }

  sorted = quickSub(arrayU, sorted)
  sorted = quickSub(arrayL, sorted)

  return sorted
}

function quick(ary) {
  const sorted = []
  return quickSub(ary, sorted)
}

function displayResults(ary) {
  let total = 0
  let average = 0
  let minimum = Number.MAX_SAFE_INTEGER
  let maximum = Number.MIN_SAFE_INTEGER
  let ascending = ''
  let descending = ''
  ary.forEach(item => {
    total += item
    if (minimum > item) {
      minimum = item
    }

    if (maximum < item) {
      maximum = item
    }
    ascending = item.toString() + ' ' + ascending
    descending += item.toString() + ' '
  })
  average = total / sortedArray.length
  console.log('合計: ' + total.toString())
  console.log('平均: ' + average.toString())
  console.log('最大値' + maximum.toString())
  console.log('最小値' + minimum.toString())
  console.log('大きい順: ' + ascending)
  console.log('小さい順: ' + descending)
}

const numbers = [20, 31, 42, 13, 5, 38]

console.log('bubble sort')
let sortedArray = bubble(numbers)
displayResults(sortedArray)

console.log('quick sort')
sortedArray = []
sortedArray = quick(numbers)
displayResults(sortedArray)
