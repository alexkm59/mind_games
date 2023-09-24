import { timerFunction } from "./timer_function"
import { cardRandomFunction } from "./cardRandomFunction"
//Отрисовываем заголовок игрового поля
export const renderHeder = () => {
  const hederElement = document.querySelector(".start-game-field")
  if (hederElement) {
    hederElement.innerHTML = `
        <div class="modal-window"></div>
        <div class="game-field">
                <div class="heder">
                    <div class="heder-time-box">
                        <div class="heder-time--text">
                            <p>min</p>
                            <p>sek</p>
                        </div>
                        <div class="heder-time">00.00</div>
                    </div>
                    <button onclick="document.location='./index.html'" class="new_Game-button">Начать заново</button>
                </div>
                <div class="card-forView"></div> 
                </div>`
    hederElement.classList.remove("start-game-field")
  }
}
export const mineGameField = (difficultLevel: string) => {
  let playCards = 0
  // const arrCard = ["A", "K", "Q", "J", "10", "9", "8", "7", "6"]
  const arrSuit = ["Piki", "Cherv", "Bubn", "Krest"]
  const cardsField = []

  // let randCard = []
  const randSuit = []

  let totalRandCards = []
  let totalRandSuits = []
  let index = []
  let cardIcon = ""
  if (difficultLevel === "1") {
    playCards = 3
  }
  if (difficultLevel === "2") {
    playCards = 6
  }
  if (difficultLevel === "3") {
    playCards = 9
  }
  // Создание массивов с случайными рангами и мастями
  for (let i = 0; i <= playCards - 1; i++) {
    // randCard[i] = arrCard[Math.floor(Math.random() * arrCard.length)]
    randSuit[i] = arrSuit[Math.floor(Math.random() * arrSuit.length)]
  }
  // totalRandCards = randCard.concat(randCard)
  totalRandSuits = randSuit.concat(randSuit)
  // console.log(totalRandCards)
  console.log(totalRandSuits)

  totalRandCards = cardRandomFunction(difficultLevel)

  // Перетасовываем карты
  for (let i = 0; i < playCards * 2; i++) {
    index[i] = i
  }
  index = index.sort(() => Math.random() - 0.5)
  // Вывод карт на просмотр
  for (let i = 0; i < playCards * 2; i++) {
    if (totalRandSuits[index[i]] === "Piki") {
      cardIcon = "iconPiki"
    }
    if (totalRandSuits[index[i]] === "Cherv") {
      cardIcon = "iconCherv"
    }
    if (totalRandSuits[index[i]] === "Bubn") {
      cardIcon = "iconBubn"
    }
    if (totalRandSuits[index[i]] === "Krest") {
      cardIcon = "iconKrest"
    }
    const cardElement = `
                <div class="card-open" data-id="${index[i]}" data-card="${
                  totalRandCards[index[i]]
                }" data-icon="${cardIcon}" >
                        <div class="cardIn card-heder">${
                          totalRandCards[index[i]]
                        }</div>
                        <div class="cardIn card-heder--${cardIcon} "></div>
                        <div class="cardIn card-middle--${cardIcon} "></div>
                        <div class="cardIn card-down--${cardIcon} "></div>
                        <div class="cardIn card-down ">${
                          totalRandCards[index[i]]
                        }</div>
                </div>`
    cardsField.push(cardElement)
  }
  const fieldElement = document.querySelector(".card-forView")
  for (const i of cardsField) {
    if (fieldElement) {
      fieldElement.innerHTML = fieldElement.innerHTML + i
    }
  }
  // Вызвать функцию которая закроет карты через 5 секунд
  setTimeout(closeCardFunction, 3000, playCards)
  return { totalRandCards }
}


// Функция закрытия карт
const closeCardFunction = (playCards: number) => {
  const cardElements: NodeListOf<Element> =
    document.querySelectorAll(".card-open")
  const cardInElements: NodeListOf<Element> =
    document.querySelectorAll(".cardIn")
  for (const cardInElement of Array.from(cardInElements)) {
    cardInElement.classList.add("displayNone")
  }
  for (const cardElement of Array.from(cardElements)) {
    cardElement.classList.add("card")
    cardElement.classList.remove("card-open")
  }
  gamePlayFunction(playCards)
}
const gamePlayFunction = (playCards: number) => {
  // let openCardCount = 0;
  let openCardNumber = 0
  let rangFirstCard: string = ""
  let iconFirstCard = ""
  let result = 0
  const cardElements: NodeListOf<HTMLElement> | undefined =
    document.querySelectorAll(".card")
  console.log({ cardElements })
  for (const cardElement of Array.from(cardElements)) {
    cardElement.addEventListener("click", () => {
      // const cardChildElements = document.querySelectorAll(".cardIn").children
      const cardChildElements = cardElement.children
      for (const cardChildElement of Array.from(cardChildElements)) {
        cardChildElement.classList.remove("displayNone")
      }
      cardElement.classList.add("card-open")
      openCardNumber = openCardNumber + 1
      if (openCardNumber % 2 !== 0) {
        rangFirstCard = cardElement.dataset.card!
        iconFirstCard = cardElement.dataset.icon!
      }
      if (openCardNumber % 2 === 0) {
        const rangSecondCard = cardElement.dataset.card
        const iconSecondCard = cardElement.dataset.icon

        if (
          rangSecondCard === rangFirstCard &&
          iconSecondCard === iconFirstCard
        ) {
          result = 1
        } else {
          result = 0
          celebrationFunction(result)
        }
      }
      if (openCardNumber === playCards * 2) {
        celebrationFunction(result)
      }
    })
  }
  timerFunction()
}
const celebrationFunction = (result: number) => {
  let resultText = ""
  const hederTimer = document.querySelector(".heder-time")
  const messageWindow: HTMLElement | null =
    document.querySelector(".modal-window")
  clearInterval(2)
  messageWindow?.classList.add("modal")
  result === 1 ? (resultText = "Вы выиграли!") : (resultText = "Вы проиграли!")
  messageWindow!.innerHTML = `<div class="finish-game-field">
    <div class="start-box start">
    <div class= ${
      result === 1 ? "finish-box--img__celebr" : "finish-box--img__dead"
    }>   </div>
    <p class="finish-box--text"> ${resultText}</p>
        <div class="finish-box--time">
        <div class="finish-box--timeText">Затраченное время: </div>
            <div class="finish-box--timer">${hederTimer?.innerHTML}</div>
        </div>
        <button onclick="document.location='./index.html'" class="finish-box--button">Играть снова</button>
    </div>
</div>`
}
