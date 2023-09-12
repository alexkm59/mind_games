// Функция таймера

export const timerFunction = () => {
    let timerShow:any = document.querySelector(".heder-time")
    let minuts = 0
    let seconds = 0
    let timer = 0
    
    let playTime = ""
    const id = setInterval(() => {
        timerShow.innerHTML = `${minuts < 10 ? `0${minuts}` : minuts}.${
            seconds < 10 ? `0${seconds}` : seconds
        }`
        timer++
        seconds = timer % 60
        minuts = Math.trunc(timer / 60)
        playTime = `${minuts}.` + `${seconds}`
    }, 1000)
    return { id }
}
