import React from 'react'

const Square = (props) => {
    return (
        <div 
            onClick={props.onClick}
            style={{
                border:"5px solid",
                width:"40%",
                height:"100px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                background:"lightblue"
            }}
            className='square'>
            <h5>{props.value}</h5>
        </div>
    )
}

export default Square
