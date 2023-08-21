
"use strict";
let difficultLevel = 0;
// Функция выделения кнопки уровня сложности

const diffLevelButtonColor = () => {
    // let difficultLevel = 0;
    const difficulteElements = document.querySelectorAll('.start-box--difficultValue');


    // difficulteElement.classList.remove('color');

    for (const difficulteElement of difficulteElements) {
       
        difficulteElement.addEventListener('click', () => {

            if(difficultLevel != difficulteElement.name) {
                for (const difficulteElement of difficulteElements) {
                    difficulteElement.classList.remove('color');
                }

                difficulteElement.classList.add('color');
            }
            // Записываем уровень сложности
            return difficultLevel = difficulteElement.name;
        });

      };

};

diffLevelButtonColor();

// Функция старта игры

const startGame = () => {
    
    const startElement = document.querySelector('.start-box--button');
    const fieldElement = document.querySelector('.game-field');
    startElement.addEventListener('click', () => {
        if (difficultLevel === 0) {
            return alert('Выберите сложность игры');
        }
        else{
            let startTime = new Date();
            fieldElement.innerHTML = `
            <div >
              Игра началась!
              Время начала ${startTime}
            </div>`

        }
        
        
        });

      
};

startGame();