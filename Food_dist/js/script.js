//Timer 


const deadline = '2020-12-17';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse( new Date() );
    const day = Math.floor( t / (1000*60*60*24));
    const hours = Math.floor( t / (1000*60*60) % 24);
    const minutes = Math.floor( t / 1000 / 60 % 60 );
    const seconds = Math.floor( t / 1000 % 60 );
    
    return { 
        'total': t,
        'days': day,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval( updateClock, 1000);

    function updateClock() {
        const t = getTimeRemaining(endtime);
        
        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;

    if(t.total <= 0) {
        clearInterval(timeInterval);
    }

    }  
}

setClock('.timer', deadline);


// const date =  new Date();
// console.log(date);