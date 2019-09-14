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

const sorted = []
function quick(a) {
  const ary = Array.from(a)
  if (ary.length === 0) {
  } else if (ary.length === 1) {
    sorted.push(ary[0])
  } else if (ary.length === 2) {
    sorted.push(ary[0] > ary[1] ? ary[0] : ary[1])
    sorted.push(ary[0] > ary[1] ? ary[1] : ary[0])
  } else {
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

    quick(Array.from(arrayU))
    quick(Array.from(arrayL))
  }
}

const sortedArray = bubble(numbers)
sortedArray.forEach(item => {
  // console.log(item)
})

const numbers2 = [20, 31, 42, 13, 5, 38]
quick(Array.from(numbers2))

console.log('sorted')
sorted.forEach(item => {
  console.log(item)
})
