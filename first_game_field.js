// Отрисовываем заголовок игрового поля
export const renderHeder = () => {
    return `
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
            <div class="card-close"></div> 
             
</div>`
}

export const mineGameField = ({
    difficultLevel,
    totalRandCards,
    totalRandSuits,
    index,
}) => {
    let playCards = 0
    const arrCard = ["A", "K", "Q", "J", "10", "9", "8", "7", "6"]
    const arrSuit = ["Piki", "Cherv", "Bubn", "Krest"]
    const cardsField = []
    let randCard = []
    let randSuit = []
    // let totalRandCards = []
    // let totalRandSuits = []
    // let index = []
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

    console.log(totalRandCards)
    console.log(totalRandSuits)
    console.log(index)

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
                <div class="card-open" id="${index[i]}">
                    <div class="card-heder">${totalRandCards[index[i]]}</div>
                    <div class="card-heder--${cardIcon}"></div>
                    <div class="card-middle--${cardIcon}"></div>
                    <div class="card-down--${cardIcon}"></div>
                    <div class="card-down">${totalRandCards[index[i]]}</div>
                </div>`

        cardsField.push(cardElement)
    }

    const fieldElement = document.querySelector(".card-forView")
    for (let i of cardsField) {
        fieldElement.innerHTML = fieldElement.innerHTML + i
    }
    console.log(fieldElement)
    return [{ difficultLevel, totalRandCards, totalRandSuits, index }]
}

export const userGameField = ({ difficultLevel, index }) => {
    let playCards = 0
    const cardsCloseField = []
    if (difficultLevel === "1") {
        playCards = 3
    }
    if (difficultLevel === "2") {
        playCards = 6
    }
    if (difficultLevel === "3") {
        playCards = 9
    }

    console.log({ index })
    // const fieldElement2 = document.querySelector(".card-close")

    for (let i = 0; i < playCards * 2; i++) {
        let cardCloseElement = `<div class="card" id="${index[i]}"></div>`
        cardsCloseField.push(cardCloseElement)
    }

    const fieldElement2 = document.querySelector(".card-close")
    fieldElement2.innerHTML = ``

    // Убираем div с показанными картами

    const cardOpenElement = document.querySelector(".card-forView")
    cardOpenElement.classList.add("displayNone")
    // Убрали

    for (let i of cardsCloseField) {
        fieldElement2.innerHTML = fieldElement2.innerHTML + i
    }
    console.log(fieldElement2)

    
}
