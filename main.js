import { renderHeder, mineGameField, userGameField } from "./first_game_field.js"


;("use strict")
let difficultLevel = 0
// Функция выделения кнопки уровня сложности

const diffLevelButtonColor = () => {
    // let difficultLevel = 0;
    const difficulteElements = document.querySelectorAll(
        ".start-box--difficultValue",
    )

    // difficulteElement.classList.remove('color');

    for (const difficulteElement of difficulteElements) {
        difficulteElement.addEventListener("click", () => {
            if (difficultLevel != difficulteElement.name) {
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

// Функция старта игры

const startGame = () => {
    const startElement = document.querySelector(".start-box--button");
    const fieldElement = document.querySelector(".start-game-field");
    startElement.addEventListener("click", () => {
        if (difficultLevel === 0) {
            return alert("Выберите сложность игры");
        } else {
            // let startTime = new Date();

            // <div >
            //   Игра началась!
            //   Время начала ${startTime}
            // </div>`
            fieldElement.innerHTML = renderHeder();
            fieldElement.classList.remove("start-game-field");
            mineGameField ();
            setTimeout(userGameField, 5000);
        };
    });
};

startGame();
// renderHeder();
// const clikFunction = () => {
//     const button = document.querySelector(".new_Game-button")
//     button.addEventListener("click", () => {
//         cardViewFunction();
//     });
// };

// clikFunction();
