function time(){
    let now= new Date()
    let seconds= now.getSeconds()
    let secondsDeg= (((seconds/60)*360)+90)
    let SecondsHand = document.querySelector('.seconds-hand')
    SecondsHand.style.transform =`rotate(${secondsDeg}deg)`
    SecondsHand.style.backgroundColor  = `red`
    let minutes=now.getMinutes()
    let minDeg=(((minutes/60)*360)+90)
    let minuteHand = document.querySelector(`.minutes-hand`)
    minuteHand.style.transform = `rotate(${minDeg}deg)`
    let hours=now.getHours()
    let hoursDeg= (((hours/12)*360)+90)
    let HoursHand = document.querySelector(`.hour-hand`)
    HoursHand.style.transform = `rotate(${hoursDeg}deg)`
}
setInterval(time, 1000);