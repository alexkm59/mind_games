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
            <div class="card-close">
            
    </div>  
</div>`
}

export const mineGameField = () => {
    // Показывает карты на некоторое время
    const arrCard = ["A", "K", "Q", "J", "10", "9", "8", "7", "6"]
    const arrSuit = ["Piki", "Cherv", "Bubn", "Krest"]
    const cardsField = []
    let cardIcon = ""
    for (let suit of arrSuit) {
        for (let card of arrCard) {
            if (suit === "Piki") {
                cardIcon = "iconPiki"
            }
            if (suit === "Cherv") {
                cardIcon = "iconCherv"
            }
            if (suit === "Bubn") {
                cardIcon = "iconBubn"
            }
            if (suit === "Krest") {
                cardIcon = "iconKrest"
            }
            let cardElement = `
                <div class="card-open">
                    <div class="card-heder">${card}</div>
                    <div class="card-heder--${cardIcon}"></div>
                    <div class="card-middle--${cardIcon}"></div>
                    <div class="card-down--${cardIcon}"></div>
                    <div class="card-down">${card}</div>
                </div>`

            cardsField.push(cardElement);
        }
    }

    const fieldElement = document.querySelector(".card-close");
    for (let i of cardsField) {
        fieldElement.innerHTML = fieldElement.innerHTML + i
    }
}

export const userGameField = () => {
    const fieldElement = document.querySelector(".card-close");
    fieldElement.innerHTML = `
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div> 
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div> 
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
            `

}