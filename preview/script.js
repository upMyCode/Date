'use strict';

 const box = document.querySelector('.box');
 const btn =document.querySelector('.btn');

 const width = box.scrollWidth;
 const height = box.scrollHeight;

 console.log(width, height);

 btn.addEventListener('click', ()=>{
    //  box.style.height = box.scrollHeight + 'px';
     console.log(box.scrollTop);
 })

 console.log(box.getBoundingClientRect().top);
 const st = getComputedStyle(box);
 console.log(st);
 console.log(document.documentElement.clientHeight);