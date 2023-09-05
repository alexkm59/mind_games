// import { library } from "webpack"
import { timerFunction } from "./timer_function.js"
// Отрисовываем заголовок игрового поля
export const renderHeder = () => {
    // timer ()
    // const fieldElement = document.querySelector(".start-game-field")
    const hederElement = document.querySelector(".start-game-field")
    // fieldElement.innerHTML = renderHeder()

    hederElement.innerHTML = `
<div class="game-field">
            <div class="heder">
                <div class="heder-time-box">
                    <div class="heder-time--text">
                        <p>min</p>
                        <p>sek</p>
                    </div>

                    <div class="heder-time">00.00</div>
                </div>
                <button class="new_Game-button">Начать заново</button>
            </div>
            <div class="card-forView"></div> 
            
            </div>`
    console.log(hederElement)
    hederElement.classList.remove("start-game-field")
    // fieldElement.classList.remove("start-game-field")
}

export const mineGameField = ({ difficultLevel }) => {
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

    // totalRandCards = randCard.concat(randCard)
    // totalRandSuits = randSuit.concat(randSuit)

    // Перетасовываем карты
    for (let i = 0; i < playCards * 2; i++) {
        index[i] = i
    }
    index = index.sort(() => Math.random() - 0.5)

    // console.log(totalRandCards)
    // console.log(totalRandSuits)
    // console.log(index)

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
                <div class="card-open" data-id="${index[i]}" data-card="${totalRandCards[index[i]]}" data-icon="${cardIcon}" >
                        <div class="cardIn card-heder">${totalRandCards[index[i]]}</div>
                        <div class="cardIn card-heder--${cardIcon} "></div>
                        <div class="cardIn card-middle--${cardIcon} "></div>
                        <div class="cardIn card-down--${cardIcon} "></div>
                        <div class="cardIn card-down ">${totalRandCards[index[i]]}</div>
                </div>`

        cardsField.push(cardElement)
    }

    
    const fieldElement = document.querySelector(".card-forView")
    for (let i of cardsField) {
        fieldElement.innerHTML = fieldElement.innerHTML + i
    }
    console.log(fieldElement)
    console.log({ index })
    // Вызвать функцию которая закроет карты через 5 секунд

    setTimeout(closeCardFunction, 3000)
}

// Функция закрытия карт
const closeCardFunction = () => {
    const cardElements = document.querySelectorAll(".card-open")
    const cardInElements = document.querySelectorAll(".cardIn")

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
    const cardElements = document.querySelectorAll(".card")
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
                    alert(`Вы выиграли`)
                    // добавить функцию выигрыша
                    celebrationFunction()
                } else {
                    alert(`Вы проиграли`)
                }
            }
        })
    }
    timerFunction()
}

const celebrationFunction = () => {
    const messageWindow = document.querySelector(".uspeh")
    messageWindow.innerHTML =
    `<div class="start-game-field">
        
    <div class="start-box start">
        <p class="start-box--text"> Выбери сложность</p>
        <div class="start-box--difficult">

            <div class="start-box--difficultLevel"> 
            <button class="start-box--difficultValue" name="1"> 1</button>    
            </div>
            <div class="start-box--difficultLevel"> 
                <button class="start-box--difficultValue" name="2"> 2</button>  
            </div>
            <div class="start-box--difficultLevel"> 
                <button class="start-box--difficultValue" name="3"> 3</button>   
            </div>
        </div>
        <button class="start-box--button">Играть заново</button>

        
    </div>
</div>`
}

// export const userGameField = ({ difficultLevel, index }) => {
//     let playCards = 0
//     const cardsCloseField = []
//     if (difficultLevel === "1") {
//         playCards = 3
//     }
//     if (difficultLevel === "2") {
//         playCards = 6
//     }
//     if (difficultLevel === "3") {
//         playCards = 9
//     }
//     for (let i = 0; i < playCards * 2; i++) {
//         let cardCloseElement = `<div class="card" data-id="${index[i]}"></div>`
//         cardsCloseField.push(cardCloseElement)
//     }

//     const fieldElement2 = document.querySelector(".card-close")
//     fieldElement2.innerHTML = ``

//     // Убираем div с показанными картами
//     const cardOpenElement = document.querySelector(".card-forView")
//     cardOpenElement.classList.add("displayNone")
//     // Убрали

//     for (let i of cardsCloseField) {
//         fieldElement2.innerHTML = fieldElement2.innerHTML + i
//     }
//     console.log(fieldElement2)

//     gamePlayFunction({ index })
// }

// const gamePlayFunction = () => {
// // let openCardCount = 0;
// const cardElements3 = document.querySelectorAll(".card-choice")
// console.log({cardElements3});

// cardElements3.addEventListener("click", () => {

//        alert("переворачиваем карту");

// })

// }

// export const gamePlayFunction = ({ index }) => {
//     let totalRandCards2 = ["A", "9", "Q", "A", "9", "Q"]
//     let totalRandSuits2 = ["Krest", "Bubn", "Piki", "Krest", "Bubn", "Piki"]
//     let cardElement = ``
//     let cardIcon = ""
//     const cardsField = []
//     const clickCardElements = document.querySelectorAll(".card")
//     for (const clickCardElement of clickCardElements) {
//         clickCardElement.addEventListener("click", () => {
//             // Вызываем функцию отрисовки открытия карты по id
//             let cardId = clickCardElement.dataset.id
//             console.log(cardId)

//             //    пускаем цикл по index
//             for (let i = 0; i < index.length; i++) {
//                 if (totalRandSuits2[index[i]] === "Piki") {
//                     cardIcon = "iconPiki"
//                 }
//                 if (totalRandSuits2[index[i]] === "Cherv") {
//                     cardIcon = "iconCherv"
//                 }
//                 if (totalRandSuits2[index[i]] === "Bubn") {
//                     cardIcon = "iconBubn"
//                 }
//                 if (totalRandSuits2[index[i]] === "Krest") {
//                     cardIcon = "iconKrest"
//                 }
//                 if (cardId == index[i]) {
//                     cardElement = `
//                     <div class="card-open">
//                         <div class="card-heder">${
//                             totalRandCards2[index[i]]
//                         }</div>
//                         <div class="card-heder--${cardIcon}"></div>
//                         <div class="card-middle--${cardIcon}"></div>
//                         <div class="card-down--${cardIcon}"></div>
//                         <div class="card-down">${
//                             totalRandCards2[index[i]]
//                         }</div>
//                     </div>`
//                 } else {
//                     cardElement = `<div class="card" data-id="${index[i]}"></div>`
//                 }

//                 cardsField.push(cardElement)
//             }
//             console.log(cardsField)

//             const fieldElement = document.querySelector(".card-close")
//             console.log(fieldElement)

//             for (let i of cardsField) {
//                 fieldElement.innerHTML = fieldElement.innerHTML + i
//             }
//             console.log(fieldElement.innerHTML)
//         })
//     }
// }
