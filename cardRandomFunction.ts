export const cardRandomFunction = (difficultLevel: string) => {
    let playCards = 0
    const arrCard = ["A", "K", "Q", "J", "10", "9", "8", "7", "6"]
    
    let randCard = []
    
    let totalRandCards = []
    

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
       
    }
    totalRandCards = randCard.concat(randCard)
    return totalRandCards
}
// module.exports = { cardRandomFunction }