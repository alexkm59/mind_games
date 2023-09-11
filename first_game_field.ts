// import { library } from "webpack"
import { timerFunction } from "./timer_function"
// Отрисовываем заголовок игрового поля
export function stopTimer() {}
let timerStop = 0
export const renderHeder = () => {
    // timer ()
    // const fieldElement = document.querySelector(".start-game-field")
    const hederElement = document.querySelector(".start-game-field")
    // fieldElement.innerHTML = renderHeder()
    // <div class="modal"></div>
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
    const arrCard = ["A", "K", "Q", "J", "10", "9", "8", "7", "6"]
    const arrSuit = ["Piki", "Cherv", "Bubn", "Krest"]
    const cardsField = []
    let randCard = []
    let randSuit = []
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
        randCard[i] = arrCard[Math.floor(Math.random() * arrCard.length)]
        randSuit[i] = arrSuit[Math.floor(Math.random() * arrSuit.length)]
    }
    totalRandCards = randCard.concat(randCard)
    totalRandSuits = randSuit.concat(randSuit)
    console.log(totalRandCards)
    console.log(totalRandSuits)

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

        let cardElement = `
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
    for (let i of cardsField) {
        if (fieldElement) {
            fieldElement.innerHTML = fieldElement.innerHTML + i
        }
    }

    // Вызвать функцию которая закроет карты через 5 секунд

    setTimeout(closeCardFunction, 3000)
}

// Функция закрытия карт
const closeCardFunction = () => {
    const cardElements: any = document.querySelectorAll(".card-open")
    const cardInElements: any = document.querySelectorAll(".cardIn")

    for (const cardInElement of cardInElements) {
        cardInElement.classList.add("displayNone")
    }

    for (const cardElement of cardElements) {
        cardElement.classList.add("card")
        cardElement.classList.remove("card-open")
    }

    gamePlayFunction()
}

const gamePlayFunction = () => {
    // let openCardCount = 0;
    let openCardNunber = 0
    let rangFirstCard = ""
    let iconFirstCard = ""
    let result = 0
    let timerId = 0

    const cardElements: any = document.querySelectorAll(".card")
    console.log({ cardElements })
    for (const cardElement of cardElements) {
        cardElement.addEventListener("click", () => {
            // const cardChildElements = document.querySelectorAll(".cardIn").children
            const cardChildElements = cardElement.children
            for (const cardChildElement of cardChildElements) {
                cardChildElement.classList.remove("displayNone")
            }
            cardElement.classList.add("card-open")
            openCardNunber = openCardNunber + 1
            if (openCardNunber % 2 !== 0) {
                rangFirstCard = cardElement.dataset.card
                iconFirstCard = cardElement.dataset.icon
            }

            if (openCardNunber % 2 === 0) {
                let rangSecondCard = cardElement.dataset.card
                let iconSecondCard = cardElement.dataset.icon
                if (
                    rangSecondCard === rangFirstCard &&
                    iconSecondCard === iconFirstCard
                ) {
                    // добавить функцию выигрыша
                    result = 1
                } else {
                    result = 0
                }

                celebrationFunction(result)
            }
        })
    }
    timerFunction()
}

const celebrationFunction = (result: number) => {
    let resultText = ""
    let hederTimer = document.querySelector(".heder-time")
    const messageWindow: any = document.querySelector(".modal-window")
    clearInterval(2)
    messageWindow.classList.add("modal")
    result === 1
        ? (resultText = "Вы выиграли!")
        : (resultText = "Вы проиграли!")

    messageWindow.innerHTML = `<div class="finish-game-field">
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
