//une petite importation pour utiliser la notion de classe.

import { List } from "./lib/module";
import { onChange } from "./lib/module";
//Affectations
const TransactionDate = document.querySelector("#datLog");
const TransactionObjet = document.querySelector("#transLog");
const code1 = document.querySelector("#codeLog");
const debit1 = document.querySelector("#debitLog");
const credit1 = document.querySelector("#creditLog");
const code2 = document.querySelector("#codeLogdeux");
const button = document.querySelector("#btn");
// Vérification de chaque élément
// console.log(TransactionDate,TransactionObjet,code1,code2,label1)
// console.log(label2,credit1,credit2,debit1,debit2)
//instances
const trsDate = new List();
const trsObjet = new List();
const codeUn = new List();
const codeDeux = new List();
const stockdate1 = new List();
const creditUn = new List();
const stockdate2 = new List();
const stockobjet = new List();
const stockobjet1 = new List();
const debitUn = new List();
const debit = new List();
const credit = new List();
const p1 = document.querySelector('#somme1')
const p2 = document.querySelector('#somme2')

//écoute des événements sur chaque élément

onChange(TransactionDate, trsDate);
onChange(TransactionObjet, trsObjet);
onChange(code1, codeUn);
onChange(debit1, debitUn);
onChange(credit1, creditUn);
onChange(code2, codeDeux);
//affectations pour les indexes
const table = document.querySelector("#tbl");
let rouncount = table.rows.length;
let ro = 0;
let roo = 0;
let rooo = 0;
let totauxcredit= 0;
let totauxdebit = 0;
let tab0 = trsDate._list.pop();
let arrayDate = new List();
arrayDate.addElementToList(tab0);
const tbody = document.querySelector("#tbody");
button.addEventListener("click", () => {
//affectations pour récupérer chaque élément à la meme enseigne 
  let tab1 = trsDate._list[ro];
  let tab2 = trsObjet._list[ro];
  let tab3 = codeUn._list[roo];
  let tab4 = debitUn._list[roo];
  let tab5 = creditUn._list[rooo];
  let tab6 = codeDeux._list[rooo];
  console.log(tab1,tab2,tab3,tab4,tab5,tab6)
//boucle pour les conditions
  if (tab1 && tab2 && tab3 && tab4) {
    tbody.innerHTML += `
      <tr>
      <td>${trsDate._list[ro]}</td>
      <td>${codeUn._list[roo]}</td>      
      <td></td>
      <td>${trsObjet._list[ro]}</td>
      <td>${debitUn._list[roo]}</td>
      <td></td>
      </tr>
    `; 
    debit.addElementToList(debitUn._list[roo])
    stockdate1.addElementToList(trsDate._list[ro]) 
    stockobjet.addElementToList(trsObjet._list[ro])
    p1.innerHTML = `${totauxdebit= totauxdebit + parseInt(tab4)}`;
    storage();
    ro++;
     roo++;
  } else if (tab1 && tab2 && tab5 && tab6) {
   
    tbody.innerHTML += `
      <tr>
      <td>${trsDate._list[ro]}</td>
      <td></td>      
      <td>${codeDeux._list[rooo]}</td>
      <td>${trsObjet._list[ro]}</td>
      <td></td>
      <td>${creditUn._list[rooo]}</td>
      </tr>
    `;
    credit.addElementToList(creditUn._list);
    stockdate2.addElementToList(trsDate._list) ;
    stockobjet1.addElementToList(trsObjet._list) ;
    p2.innerHTML = `${totauxcredit= totauxcredit + parseInt(tab5)}`;
    storage();
    ro++;
   rooo++;
  } 
  
  else {
    
    trsDate._list.splice(ro,2)
  trsObjet.removeElement(trsObjet._list,ro);
  codeUn.removeElement(codeUn._list,roo)
  codeDeux.removeElement(codeDeux._list,rooo)
  debitUn.removeElement(debitUn._list,roo)
  creditUn.removeElement(creditUn._list,rooo);
  // console.log('je suis la date'+trsDate._list)
  // console.log("je suis l'objet"+trsObjet._list)
  // console.log("je suis le code un"+codeUn._list)
  // console.log("je suis le debit"+debitUn._list)
  // console.log("je suis le code deux"+codeDeux._list)
  // console.log("je suis le credit"+creditUn._list)
    alert(`veuillez svp renseignez les champs comme suite : 
      date-objet-code-débit ou
      date-objet-code-crédit
    `);
  }

  
  

//remise à 0 des champs
  TransactionDate.value = "";
  TransactionObjet.value = "";
  code1.value = "";
  code2.value = "";
  debit1.value = "";
  credit1.value = "";
  
  
});

//fonction de stockage
function storage(){
  window.localStorage.log = tbody.innerHTML;
   window.localStorage.calculd = p1.innerHTML ;
     window.localStorage.calculc = p2.innerHTML;
     window.localStorage.stockdate1 = stockdate1._list;
     window.localStorage.stockdate2 = stockdate2._list;
     window.localStorage.label1 = stockobjet._list;
     window.localStorage.label2 = stockobjet1._list;
     window.localStorage.credit = credit._list;
     window.localStorage.debit = debit._list;
}
//fonction pour assurer la persistance
function getValue(){
  let storage = window.localStorage.log;
  let calculd =  window.localStorage.calculd;
  let calculc = window.localStorage.calculc;
  
  if(storage){
    tbody.innerHTML = storage;
  }
  if(calculc && calculd){
    p1.innerHTML = calculd;
    p2.innerHTML = calculc;
  }
  
}
//appel de la fonction
getValue()