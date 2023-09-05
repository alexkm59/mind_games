// Функция таймера
export const timerFunction = () => {
    let timerShow = document.querySelector(".heder-time")
    let minuts = 0
    let seconds = 0
    let timer = 0
    setInterval(() => {
        timerShow.innerHTML = `${minuts < 10 ? `0${minuts}` : minuts}.${
            seconds < 10 ? `0${seconds}` : seconds
        }`
        timer ++
        seconds = timer % 60
        minuts = Math.trunc(timer / 60)
    }, 1000)
}