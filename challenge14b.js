import {input} from "./inputs/challenge14.js"

const isRoundRock = (char) => {return char==='O'}
const isEmptySpace = (char) => {return char==='.'}

const rollRocksNorth = (rockArray,counter=1) => {
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
    return rocksChanged ? rollRocksNorth(rockArray,++counter):rockArray
}

const rollRocksSouth = (rockArray,counter=1) => {
    let rocksChanged = false
    for (let i = rockArray.length-2; i >= 0; i--) {
        for (let j = 0; j < rockArray[i].length; j++) {
            if (isRoundRock(rockArray[i][j]) && isEmptySpace(rockArray[i+1][j])) {
                rockArray[i][j] = '.'
                rockArray[i+1][j]='O'
                rocksChanged = true
            }
        }
    }
    return rocksChanged ? rollRocksSouth(rockArray,++counter):rockArray
}

const rollRocksEast = (rockArray,counter=1) => {
    let rocksChanged = false
    for (let i = 0; i < rockArray.length; i++) {
        for (let j = rockArray[i].length-2; j >= 0; j--) {
            if (isRoundRock(rockArray[i][j]) && isEmptySpace(rockArray[i][j+1])) {
                rockArray[i][j] = '.'
                rockArray[i][j+1]='O'
                rocksChanged = true
            }
        }
    }
    return rocksChanged ? rollRocksEast(rockArray,++counter):rockArray
}

const rollRocksWest = (rockArray,counter=1) => {
    let rocksChanged = false
    for (let i = 0; i < rockArray.length; i++) {
        for (let j = 1; j < rockArray[i].length; j++) {
            if (isRoundRock(rockArray[i][j]) && isEmptySpace(rockArray[i][j-1])) {
                rockArray[i][j] = '.'
                rockArray[i][j-1]='O'
                rocksChanged = true
            }
        }
    }
    return rocksChanged ? rollRocksWest(rockArray,++counter):rockArray
}

const rollRocks = (rockArray, loops) => {
    let cyclingRockArray = rockArray

    for (let i = 0; i < loops; i++) {
        // console.log(cyclingRockArray)
        cyclingRockArray = rollRocksNorth(cyclingRockArray)
        // console.log(cyclingRockArray)
        cyclingRockArray = rollRocksWest(cyclingRockArray)
        // console.log(cyclingRockArray)
        cyclingRockArray = rollRocksSouth(cyclingRockArray)
        // console.log(cyclingRockArray)
        cyclingRockArray = rollRocksEast(cyclingRockArray)
        // console.log(cyclingRockArray)
    }
    return cyclingRockArray
}


const rocksArray = input.split("\n");
const rocksMultiArray = rocksArray.map((rockRow) => {
    return rockRow.split("")
})
const sortedRocks = rollRocks(rocksMultiArray,1000)

const rocksReducer = ( accumulator, currentValue, currentIndex, array ) => {
    const rocks = currentValue.filter((char) => char==='O')
    // console.log(currentValue, rocks.length,currentIndex,array.length,(rocks.length*(array.length-currentIndex)))
    return accumulator+(rocks.length*(array.length-currentIndex))
}
sortedRocks.map(row => {
    console.log(row.join(""))
})
console.log("Total load on beams: " + sortedRocks.reduce(rocksReducer,0))