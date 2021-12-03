import { List } from "./lib/module.js";
//une petite importotation pour utiliser la notion de classe.

//instanciation des variables DOM dont on aura besoin plustard.
const inputAccount = document.querySelector("#int");
const buttonAccount = document.querySelector("#btn");
const input = document.querySelector("#label");
const combobox = document.querySelector("#ComboBox");
const table = document.querySelector("#tbl");

// Variable de stockage
let LIST = [], id;
let classeRecup, labelRecup, codeRecup;
let data = localStorage.getItem('listCompte');

//Verifier si le localStorage contient des donnees

if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  tableList(LIST);
} else {
  LIST = [];
  id = 0;
}

//Chargement des données sur une Table de la page

function tableList(array) {
  array.forEach(function (item) {
    addDataToTable(item.id, item.code, item.label, item.classe)
  });
}

//Fonction D'ajout de donnes storage dans la table de la page
function addDataToTable(id, code, label, classe) {
  const row = table.insertRow(-1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  //isertion des valeurs à un index donné dans les cellules
  cell1.textContent = id;
  cell2.textContent = code;
  cell3.textContent = label;
  cell4.textContent = classe;
}


//écoute sur l'élément input d'ID 'int'
inputAccount.addEventListener("change", function (e) {
  if (e.target.value.length === 5) {
    console.log(e.target.value);
    codeRecup = e.target.value;
  }
});
//écoute sur l'élément input d'ID 'label'
input.addEventListener("change", function (f) {
  if (f.target.value !== null) {
    console.log(f.target.value);
    labelRecup = f.target.value;

  }
});
//écoute sur l'élément select d'ID 'ComboBox'
combobox.addEventListener("change", function (g) {
  if (g.target.value !== null) {
    console.log(g.target.value);
    classeRecup = g.target.value;
  }
});
// écoute sur l'élément button.
buttonAccount.addEventListener("click", function () {
  //Ajout des données entre du formulaire dans le tableau

  if (inputAccount.value && combobox.value && input.value) {
    addDataToTable(id, codeRecup, labelRecup, classeRecup);

    LIST.push({
      id: id,
      code: codeRecup,
      label: labelRecup,
      classe: classeRecup
    });

    localStorage.setItem('listeCompte', JSON.stringify(LIST));
    id++;
  }
  //réinitialisation des valeurs pour que le champ required déclaré au niveau
  //de notre html ne se retrouve pas avec une valeur, créant ainsi un probléme
  //lors de l'affichage.
  input.value = "";
  inputAccount.value = "";
  combobox.value = "";
});
