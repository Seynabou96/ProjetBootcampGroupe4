import { List } from "./lib/module";


const inputAccount = document.querySelector('#int');
const buttonAccount = document.querySelector('#btn');
const input = document.querySelector('#label');
const combobox = document.querySelector('#ComboBox');
const table = document.querySelector('#tbl');
console.log(input,combobox);
const comptes = new List();
const onClick = (len,e) =>{

    if(len==3){
        console.log(e)
        buttonAccount.addEventListener("click",function(){
           
             if (comptes._list.indexOf(e) === -1) {
                comptes.addElementToList(e);
                window.localStorage.store = comptes._list;
                console.log('Le nouveau tableau est : ' + comptes._list);
               
                console.log(comptes);
                console.log(comptes._list.indexOf(e))
                let rowCount = table.rows.length;
                let row = table.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                cell1.innerHTML = rowCount;
                cell2.innerHTML = e;
        
             }
           
    
        })
    }
    
}

inputAccount.addEventListener("change", function (e) {

    onClick(e.target.value.length, e.target.value)

    }); 
 
 export let  x = function storage (){
   return window.localStorage.store;
 }
    ////////////
 