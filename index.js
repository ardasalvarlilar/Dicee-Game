const firstInput = document.getElementById('firstInput')
const secondInput = document.getElementById('secondInput')
const rollTheDiceBtn = document.getElementById('btn')
const firstDiceDiv = document.getElementById('firstDicee')
const secondDiceDiv = document.getElementById('secondDicee')
const won = document.getElementById('won')

const diceRolling = () =>{
  const firstPlayerName = document.getElementById('firstPlayerName')
  const secondPlayerName = document.getElementById('secondPlayerName')
  firstPlayerName.textContent = firstInput.value
  secondPlayerName.textContent = secondInput.value
  firstInput.style.display = 'none'
  secondInput.style.display = 'none'

}

const changeBackground = () =>{  
  const randomNumberForSecondDice = Math.ceil(Math.random() * 5)
  const randomNumberForFirstDice = Math.ceil(Math.random() * 5)
  firstDiceDiv.style.backgroundImage = `url(../images/dice${randomNumberForFirstDice}.png)`
  secondDiceDiv.style.backgroundImage = `url(../images/dice${randomNumberForSecondDice}.png)`
  if(randomNumberForFirstDice === randomNumberForSecondDice){
    won.textContent = `Tie!`
  }else if(randomNumberForFirstDice < randomNumberForSecondDice){
    won.textContent = `${secondInput.value} won!`
  }else if(randomNumberForFirstDice > randomNumberForSecondDice){
    won.textContent = `${firstInput.value} won!`
  }
}


rollTheDiceBtn.addEventListener('click',changeBackground)
rollTheDiceBtn.addEventListener('click',diceRolling)