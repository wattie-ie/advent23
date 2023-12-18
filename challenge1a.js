import {input} from "./inputs/challenge1.js"

const numberRegex = /\d/g;
const sumCalibration = (total,badString) => {
    const goodNumberArray = badString.match(numberRegex).join("")
    const arrLength = goodNumberArray.length
    const goodNumber =  Number(goodNumberArray[0] + goodNumberArray[arrLength-1])

    return total + goodNumber
}


const calibrationArray = input.split("\n");
const calibrationNumber = calibrationArray.reduce(sumCalibration,0)

console.log("Final calibration number is: " + calibrationNumber)