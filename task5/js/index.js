'use strict'

const numbers = [20, 31, 42, 13, 5, 38]

function bubble(array) {
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

const sortedArray = bubble(numbers)
sortedArray.forEach(item => {
  console.log(item)
})
