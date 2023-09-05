// import "./style.css"
import { renderHeder, mineGameField } from "./first_game_field.js"
let difficultLevel = 0
// let totalRandCards = []
// let totalRandSuits = []
// let index = []
// Функция выделения кнопки уровня сложности

const diffLevelButtonColor = () => {
    // let difficultLevel = 0;
    const difficulteElements = document.querySelectorAll(
        ".start-box--difficultValue",
    )

    // difficulteElement.classList.remove('color');

    for (const difficulteElement of difficulteElements) {
        difficulteElement.addEventListener("click", () => {
            if (difficultLevel !== difficulteElement.name) {
                for (const difficulteElement of difficulteElements) {
                    difficulteElement.classList.remove("color")
                }

                difficulteElement.classList.add("color")
            }
            // Записываем уровень сложности
            return (difficultLevel = difficulteElement.name)
        })
    }
}

diffLevelButtonColor()

// Функция старта игры, выбор сложности

const startGame = () => {
    const startElement = document.querySelector(".start-box--button")
    // const fieldElement = document.querySelector(".start-game-field")
    startElement.addEventListener("click", () => {
        if (difficultLevel === 0) {
            return alert("Выберите сложность игры")
        } else {
            // fieldElement.innerHTML = renderHeder()
            renderHeder()
            // fieldElement.classList.remove("start-game-field")
            mineGameField({ difficultLevel })
        }
    })
}

startGame()
