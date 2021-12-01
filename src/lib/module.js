export class List{
    _list=[]

    // Command
    addElementToList(element){
        this._list.push(element)
    }


    removeElement(_list,i){
       //this._list.filter(element=>element.id !== id)
               this._list.splice(i,1);
               //this._list.filter(element=> {return element !== value})
        }
    
    

    updateElement(element){
       for (myElement in this._list){
           if(myElement.id === element.id){
            myElement=element
           }else{
               console.log('Error: the element to update not exist in the list')
           }
       }
    }

    sortList(){
        this._list.sort();
    }
}

class TodoList extends List{
    constructor(){
        super();
    }
}

class AccountList extends List{
    constructor(){
        super();
    }
}


