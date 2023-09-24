const { it, expect, describe } = require("@jest/globals");
const {cardRandomFunction} = require ("./cardRandomFunction");
const assert = require("assert").strict
// import { it, expect, describe } from '@jest/globals'
// import {cardRandomFunction} from cardRandomFunction
describe ('array check', ()=>{
    it('length of array should be equal to difficult ', ()=>{
        // Подготовка
        let length = 6
        let difficultLevel = "1"
        let testArray = [] 
        // Действие
        
        testArray = cardRandomFunction (difficultLevel)
       
        // Сверка
        // if (testArray.length !== length) {
        //     throw Error("Error in array length");
        //   }

        assert.equal(length, testArray.length)
        })

})
