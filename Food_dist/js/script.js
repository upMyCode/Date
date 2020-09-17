//Timer 


const deadline = '2020-12-17';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse( new Date() );
    const day = Math.floor( t / (1000*60*60*24));
    const hours = Math.floor( t / (1000*60*60) % 24);
    const minuts = Math.floor( t / 1000 / 60 % 60 );
    const seconds = Math.floor( t / 1000 % 60 );
    
    return { 
        'total': t,
        'days': day,
        'hours': hours,
        'minuts': minuts,
        'seconds': seconds
    };
}

function setClock(selector, endtime) {

}


// const date =  new Date();
// console.log(date);