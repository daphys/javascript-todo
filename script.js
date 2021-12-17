let inputTo = document.getElementById('input');
let buttonTo = document.getElementById('button');
let arr = [];
let text = document.getElementById('main');

function m(){


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
        let del = document.getElementById('del')
        text.innerHTML = null
        // let deletebutton = document.createElement('button')
        // deletebutton.className = 'deletedButton'
        // document.body.append(deletebutton)
        // deletebutton.onclick = newElem.remove
        let newArr = new Array()
        newArr.push(inputTo.value);
        let newElem = document.createElement('div');
        newElem.className = 'newElement';
        document.body.append(newElem);
        newElem.innerHTML = `${newArr} <button id="del">-</button>`;
        console.log(newArr);

        function bu(){
            newElem.remove();
            console.log('da')
        }

        
        inputTo.value = '';

        }

        
            del.addEventListener('click', bu)
    }




buttonTo.addEventListener('click', m);

