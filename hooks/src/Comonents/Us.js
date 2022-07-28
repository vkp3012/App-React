import React, {useState} from 'react'

function Us() {

    const [count, setCount] = useState(0);
    const [emoji, setEmoji] = useState("🤣");
    const [msg, setMsg] = useState({SayHi:"I am Hooked"});

  return (
    <div style={{padding:"1rem",background:"lightblue" ,display:"flex",justifyContent:"space-around"}}>

        <div style={{padding:"1rem",display:"flex",flexDirection:"column",justifyContent:'center',textAlign:"center"}}>
            <h1>Count</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count-1)}>-</button>
        </div>
        
        <div style={{padding:"1rem",display:"flex",flexDirection:"column",textAlign:"center"}}>

        <h1>Set Emoji</h1>
            <button onClick={()=>setEmoji("🤣")}>Laugh</button>
            <h1>{emoji}</h1>
            <button onClick={()=>setEmoji("😭")}>cry</button>
        </div>
        <p>{msg.SayHi}</p>
    </div>
  )
}

export default Us