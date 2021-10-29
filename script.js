let inputTo = document.getElementById('input');
let buttonTo = document.getElementById('button');
let arr = [];
let text = document.getElementById('main');

function makeToList() {
    
    if (inputTo.value == 0) {
        alert('Добавьте пожалуйста вашу задачу');
    } else{
        arr.push(inputTo.value);
        text.innerHTML = `${arr} </br>`;  
    }
}

buttonTo.addEventListener('click', makeToList);
