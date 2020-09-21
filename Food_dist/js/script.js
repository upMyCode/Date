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

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
}

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    clearInterval(modalTimer);
}

const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('[data-close]');


for( i of modalTrigger){
    i.addEventListener('click',() => {
        openModal();
        // document.body.style.overflow = 'hidden';
    });
}


modalClose.addEventListener('click', () => {
    closeModal();
});



modal.addEventListener('click', (e) => {
    if(e.target == modal) {
        closeModal();
    }
})
// const date =  new Date();
// console.log(date);


// const modalTimer = setTimeout(openModal, 3000);

function showModalByScroll() {
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
    };
}


window.addEventListener('scroll', showModalByScroll);

//class for Card

class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.parent = document.querySelector(parentSelector);
        this.descr = descr;
        this.price = price;
        this.transfer = 27;
        this.changeToUAH();
    }

    changeToUAH() {
        this.price = this.price * this.transfer; 
    }

    render() {
        const element = document.createElement('div');
        element.innerHTML = `<div class="menu__item">
            <img src="${this.src}" alt="${this.alt}">
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        </div>
      `;
      this.parent.append(element);
    }
}

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        44,
        '.menu .container'

    ).render();