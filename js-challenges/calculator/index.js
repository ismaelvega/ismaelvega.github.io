( function () {
let result = 0
let display = document.getElementById('display')

const changeBkgColor = (elementId) => document.getElementById(elementId).style.backgroundColor = 'red'
const revertBkgColor = (elementId) => document.getElementById(elementId).style.backgroundColor = 'white'

async function division() {
    changeBkgColor('button-division')
    removeEventListener()
    currentlyValue = display.value
    display.value = ''
    const espera = await buttonEqualTo.addEventListener('click', equalTo)

    function equalTo() {
        result = currentlyValue / display.value
        display.value = result.toFixed(2)
        revertBkgColor('button-division')
        removeAllEventListener()
    }
}
async function multiplication() {
    changeBkgColor('button-multiplication')
    removeEventListener()
    currentlyValue = display.value
    display.value = ''
    const espera = await buttonEqualTo.addEventListener('click', equalTo)

    function equalTo() {
        result = currentlyValue * display.value
        display.value = result.toFixed(2)
        revertBkgColor('button-multiplication')
        removeAllEventListener()
    }
}
async function less() {
    changeBkgColor('button-less')
    removeEventListener()
    currentlyValue = display.value
    display.value = ''
    const espera = await buttonEqualTo.addEventListener('click', equalTo)
    
    function equalTo() {
        result = currentlyValue - display.value
        display.value = result.toFixed(2)
        revertBkgColor('button-multiplication')
        removeAllEventListener()
    }
}
async function addition() {
    changeBkgColor('button-plus')
    removeEventListener()
    currentlyValue = display.value
    display.value = ''
    const espera = await buttonEqualTo.addEventListener('click', equalTo)

    function equalTo() {
        let newValue = display.value
        currentlyValue = Number(currentlyValue)
        newValue = Number(newValue)

        result = currentlyValue + newValue
        display.value = result
        revertBkgColor('button-plus')
        removeAllEventListener()
    }
}

const buttonSeven = () => display.value += '7'
const buttonEigth = () => display.value += '8'
const buttonNine = () => display.value += '9'
const buttonFour = () => display.value += '4'
const buttonFive = () => display.value += '5'
const buttonSix = () => display.value += '6'
const buttonOne = () => display.value += '1'
const buttonTwo = () => display.value += '2'
const buttonThree = () => display.value += '3'
const buttonZero = () => display.value += '0'

function removeAllEventListener() {
    document.getElementById('button-seven').removeEventListener('click', buttonSeven)
    document.getElementById('button-eigth').removeEventListener('click', buttonEigth)
    document.getElementById('button-nine').removeEventListener('click', buttonNine)
    document.getElementById('button-four').removeEventListener('click', buttonFour)
    document.getElementById('button-five').removeEventListener('click', buttonFive)
    document.getElementById('button-six').removeEventListener('click', buttonSix)
    document.getElementById('button-one').removeEventListener('click', buttonOne)
    document.getElementById('button-two').removeEventListener('click', buttonTwo)
    document.getElementById('button-three').removeEventListener('click', buttonThree)
    document.getElementById('button-zero').removeEventListener('click', buttonZero)
    document.getElementById('button-division').removeEventListener('click', division)
    document.getElementById('button-multiplication').removeEventListener('click', multiplication)
    document.getElementById('button-less').removeEventListener('click', less)
    document.getElementById('button-plus').removeEventListener('click', addition)
}

const removeEventListener = () =>{
    document.getElementById('button-division').removeEventListener('click', division)
    document.getElementById('button-multiplication').removeEventListener('click', multiplication)
    document.getElementById('button-less').removeEventListener('click', less)
    document.getElementById('button-plus').removeEventListener('click', addition)
}

document.getElementById('button-seven').addEventListener('click', buttonSeven)
document.getElementById('button-eigth').addEventListener('click', buttonEigth)
document.getElementById('button-nine').addEventListener('click', buttonNine)
document.getElementById('button-four').addEventListener('click', buttonFour)
document.getElementById('button-five').addEventListener('click', buttonFive)
document.getElementById('button-six').addEventListener('click', buttonSix)
document.getElementById('button-one').addEventListener('click', buttonOne)
document.getElementById('button-two').addEventListener('click', buttonTwo)
document.getElementById('button-three').addEventListener('click', buttonThree)
document.getElementById('button-zero').addEventListener('click', buttonZero)
document.getElementById('button-division').addEventListener('click', division)
document.getElementById('button-multiplication').addEventListener('click', multiplication)
document.getElementById('button-less').addEventListener('click', less)
document.getElementById('button-plus').addEventListener('click', addition)

document.getElementById('button-clear').addEventListener('click', () => location.reload())
let buttonEqualTo = document.getElementById('button-equalTo')
})()








