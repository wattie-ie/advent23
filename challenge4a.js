import {input} from "./inputs/challenge4.js"

const scratchieReducer = (total,nextScratchie) => {
    const [cardNumber,playNumbers] = nextScratchie.split(":")
    // const cardNumber = colonSplit[0]
    const [pickedNumbers, drawnNumbers] = playNumbers.split("|")
    const pickedNumbersArr = pickedNumbers.split(" ").filter(Number)
    const drawnNumbersArr = drawnNumbers.split(" ").filter(Number)

    const checkInResults = (number) => {
        return drawnNumbersArr.includes(number)
    }

    const winningNumbers = pickedNumbersArr.filter(checkInResults)
    // console.log(winningNumbers, Math.floor(Math.pow(2,winningNumbers.length)/2))
    return total + Math.floor(Math.pow(2,winningNumbers.length)/2)

}
const cardTitleReg = /Card.+\d:/g

const gamesArray = input.split("\n");
const totalWins = gamesArray.reduce(scratchieReducer,0)
console.log("Total win score: " + totalWins)
