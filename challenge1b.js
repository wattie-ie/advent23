import {input} from "./inputs/challenge1.js"

const numberRegex = /\d/g;
const sumCalibration = (total,badString) => {
    const goodNumberArray = badString.match(numberRegex).join("")
    const arrLength = goodNumberArray.length
    const goodNumber =  Number(goodNumberArray[0] + goodNumberArray[arrLength-1])

    return total + goodNumber
}

const cleanNumbers = (puzzleString) => {
    const replaceArr = ["one","two","three","four","five","six","seven","eight","nine",]
    const replaceValues = ["o1ne","t2wo","th3ree","fo4ur","fi5ve","s6ix","se7ven","ei8ght","ni9ne",]

    let result = puzzleString

    for (var i = replaceArr.length - 1; i >= 0; i--) {
        result = result.replaceAll(replaceArr[i], replaceValues[i]);
    }
    return result
}

const cleanNumberString = cleanNumbers(input)
const calibrationArray = cleanNumberString.split("\n");
const calibrationNumber = calibrationArray.reduce(sumCalibration,0)

console.log("Final calibration number is: " + calibrationNumber)