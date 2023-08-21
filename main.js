
"use strict";
// Функция выделения кнопки уровня сложности

const diffLevelButtonColor = () => {
    let difficultLevel = 0;
    const difficulteElements = document.querySelectorAll('.start-box--difficultValue');

    console.log(difficulteElements);

    // difficulteElement.classList.remove('color');

    for (const difficulteElement of difficulteElements) {
       
        difficulteElement.addEventListener('click', () => {

            if(difficultLevel != difficulteElement.name) {
                for (const difficulteElement of difficulteElements) {
                    difficulteElement.classList.remove('color');
                }

                difficulteElement.classList.add('color');
            }
            
            difficultLevel = difficulteElement.name;
        });

      };

};

diffLevelButtonColor();


