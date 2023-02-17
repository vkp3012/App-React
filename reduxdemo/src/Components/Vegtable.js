import React, { useState } from 'react'
import { connect } from "react-redux";

const Vegtable = ({vegtables,buyVeg,sellVeg}) => {
    const [qty, setQty] = useState(1);
    
    return (
        <>
            <div>
                <h1>Vegtable : {vegtables}</h1>
                {/* <input type="number" value={qty} onChange={(e)=>setQty(e.target.value)}/> */}
                <button onClick={()=>buyVeg(qty)}>-</button>
                <button onClick={sellVeg}>+</button>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        vegtables : state.vegtable.vegtables
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyVeg : (qty) => dispatch({type:"BUY_VEG", payload:qty}),
        sellVeg : () => dispatch({type:"SELL_VEG"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Vegtable)
