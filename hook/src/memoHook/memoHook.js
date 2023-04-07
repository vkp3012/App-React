import React, { useEffect, useState } from 'react'
import axios from 'axios';
const MemoHook = () => {
    const [data,setData] = useState(null);

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setData(response.data);
        })
    },[]);

    const findLongestName = (comments) => {
        if(!comments) return null;

        let longestName = "";
        for(let i = 0;i<comments.length;i++){
            let currentName = comments[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName;
            }
        }
        console.log("This is Computed");
        return longestName;
    }

    return (
        <div>
            Memo Hook
            <h1>{findLongestName(data)}</h1>
        </div>
    )
}

export default MemoHook
