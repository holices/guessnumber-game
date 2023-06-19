const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', pressEnter)


function handleTryClick(event) {
    event.preventDefault()
    
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value < 0)) {
        alert('Número inválido. Tente novamente!')
    } else if(Number(inputNumber.value > 10)) {
        alert('Número inválido. Tente novamente!')
    }
    
    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("h2")
        .innerHTML = `Você acertou em ${xAttempts} tentativas`
    }
    
    inputNumber.value = ""
    xAttempts++
}

function pressEnter(event) {
    if(event.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}

function handleResetClick() {
    toggleScreen()
    inputNumber.value = ""
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}