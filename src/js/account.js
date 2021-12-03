import { List } from "./lib/module.js";
//une petite importotation pour utiliser la notion de classe.

//instanciation des variables dont on aura besoin plustard.
const inputAccount = document.querySelector("#int");
const buttonAccount = document.querySelector("#btn");
const input = document.querySelector("#label");
const combobox = document.querySelector("#ComboBox");
let tableau1 = [];
let tableau2 = [];
let tableau3 = [];
//déclaration des instances
const arrayinput = new List();
const arraycombobox = new List();
const arraylabel = new List();
//écoute sur l'élément input d'ID 'int'
inputAccount.addEventListener("change", function (e) {
  if ((e.target.value.length = 5)) {
    //récupération de la valeur courante dans la liste d'une instance de la classe List
    arrayinput.addElementToList(e.target.value);
  }
});
//écoute sur l'élément input d'ID 'label'
input.addEventListener("change", function (f) {
  if (f.target.value !== null) {
    arraylabel.addElementToList(f.target.value);
  }
});
//écoute sur l'élément select d'ID 'ComboBox'
combobox.addEventListener("change", function (g) {
  if (g.target.value !== null) {
    arraycombobox.addElementToList(g.target.value);
  }
});
// écoute sur l'élément button.
buttonAccount.addEventListener("click", function () {
  //transformation des valeurs du local storage pour pouvoir les stocker dans
  //un tableau et y facilitait l'accés sans qu'il ne se transforme en une seule
  //chaine de caractéres.

  //stockage des valeurs dans le local storage pour un accés plus facile
  window.localStorage.comptes = arrayinput._list;
  window.localStorage.label = arraylabel._list;
  window.localStorage.combobox = arraycombobox._list;

  tableau1 = window.localStorage.comptes.split(",");
  tableau2 = window.localStorage.label.split(",");
  tableau3 = window.localStorage.combobox.split(",");
  //déclaration de l'élément table 
  const table = document.querySelector("#tbl");
  //comptage des lignes du tableau pour l'utiliser comme index puisqu'il sera toujours un nombre
  let rowcount = table.rows.length;
  //boucle if pour éviter les répétitions et établir quelques conditions afin que
  //les données ne soivent pas insérer dans le tableau de maniére désordonnée
  if (
    tableau1[rowcount - 1] &&
    tableau2[rowcount - 1] &&
    tableau3[rowcount - 1]
  ) {
    //création d'une ligne et de ses cellules 
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    //isertion des valeurs à un index donné dans les cellules
    cell1.textContent = tableau1[rowcount - 1];
    cell2.textContent = tableau2[rowcount - 1];
    cell3.textContent = tableau3[rowcount - 1];
    //réinitialisation des valeurs pour que le champ required déclaré au niveau
    //de notre html ne se retrouve pas avec une valeur, créant ainsi un probléme
    //lors de l'affichage.
    input.value = "";
    inputAccount.value = null;
    combobox.value = null;

    // else{
    //     window.localStorage.comptes.splice(rowcount,1);
    //     window.localStorage.label.splice(rowcount,1);
    //     .splice(rowcount,1);
    //    console.log('blem')
    //}
  }
});
