import React,{useState,useEffect} from 'react'
import './style.css'

const getLocalData=()=>{
  const lists=localStorage.getItem("mytodolist")
  if (lists){
    return JSON.parse(lists);
  }
  else{
    return [];
  }
}
const Todo = () => {
  const [inputData,setInputData]=useState("");
  const [items,setItems]=useState(getLocalData());
  const [isEditedItem,setIsEditedItems]=useState("");
  const[toggleButton,setToggleButton]=useState(false);
  const addItems=()=>{
    if(!inputData)
      {
       alert('please enter some value')
      }else if(inputData && toggleButton){
        setItems(items.map((curElem)=>{
          if (curElem.id === isEditedItem)
            {
            return {...curElem, name:inputData}
          }
          return curElem;
        }))
        setInputData("");
        setIsEditedItems(null);
        setToggleButton(false);
      }
    else
      {
      console.log("Before adding:", items);
      const mynewinputdata={
        id:new Date().getTime().toString(),
        name:inputData,
      };
      // const newItems = [...items, mynewinputdata]; 
      setItems( [...items, mynewinputdata]);
      setInputData("");
      }
  };
   
  const editItem=(id)=>{
    const editedItem=items.find((curElem)=>
    {
      return curElem.id === id;
    });
    setInputData(editedItem.name)
    setIsEditedItems(id)
    setToggleButton(true)

  };
  const deleteItem=(id)=>{
    const updateItem=items.filter((curElem)=>
    {
      return curElem.id !== id;
    });
    setItems(updateItem)

  };

  const removeAll=()=>{
    setItems([]);
  }
  useEffect(()=>{
    localStorage.setItem("mytodolist",JSON.stringify(items));
  },[items])
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
        <figure>
          <img src='./image/todo.jpeg' alt='Todo'/>
          <figcaption>Add your List Here ✍️</figcaption>
        </figure>
        <div className='addItems'>
          <input type="text" placeholder='✍️ Add Item' className='formControl' value={inputData}  onChange={(event)=>{setInputData(event.target.value)}}/>
          {toggleButton?<i className="far fa-edit edit-btn" onClick={addItems}></i>:<i className="fa fa-plus add-btn" onClick={addItems}></i>}
         
        </div>
        
        <div className='showItems'>
        {
          items.map((curElem,index)=>{
            return(
              <div className='eachItem' key={curElem.id}>
        <h3>{curElem.name}</h3>
        <div className='todo-btn'>
        <i className="far fa-edit edit-btn" onClick={()=>editItem(curElem.id)}></i>
        <i className="far fa-trash-alt delete-btn" onClick={()=>deleteItem(curElem.id)}></i> 
        </div>

        </div>


            )

          })

          
        }

        </div>
       
        <div className='showItems1'>
        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
        <span>CHECK LIST</span>
        </button>
        </div>

        </div>
      </div>
    </>
  )
}

export default Todo
