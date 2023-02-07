let option1 = document.querySelector('#character_1');
let option2 = document.querySelector('#character_2');
let option3 = document.querySelector('#character_3');

option1.addEventListener('click', () => {
    option1.classList.add('active')
    if(option1.classList.contains('active')){
        option2.classList.remove('active')
        option3.classList.remove('active')
    }
})
option2.addEventListener('click', () => {
    option2.classList.add('active')
     if(option2.classList.contains('active')){
        option1.classList.remove('active')
        option3.classList.remove('active')
    }
})

option3.addEventListener('click', () => {
    option3.classList.add('active')
    if(option3.classList.contains('active')){
        option1.classList.remove('active')
        option2.classList.remove('active')
    }
})

