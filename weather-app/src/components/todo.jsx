import React, { useEffect, useState } from 'react'

const getLocalItem = () => {
    let list = localStorage.getItem("lists")
    if(list){
        return JSON.parse(localStorage.getItem("lists"));
    }else{
        return [];
    }
}

const Todo = () => {
    const [state,setState] = useState("");
    const [items,setItems] = useState(getLocalItem());
    const [editItem,setEditItems] = useState(null);
    const [toggle , setToggle] = useState(true);

    const addItems = () =>{
        if(!state){
            alert("please fill the Form...")
        }else if(state && !toggle){
            setItems(
                items.map((elem) => {
                    if(elem.id === editItem){
                        return {...elem, name:state}
                    }
                    return elem;
                })
            )
            setToggle(true);
            setState("");
            setEditItems(null);
        }else{
            const allInputData = {id: new Date().getTime().toString(),name:state}
            setItems([...items,allInputData]);
            setState("");
        }
    }

    const deleteItem = (index) =>{
        const updateItem = items.filter((elem)=>{
            return index !== elem.id;
        })
        setItems(updateItem);
    }

    const editItems = (id) =>{
        const editItem = items.find((elem)=>{
            return elem.id === id;
        })
        setToggle(false);
        setState(editItem.name);
        setEditItems(id);
    }

    useEffect(()=>{
        localStorage.setItem("lists",JSON.stringify(items))
    })

    return (
        <div className='container-xxl d-flex flex-column bg'>
                <div className='d-flex flex-column justify-content-center align-items-center p-1'>
                    <h1 className='text-dark'>📝</h1>
                    <h5 className='text-light'>Add Your List Name 🔥</h5>
                </div>
                <input 
                    className='bg'
                    placeholder='Type Some Thing...✍️' 
                    value={state}
                    type = "text"
                    onChange={(e)=>setState(e.target.value)}    
                />
                {
                    toggle ? <button onClick={addItems}>ADD TODO LIST</button> :
                    <button onClick={addItems}>UpDate Todo</button>
                }
                
            <div className='showItems'>
                {
                    items.map((elem)=>{
                        return(
                            <div className='eachItem' key={elem.id}>
                                <h4 className="text-light">{elem.name}</h4>
                                <div className='f-2 fs-4'>
                                        <i className="fa fa-edit text-light" title="Edit Item" onClick={()=>editItems(elem.id)}></i>
                                        <i className="fa fa-trash text-light" title="Delete Item" onClick={()=>deleteItem(elem.id)}></i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todo
