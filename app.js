let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const increase = document.querySelector('#increase');


btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else {
            count = 0;
        }
        if(count > 0) {
            document.getElementById('value').style.color = 'green'; 
        }
        else if(count < 0){
            document.getElementById('value').style.color = 'red';
        }
        else {
            document.getElementById('value').style.color = 'black';
        }
        value.textContent = count;
    })
});

decrease.addEventListener('touchstart', e=> {
    document.getElementById('decrease').style.backgroundColor = 'black';
    document.getElementById('decrease').style.color = 'white';
});

decrease.addEventListener('touchend', e=> {
    document.getElementById('decrease').style.backgroundColor = 'transparent';
    document.getElementById('decrease').style.color = 'black';
});

reset.addEventListener('touchstart', e=> {
    document.getElementById('reset').style.backgroundColor = 'black';
    document.getElementById('reset').style.color = 'white';
});

reset.addEventListener('touchend', e=> {
    document.getElementById('reset').style.backgroundColor = 'transparent';
    document.getElementById('reset').style.color = 'black';
});

increase.addEventListener('touchstart', e=> {
    document.getElementById('increase').style.backgroundColor = 'black';
    document.getElementById('increase').style.color = 'white';
});

increase.addEventListener('touchend', e=> {
    document.getElementById('increase').style.backgroundColor = 'transparent';
    document.getElementById('increase').style.color = 'black';
});

// Need to remove touchevent styling, as it's blue by default