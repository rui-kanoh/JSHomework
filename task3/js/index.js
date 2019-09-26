'use strict'

const rockPaparScissorsRule = {
  win: 0,
  lose: 1,
  draw: 2,
  invalid: 3
}

function JudgeRockPaparScissors(computer, user) {
  if (computer > 2 || user > 2) {
    return rockPaparScissorsRule.invalid
  }

  if (computer === user) {
    return rockPaparScissorsRule.draw
  } else if ((computer === 0 && user === 2) || (computer === 2 && user === 1) || (computer === 1 && user === 0)) {
    return rockPaparScissorsRule.win
  } else {
    return rockPaparScissorsRule.lose
  }
}

const rockPaparScissors = new Map()
rockPaparScissors.set(0, 'グー')
rockPaparScissors.set(1, 'チョキ')
rockPaparScissors.set(2, 'パー')

let judgement = rockPaparScissorsRule.draw
const message = 'じゃんけんをします。1か2か3を入力してください。\n 0.グー 1.チョキ 2.パー'

let inputNumber = 0
while (judgement === rockPaparScissorsRule.draw) {
  inputNumber = window.prompt(message)
  const input = Number.parseInt(inputNumber, 10)
  console.log(input)
  console.log('ぽい')
  const computerNumber = Math.floor(Math.random() * 3)
  judgement = JudgeRockPaparScissors(computerNumber, input)
  if (judgement === rockPaparScissorsRule.invalid) {
    console.log('不正な入力です。')
    break
  }

  console.log('* コンピュータ:' + rockPaparScissors.get(computerNumber))
  console.log('* あなた:' + rockPaparScissors.get(input))

  switch (judgement) {
    case rockPaparScissorsRule.invalid:
    default:
      console.log('不正な入力です。')
      break

    case rockPaparScissorsRule.draw:
      console.log('あいこです。')
      continue

    case rockPaparScissorsRule.win:
      console.log('あなたの勝ちです。')
      break

    case rockPaparScissorsRule.lose:
      console.log('あなたの負けです。')
      break
  }
}
