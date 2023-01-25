// const _log = console.log;

// let myTime = new Date()
// let myTimer;

// _log(myTime.getFullYear())
// _log(myTime)

// let my_hour = document.getElementById('hour');
// let my_minute = document.getElementById('minute');
// let my_seconds = document.getElementById('seconds');

// setInterval(() => {
//     myTimer = new Date()
//     // myTimer.setMinutes(5)

//     if(myTimer.getSeconds() < 10){
//         my_seconds.innerHTML = ("0" + myTimer.getSeconds())
//     }else{
//         my_seconds.innerHTML = myTimer.getSeconds()
//     }

//     if(myTimer.getMinutes() < 10){
//         my_minute.innerHTML = ("0" + myTimer.getMinutes())
//     }else{
//         my_minute.innerHTML = myTimer.getMinutes()
//     }

//     my_hour.innerHTML = myTimer.getHours()
// },1000)


// // let testMe = document.querySelector('.testMe')

//// testMe.insertAdjacentHTML('beforeend', '<p>test')

// // console.error('app is nod defined')
// // console.warn('api crashed in the web')

const $ = document;
const _log = console.log;

const _id = id_name => {
    return $.getElementById(id_name)
};

let myHour = _id('clockHour');
let myMinute = _id('clockMinute');
let mySecond = _id('clockSecond');

let nowTime

let showNowTime = setInterval(() => {
    nowTime = new Date()

    myHour.innerHTML = nowTime.getHours()
    myMinute.innerHTML = nowTime.getMinutes()
    
    if(nowTime.getSeconds() < 10){
        mySecond.innerHTML = '0' + nowTime.getSeconds()
    }else{
        mySecond.innerHTML = nowTime.getSeconds()
    }
}, 1000);