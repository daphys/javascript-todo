let inputTo = document.getElementById('input');
let buttonTo = document.getElementById('button');
let arr = [];
let text = document.getElementById('main');

function makeToList() {


    // let newArr = new Array()
    // newArr.push(inputTo.value);
    // let newElem = document.createElement('div');
    // newElem.className = 'newElement';
    // document.body.append(newElem);
    // newElem.innerHTML = newArr;
    // console.log(newArr);
    

    if (inputTo.value == 0) {
        text.innerHTML = 'Please enter your task'
    } else if (inputTo.value >= 42){
        text.innerHTML = null
        let newArr = new Array()
        newArr.push(inputTo.value);

        let newElem = document.createElement('div');
        newElem.className = 'newElement';
        document.body.append(newElem);
        newElem.innerHTML = `${newArr}`;
        newElem.style.height = "120px"
    } 
    else  {
        text.innerHTML = null

        let newArr = new Array()
        newArr.push(inputTo.value);

        let newElem = document.createElement('div');
        newElem.className = 'newElement';
        document.body.append(newElem);
        newElem.innerHTML = `${newArr}`;

        console.log(newArr);
    }
}


buttonTo.addEventListener('click', makeToList);
