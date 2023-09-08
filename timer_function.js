// Функция таймера
import { stopTimer } from "./first_game_field.js"

export const timerFunction = () => {
    let timerShow = document.querySelector(".heder-time")
    let minuts = 0
    let seconds = 0
    let timer = 0
    let timerEnd = ""
    let playTime = ""
    let id = setInterval(() => {
        
        timerShow.innerHTML = `${minuts < 10 ? `0${minuts}` : minuts}.${
            seconds < 10 ? `0${seconds}` : seconds
        }`
        timer++
        seconds = timer % 60
        minuts = Math.trunc(timer / 60)
        playTime = `${minuts}.` + `${seconds}`

        
        
    }, 1000)
    console.log({timerShow});
console.log({id});
return ({id})
   
}

