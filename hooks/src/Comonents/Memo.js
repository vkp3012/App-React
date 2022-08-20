import React,{useEffect,useMemo,useState} from 'react'
import axios from 'axios';

function Memo() {
    const [data,setData] = useState("");
    const [toggle,setToggle] = useState(false)

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) =>{
                setData(response.data);
            })
    },[])


    const findLongestName = (comments) =>{
        if (!comments) return null;

        let longestName = "";
        for(let i = 0;i<comments.length;i++){
            let currentName = comments[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName;
            }
        }

        console.log('This is Computed');
        return longestName;

    }

    const getLongestName = useMemo(()=> findLongestName(data),[data])

  return (
    <div className='App'>
        {/* <div>{findLongestName(data)}</div> */}
        <div>{getLongestName}</div>

        <button
            onClick={()=>{
                setToggle(!toggle)
            }}
        >
            {""}
            Toggle
        </button>

        {toggle && <h1>toggle</h1>}
    </div>
  )
}

export default Memo