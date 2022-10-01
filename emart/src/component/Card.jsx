import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import Skeleton from "react-loading-skeleton"


export default function Card() {
    // const state = useSelector((state)=> state.handleCard());

    const [ product, setProduct ] = useState([]);
    const [ loading, setLoading ] = useState(false);

 

    useEffect(()=>{
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch("http://fakestoreapi.com/products");
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[]);

    const Loading = () => {
        return (
            <>
                Loading.....
            </>
        )
    }

    const ShowProduct = () => {
        return(
            <>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <img src= { product.image } alt={product.title} height="200px" width="180px"/>
                        </div>
                    </div>
                </div>
            </>
        )
    }

  return (
    <div>
        <div className="container py-4">
            <div className="row py-3">
                {
                    loading ? <Loading /> : <ShowProduct />
                }
            </div>
        </div>
    </div>
  )
}
