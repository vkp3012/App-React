import React, { useEffect, useState } from 'react'
const getLocalItems1 = () => {
    let list = localStorage.getItem("lists1");
    console.log(list);

    if(list){
        return JSON.parse(localStorage.getItem("lists1"))
    }else{
        return [];
    }
}

const Registration = () => {
    const [userDetails,setUserDetails] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    })

    const [records,setRecords] = useState(getLocalItems1());
    const [toggle,setToggle] = useState(true)
    const [editItems,setEditItems] = useState(null);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        console.log(name,value);
        setUserDetails({...userDetails,[name]:value})
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        if(!userDetails){
            alert("please fill tha data")
        }else if(userDetails && !toggle){
            setRecords(
                records.map((elem)=>{
                    if(elem.id === editItems){
                        return {...elem,}
                    }
                    return elem;
                })
            )
                setToggle(true)
                setUserDetails("")
                setEditItems(null);
        }else{
            const newRecord = {...userDetails, id : new Date().getTime().toString()}
            setRecords([...records,newRecord]);
            setUserDetails({username:"",email:"",password:"",phone:""})
        }
        
    }

    const editItem = (id) => {
        const updateItem = records.find((curElem)=>{
            return curElem.id === id;
        })
        setToggle(false)
        setUserDetails(updateItem)
        setEditItems(id);
    }

    const deleteItem = (index) => {
        const updateData = records.filter((curElem)=>{
            return index !== curElem.id
        });

        setRecords(updateData);
    }

    useEffect(()=>{
        localStorage.setItem("lists1",JSON.stringify(records));
    })

    return (
        <div className='container-fluid mt-3'>
            <div className='row m-2'>
                <div className='col-8 p-3'>
                    <table className='w-100'>
                        {/* <tr>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Password</th>
                            <th>Click Here</th>
                        </tr> */}
                        {
                            records.map((curElem)=>{
                                return(
                                        <tr>
                                            <td><h5>ID:&nbsp;{curElem.id}</h5></td>
                                            <td><h5>User Name : {curElem.username}</h5></td>
                                            <td><h5>Email: {curElem.email}</h5></td>
                                            <td><h5>Phone : {curElem.phone}</h5></td>
                                            <td><h5>Password : {curElem.password}</h5></td>
                                            <tr colspan="3" className='d-flex justify-content-around p-2'> 
                                                <i className="fa fa-edit" title="Edit Item" onClick={()=>editItem(curElem.id)}></i>
                                                {/* <button>All Details</button> */}
                                                <i className="fa fa-trash" title="Delete Item" onClick={()=>deleteItem(curElem.id)}></i>
                                            </tr>
                                        </tr>
                                )
                            })
                        }
                    </table>
                </div>

                <div className='col-4 bg-secondary p-3 h-25'>
                    <h1 className='d-flex align-items-center justify-content-center'>User Details</h1>
                    <form action=''  onSubmit={handleSubmit}>

                        <div className='p-2'>
                            <label htmlFor='username'>Full Name</label>
                            <input type='text' autoComplete='off' name='username' 
                                value={userDetails.name}
                                onChange={handleChange}
                            id='username' />
                        </div>

                        <div className='p-2'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' autoComplete='off' name='email' 
                                value={userDetails.email}
                                onChange={handleChange}
                            id='email' />
                        </div>

                        <div className='p-2'>
                            <label htmlFor='phone'>Phone Number</label>
                            <input type='phone' autoComplete='off' name='phone' 
                                value={userDetails.phone}
                                onChange={handleChange}
                            id='phone' />
                        </div>

                        <div className='p-2'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' autoComplete='off' name='password' 
                                value={userDetails.password}
                                onChange={handleChange}
                            id='password' />
                        </div>
                        {
                            toggle ? <button type='submit'>Registration</button> : <button type='submit'>UPDATE DETAILED</button>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration
