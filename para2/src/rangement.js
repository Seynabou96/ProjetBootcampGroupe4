

// import { List } from "./lib/module";
// const inputAccount = document.querySelector('#int');
// const buttonAccount = document.querySelector('#btn');
// const buttonSupp = document.querySelector('#essai')
// const tableauInput = new List();

// const onClick = (len,e) =>{
//     if(len>=2){
//                 console.log(e)
//                 buttonAccount.addEventListener("click",function(){
//                     if (tableauInput._list.indexOf(e) === -1) {
//                     tableauInput.addElementToList(e);
                    
//                     console.log('Le nouveau tableau est : ' + tableauInput._list);
//                     function addRow() {

//                         var table = document.getElementById('tbl');
            
//                         var rowCount = table.rows.length;
//                         var row = table.insertRow(rowCount);
            
//                         var cell1 = row.insertCell(0);
//                         var element1 = document.createElement("input");
//                         element1.type = "checkbox";
//                         element1.name="chkbox[]";
//                         cell1.appendChild(element1);
//                         var cell2 = row.insertCell(1)
//                         cell2.innerHTML = tableauInput._list.indexOf(e);
//                         var cell3 = row.insertCell(2);
//                         cell3.innerHTML = 'ok'
//                         var cell4 = row.insertCell(3);
//                         cell4.innerHTML='ok1'
//                         var cell5 = row.insertCell(4);
//                         cell5.innerHTML='ok2'
                        
//                     }//fin addRow
//     addRow();
// }//fin if de l'ajout au tableau
// inputAccount.value="";
//                 })//fin inputlistener
            
//             }// if sur la longueur
//         }//fin onclick


//         function onclick2(e){
//             buttonSupp.addEventListener('click',function(){
        
//                 function deleteRow() {
                
//                     var table = document.getElementById('tbl');
//                     var rowCount = table.rows.length;
                    
                    
//                     for(var i=0; i<rowCount; i++) {
                       
//                         var row = table.rows[i];
//                         var chkbox = row.cells[0].childNodes[0];
                        
//                         if(null != chkbox && true == chkbox.checked) {
//                             table.deleteRow(i);
//                             rowCount--;
//                             i--;
                            
//                         }//fin if
//                         //if(tableauInput._list.indexOf(e)===i-1){
//                             tableauInput.removeElement(tableauInput._list,tableauInput._list.indexOf(e))
    
                           
//                      // }
                        
        
//                     }//fin for
                    
                    
//                 }//fin deleterow
//                deleteRow();  
            
//             })//event

        
//         }//onclick2

//         inputAccount.addEventListener("change", function (e) {

//     onClick(e.target.value.length, e.target.value);
//     onclick2(e.target.value);
//     }); 
