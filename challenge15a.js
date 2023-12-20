// import {demoInput as input} from "./inputs/challenge15.js"
import {input} from "./inputs/challenge15.js"

const calcHash = (stepStr) => {
    const stepArr = stepStr.split("")
    const hashReduceer = (acc,current) => {
        let calc = acc
        const asciiVal = current.charCodeAt(0);
        calc = ((calc + asciiVal) * 17) % 256
        // console.log(asciiVal,current,calc)
        return calc
    }
    return stepArr.reduce(hashReduceer,0)
}

const initiliaztionReducer = (acc,step) => {
    const calc = calcHash(step)
    console.log(acc,calc,step)
    return acc + calcHash(step)
}

const stepsArray = input.split(",")
// console.log(stepsArray)
console.log("Initialization Sequence: ", stepsArray.reduce(initiliaztionReducer,0))