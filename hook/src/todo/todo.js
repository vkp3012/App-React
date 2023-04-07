import React, { useEffect, useState } from 'react'

const getLocalItems = () => {
    let list = localStorage.getItem("lists");
    console.log(list);

    if(list){
        return JSON.parse(localStorage.getItem("lists"));
    }else{
        return [];
    }
}

const Todo = () => {
    const [inputData,setInputData] = useState("")
    const [items,setItems] = useState(getLocalItems());
    const [toggle,setToggle] = useState(true);
    const [editItems,setEditItems] = useState(null);

    //add items
    const addItem = () => {
        if(!inputData){
            alert("please fill the data");
        }else if(inputData && !toggle){
            setItems(
                items.map((elem) => {
                    if(elem.id === editItems){
                        return {...elem,name:inputData}
                    }
                    return elem;
                })
            )
            setToggle(true)
            setInputData("");
            setEditItems(null);
        }
        else{
            const allInputData = { id : new Date().getTime().toString(), name:inputData}
            setItems([...items,allInputData])
            setInputData("")
        }
    }

    const editItem = (id) => {
        let updateItem = items.find((elem)=> {
            return elem.id === id;
        })

        console.log(updateItem);
        setToggle(false)
        setInputData(updateItem.name);
        setEditItems(id);
    }

    // delete items
    const deleteItem = (index) => {
        const updateData = items.filter((elem)=>{
            return index !== elem.id
        })
        
        setItems(updateData)
    }

    // remove all items
    const removeAll = () => {
        setItems([]);
    }

    // add data in local storage
    useEffect(()=>{
        localStorage.setItem("lists" ,JSON.stringify(items))
    },[items])

    return (
        <div className='main-dev'>
            <div className='child-dev'>
                <h1>Todo List</h1>
                <h5>Add Your List Name 🔥</h5>
                <div className='addItem'>
                    <input placeholder='✍️ Write Here' type='text'
                        value={inputData}
                        onChange={(e)=>setInputData(e.target.value)}
                    />
                    {
                        toggle ?  <i className="fa fa-solid fa-plus add-item" title="Add Item" onClick={addItem}></i> :
                        <i className="fa fa-edit" title="Update Item" onClick={addItem}></i>
                    }
                </div>

                <div className='showItem'>
                    {
                        items.map((elem)=>{
                            return(
                                <div className='eachItem' key={elem.id}>
                                    <h4>{elem.name}</h4>
                                    <div className='f-2 fs-4'>
                                        <i className="fa fa-edit" title="Edit Item" onClick={()=>editItem(elem.id)}></i>
                                        <i className="fa fa-trash" title="Delete Item" onClick={()=>deleteItem(elem.id)}></i>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='showItem'>
                    <button className='btn effect04' data-sm-link-text="Remove all" onClick={removeAll}>
                        <span>Check List</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Todo
