// //une petite importotation pour utiliser la notion de classe.

import { List } from "./lib/module";
import { onChange } from "./lib/module";

const TransactionDate = document.querySelector('#datLog');
const TransactionObjet= document.querySelector('#transLog');
const code1 = document.querySelector('#codeLog');
const label1 = document.querySelector('#labelLog');
const debit1= document.querySelector('#debitLog');
const credit1 = document.querySelector('#creditLog');
const code2 = document.querySelector('#codeLogdeux');
const label2= document.querySelector('#labelLogdeux');
const credit2= document.querySelector('#debitLogdeux');
const debit2= document.querySelector('#creditLogdeux');
const button = document.querySelector('#btn');
// Vérification de chaque élément
// console.log(TransactionDate,TransactionObjet,code1,code2,label1)
// console.log(label2,credit1,credit2,debit1,debit2)
//instances
const trsDate= new List();
const trsObjet= new List();
const codeUn= new List();
const codeDeux= new List();
const labelUn= new List();
const labelDeux= new List();
const creditUn = new List();
const creditDeux = new List();
const debitUn= new List();
const debitDeux= new List();

//écoute des événements sur chaque élément

onChange(TransactionDate,trsDate);
onChange(TransactionObjet,trsObjet);
onChange(code1,codeUn);
onChange(label1,labelUn);
onChange(debit1,debitUn);
onChange(credit1,creditUn);
onChange(code2,codeDeux);
onChange(label2,labelDeux);
onChange(debit2,debitDeux);
onChange(credit2,creditDeux);
const table = document.querySelector('#tbl');
  let rouncount = table.rows.length;
let ro = 0;

button.addEventListener('click',()=>{
  let tab1 =trsDate._list[ro]
  let tab2 =trsObjet._list[ro]
  if(tab2){
    console.log("c'e0st ok")
  }
  else{
    console.log("try again")
  }

})