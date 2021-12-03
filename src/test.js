


const inputAccount = document.querySelector('#int');
const buttonAccount = document.querySelector('#btn');
const inputLabel = document.querySelector('#label');
const combobox = document.querySelector('#ComboBox')
const table = document.querySelector('#tbl');

const arrayinput = new List();
const arraylabel = new List();
const arraytype = new List();



buttonAccount.addEventListener('click', function () {
    let code = inputAccount.value;
    let label = inputLabel.value;
    let typeCpt = combobox.value;
    if (code.length === 4 && label != " " && typeCpt != " ") {
        arrayinput.addElementToList(code);
        arraylabel.addElementToList(label);
        arraytype.addElementToList(typeCpt);

        console.log(JSON.stringify(arrayinput._list, undefined, 3));
        window.localStorage.setItem("code", JSON.stringify(arrayinput._list, undefined, 3));
        window.localStorage.setItem("label", JSON.stringify(arraylabel._list, undefined, 3));
        window.localStorage.setItem("Type compte", JSON.stringify(arraytype._list, undefined, 3));
        for (Element in window.localStorage) {
            let row = table.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            cell1.textContent = window.localStorage.getItem(Element);
            cell2.textContent = window.localStorage.getItem(Element);
            cell3.textContent = window.localStorage.getItem(Element);
        }
        
    }
    });


    // else{
    //     window.localStorage.comptes.splice(rowcount,1);
    //     window.localStorage.label.splice(rowcount,1);
    //     .splice(rowcount,1);
    //    console.log('blem')
    //}
