import "./style.css"
import { renderHeder, mineGameField } from "./first_game_field"
let difficultLevel: string = "0"

// Функция выделения кнопки уровня сложности
const diffLevelButtonColor = () => {
  // let difficultLevel = 0;

  const difficulteElements: NodeListOf<Element> = document.querySelectorAll(".start-box--difficultValue")
  console.log(difficulteElements)
  for (const difficulteElement of Array.from(difficulteElements)) {
    difficulteElement.addEventListener("click", () => {

  if (difficultLevel !== difficulteElement.name) {
    for (const difficulteElement of Array.from(difficulteElements)) {
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
  const startElement: HTMLElement | null =
    document.querySelector(".start-box--button")
  // const fieldElement = document.querySelector(".start-game-field")
  startElement?.addEventListener("click", () => {
    if (difficultLevel === "0") {
      return alert("Выберите сложность игры")
    } else {
      // fieldElement.innerHTML = renderHeder()
      renderHeder()
      // fieldElement.classList.remove("start-game-field")
      mineGameField(difficultLevel)
    }
  })
}

startGame()
