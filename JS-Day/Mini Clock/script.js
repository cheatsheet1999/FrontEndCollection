

let secondHand = document.querySelector('.second-hand');
let minHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    //seconds
    let seconds = now.getSeconds();
    let secondDegrees = ((seconds / 60) * 360) + 90;

    //minutes
    let mins = now.getMinutes();
    let minsDegree = ((mins / 60) * 360) + 90;

    //hours
    let hours = now.getHours();
    let hoursDegree = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondDegrees}deg)`
    minHand.style.transform = `rotate(${minsDegree}deg)`
    hourHand.style.transform = `rotate(${hoursDegree}deg)`
}

setInterval(setDate, 2000);
