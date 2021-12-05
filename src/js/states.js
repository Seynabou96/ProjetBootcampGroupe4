import { List } from "./lib/module";
import { onChange } from "./lib/module";
//affectations
const date1 = document.querySelector('#fdate');
const date2 = document.querySelector('#ldate');
const combo = document.querySelector('#ComboBox')
const dateun = new List();
const datedeux = new List();
const comboarray = new List();
const last = new List();
const bouton = document.querySelector('#btn')
const p1 = document.querySelector('#somme1')
const p2 = document.querySelector('#somme2')
let m = 0; let mm = 0; let mmm=0;
//écoute des événements
onChange(date1,dateun);
onChange(date2,datedeux);
onChange(combo,comboarray);

bouton.addEventListener('click',function(){
    
    
    let array1 = dateun._list[m];
   let array2 = datedeux._list[mmm];
   let array3 = comboarray._list[mm];
   //transformation des stockages en tableaux
    let tabb0 = window.localStorage.stockdate1.split(",");
   let tabb1 = window.localStorage.label1.split(",");
  let  tabb2 = window.localStorage.debit.split(",");
  let  tabb3 = window.localStorage.credit.split(",");
  let  tabb4 = window.localStorage.label2.split(",");
  let  tabb5 = window.localStorage.stockdate2.split(",");

  let totauxdebit = 0;
  let totauxcredit = 0;
 let ok = tabb2[m]
  const tbody = document.querySelector('#tbody')

  //conditions
if(array1 && array3){

for (let i =0;i<tabb0.length; i++){
    if(dateun._list[m] == tabb0[i] && comboarray._list[mm] == tabb1[i] ){
       let debit = ok;
       last.addElementToList(debit);
        tbody.innerHTML += `
    <tr>
        <td>${dateun._list[m]}</td>
        <td>${comboarray._list[mm]}</td>
        <td>${debit}</td>
        <td></td>
    </tr>
  `
  p1.innerHTML = `${ totauxdebit += parseInt(ok)}`;
  
    console.log(totauxdebit,m,mm)
  m++; mm++;

    }
    
}

  
}
else if (array2 && array3){
    for (let y =0;y<tabb5.length; y++){
        if(datedeux._list[mmm] == tabb5[y] && comboarray._list[mm] == tabb4[y] ){
          let  credit = tabb3[mmm];
          console.log(credit)
            tbody.innerHTML += `
            <tr>
                <td>${datedeux._list[mmm]}</td>
                <td>${comboarray._list[mm]}</td>
                <td></td>
                <td>${credit}</td>
            </tr>
          `
          p2.innerHTML = `${totauxcredit += parseInt(tabb5[mmm])}`;
          mmm++; mm++;
        }
    }
    
    
}
else{
    dateun._list.splice(m,2)
    datedeux._list.splice(mmm,2)
    comboarray.removeElement(comboarray._list,mm)
    alert(`vous n'avez pas saisi les bonnes combinaisons, veuillez etre plus précis`)
}
//tentative de changement des couleurs
// if(totauxcredit < totauxdebit){
    //   document.getElementsByTagName('span')[1].style.color='red';
    // }
date1.value = "";
date2.value = "";
combo.value = "";


})

