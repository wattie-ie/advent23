import {input} from "./inputs/challenge14.js"

const isRoundRock = (char) => {return char==='O'}
const isEmptySpace = (char) => {return char==='.'}

const rollRocks = (rockArray,counter=1) => {
    let rocksChanged = false
    for (let i = 1; i < rockArray.length; i++) {
        for (let j = 0; j < rockArray[i].length; j++) {
            if (isRoundRock(rockArray[i][j]) && isEmptySpace(rockArray[i-1][j])) {
                rockArray[i][j] = '.'
                rockArray[i-1][j]='O'
                rocksChanged = true
            }
        }
    }
    // console.log(counter)
    return rocksChanged ? rollRocks(rockArray,++counter):rockArray
}


const rocksArray = input.split("\n");
const rocksMultiArray = rocksArray.map((rockRow) => {
    return rockRow.split("")
})
const sortedRocks = rollRocks(rocksMultiArray)

const rocksReducer = ( accumulator, currentValue, currentIndex, array ) => {
    const rocks = currentValue.filter((char) => char==='O')
    // console.log(currentValue, rocks.length,currentIndex,array.length,(rocks.length*(array.length-currentIndex)))
    return accumulator+(rocks.length*(array.length-currentIndex))
}

console.log("Total load on beams: " + sortedRocks.reduce(rocksReducer,0))