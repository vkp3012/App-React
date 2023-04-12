import React from 'react'

const Quotes = (props) => {
    console.log(props);
    return (
        <div className='quote'>
            <h6 className='fs-5 fst-italic font'>"{props.data.content}"<strong> - {props.data.author}</strong></h6>
            {/* <b className='d-flex justify-content-end'>-{props.data.author}</b> */}
        </div>
    )
}

export default Quotes