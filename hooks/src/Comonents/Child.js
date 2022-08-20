import React, { useEffect } from 'react'

function Child({returnContext}) {
    useEffect(()=>{
        console.log("Function is Called");
    },[returnContext])
  return (
    <div>{returnContext(" Pedro")}</div>
  )
}

export default Child