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

function quick(ary, sorted) {
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

  let index = Math.floor(Math.random() * ary.length)
  index = index === ary.length ? index - 1 : index
  const pivot = ary[index]
  const arrayU = ary.filter(item => item > pivot)
  const arrayL = ary.filter(item => item <= pivot)

  sorted = quick(arrayU, sorted)
  sorted = quick(arrayL, sorted)

  return sorted
}

const numbers = [20, 31, 42, 13, 5, 38]

console.log('bubble sort')
let sortedArray = bubble(numbers)
sortedArray.forEach(item => {
  console.log(item)
})

console.log('quick sort')
sortedArray = []
sortedArray = quick(numbers, sortedArray)
sortedArray.forEach(item => {
  console.log(item)
})
