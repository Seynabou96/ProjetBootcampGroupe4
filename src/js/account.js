import { List} from './lib/module.js';
import { onChange } from './lib/module.js';
const inputAccount = document.querySelector("#int");
const buttonAccount = document.querySelector("#btn");
const inputLabel = document.querySelector("#label");
const combobox = document.querySelector("#ComboBox");
const table = document.querySelector('#tbl');
  const tbody = document.querySelector('#tbody');
const arrayInput = new List();
const arrayCombobox = new List();
const arrayLabel = new List();
let ro = 0;
  
  

onChange(inputAccount,arrayInput);
onChange(inputLabel,arrayLabel);
onChange(combobox,arrayCombobox);

buttonAccount.addEventListener('click',function(){

  let rowcount =table.rows.length;
  let tab1 =arrayInput._list[ro]
  let tab2 = arrayLabel._list[ro]
  
  if((tab1>10000 && tab1<=99999) &&
    (tab2!=undefined) &&
(arrayCombobox._list[ro]!=undefined)){
    tbody.innerHTML +=
     `<tr>
        <td>${arrayInput._list[ro]}</td>
        <td>${arrayLabel._list[ro]}</td>
        <td>${arrayCombobox._list[ro]}</td>
      </tr>`
      storage()
   ro++;     
  }

  else{
    arrayInput.removeElement(arrayInput._list,rowcount-1);
    arrayLabel.removeElement(arrayLabel._list,rowcount-1);
    arrayCombobox.removeElement(arrayCombobox._list,rowcount-1);

    alert("veillez nous donnez un code à 5chiffres,un label non vide et un choix")
  }
  
  inputAccount.value = null;
  inputLabel.value = '';
  combobox.value = 'combobox'
  
})

function storage(){
  window.localStorage.accountsystem = tbody.innerHTML;
}
function getValue(){
  let storage = window.localStorage.accountsystem;
  if(storage){
    tbody.innerHTML = storage;
  }
}
getValue()