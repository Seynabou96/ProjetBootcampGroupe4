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

}

export function onChange(event,tableau){
    event.addEventListener('change',function(e){
    tableau.addElementToList(e.target.value);
    console.log(tableau)
  })
    }