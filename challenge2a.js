import {input} from "./inputs/challenge2.js"

const maxCubes = {
    "red":12,
    "green":13,
    "blue":14,
}
const gameNumberReg = /(?<=Game )\d+/g;
const gameDrawsReg = /\d+\W[a-zA-Z]+/g

const isRealistic = (result) => {
    const cubeReducer = (acc,next) => {
        if (acc===false) return false;
        const total = Number(next.match(/\d+/g))
        const colour = next.match(/[a-z]+/g)
        if (maxCubes[colour]>=total)
            return true
        else
            return false
    }

    const cubeResult = result.reduce(cubeReducer,true)
    return cubeResult
}

const sumWinningGames = (total,gameString) => {
    const gameNumber = Number(gameString.match(gameNumberReg))

    const games = gameString.split(";")
    const gameReducer = (acc,game) => {
        if (acc===false) return false;
        const gameDraws = game.match(gameDrawsReg)
        if (isRealistic(gameDraws))
            return true
        else
            return false
    }
    const gameReal = games.reduce(gameReducer,true)

    return gameReal ? total + gameNumber : total
}


const gamesArray = input.split("\n");
const gamesNumber = gamesArray.reduce(sumWinningGames,0)

console.log("Final realistic games number is: " + gamesNumber)