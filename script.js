let count = 0;
let value = document.querySelector('.value');
let increase = document.querySelector('.increase');
let decrease = document.querySelector('.decrease');
let reset = document.querySelector('.reset');

// counter increment
increase.addEventListener('click', function(e){
let action= e.currentTarget.classList;
if(action.contains('increase')){
    count++}
 value.textContent = count
});

// counter decrement

decrease.addEventListener('click', function(e){
    let action2 = e.currentTarget.classList;
    if(action2.contains('decrease')){
        count--
    }
    value.textContent=count;
})
// Reset
reset.addEventListener('click', function(e){
    let action3 = e.currentTarget.classList;
    if(action3.contains('reset')){
        count = 0
    }
    value.textContent = count;
})
