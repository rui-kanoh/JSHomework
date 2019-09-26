'use strict'

function changeFromFooToUryyy(ary) {
  for (const key in ary) {
    if (typeof ary[key] === 'object') {
      changeFromFooToUryyy(ary[key])
    } else {
      ary[key] = ary[key].replace('foo', 'uryyy!!')
    }
  }
}

const hash = {
  main: {
    first: { text: 'foobar' },
    second: { text: 'fizzbuzz', child: { text: 'foobar' } }
  },
  sub: {
    first: { text: 'fizzbuzz', child: { text: 'foobar' } },
    second: {
      third: { text: 'barfoo', child: { text: 'foobar' } },
      forth: { child: { text: 'jit_foo_foo' } }
    }
  },
  text: 'foofava'
}

console.log(JSON.stringify(hash))
changeFromFooToUryyy(hash)
console.log(JSON.stringify(hash))
