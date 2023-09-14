const { it, expect, describe } = require("@jest/globals");
const {mineGameField} = require ("./first_game_field");
describe ('array check', ()=>{
    it('length of array should be equal to difficult ', ()=>{
        // Подготовка
        let length = 6
        let difficultLevel = "1"
        const testArray = [] 
        // Действие
        
        testArray = mineGameField (difficultLevel)
       
        // Сверка
        assert.equal(length, testArray.length)
        })

})
