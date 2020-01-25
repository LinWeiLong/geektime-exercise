// 剪刀石头布的游戏逻辑

const getComAct = function() {
  var random = Math.random() * 3
  var comAct = ''
  console.log(random)
  if (random < 1) {
    comAct = 'rock'
  } else if (random > 2) {
    comAct = 'paper'
  } else {
    comAct = 'scissor'
  }
  return comAct
}

const judge = function(userAct) {
  if (!userAct) {
    return new Error('用户没有输入')
  }
  let result = ''
  let comAct = getComAct()
  console.log(`com: ${comAct} vs user: ${userAct}`)
  if (userAct === comAct) {
    result = '平局'
    console.log(result)
  } else if (
    (comAct === 'rock' && userAct === 'paper') ||
    (comAct === 'paper' && userAct === 'scissor') ||
    (comAct === 'scissor' && userAct === 'rock')
  ) {
    result = '你赢了'
  } else {
    result = '你输了'
  }

  console.log(result)
  return result
}

module.exports = judge
