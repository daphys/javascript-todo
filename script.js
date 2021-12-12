let inputTo = document.getElementById('input');
let buttonTo = document.getElementById('button');
let arr = [];
let text = document.getElementById('main');

let button = () => {

}

let m = () => {


    // let newArr = new Array()
    // newArr.push(inputTo.value);
    // let newElem = document.createElement('div');
    // newElem.className = 'newElement';
    // document.body.append(newElem);
    // newElem.innerHTML = newArr;
    // console.log(newArr);
    

    if (inputTo.value == 0) {
        text.innerHTML = 'Please enter your task'
     }  else if ((inputTo.value).length >= 42){
        
        text.innerHTML = null
        let newArr = new Array();
        newArr.push(inputTo.value);
        let newElem = document.createElement('div');
        newElem.className = 'newElement';
        document.body.append(newElem);
        newElem.innerHTML = `${newArr}`;
        newElem.style.height = "120px"
    
    } 
    else  {
        text.innerHTML = null
        // let deletebutton = document.createElement('button')
        // deletebutton.className = 'deletedButton'
        // document.body.append(deletebutton)
        // deletebutton.onclick = newElem.remove
        let newArr = new Array()
        newArr.push(inputTo.value);
        let newElem = document.createElement('div');
        // let but = document.createElement('button');
        // but.className = 'bN'
        // document.body.append('bn')
        newElem.className = 'newElement';
        document.body.append(newElem);
        newElem.innerHTML = `${newArr}`;
        
        console.log(newArr);
        
        inputTo.value = '';

        localStorage.setItem(newArr, '');
    }
}



buttonTo.addEventListener('click', m);

