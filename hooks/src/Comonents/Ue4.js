import React ,{ useState, useEffect} from 'react'
import axios from "axios";

function Ue4() {

    const [data,setData] = useState("");
    const [count,setCount] = useState(0);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) =>{
                // console.log(response.data);
                setData(response.data[99].email);
                console.log("API is called");
            })
    },[])

  return (
    <div>
        hello World 
        <h1>{data}</h1>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count+1)
          }}
        >
          Click Here
        </button>
      </div>
  )
}

export default Ue4