import React, { useEffect, useState } from 'react'
import '../styles/book.css'
import {API} from '../../API'
import axios from 'axios';
function Booklist() {
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        axios
            .get(API)
            .then(res =>{
                console.log(res.data);
                setBooks(res.data)
            })
            .catch(err=>console.log(err))
    },[])

    return (
        <div className='book-list'>
            {
                // eslint-disable-next-line array-callback-return
                books.map((book) => (
                    <div key={book.id} className="book">
                        <div><h5>{book.title}</h5></div>
                        <div><img src = {book.image_url} alt = "#"/></div>
                        <div><button>Add To Favorites</button></div>
                    </div>
                ))
            }
        </div>
    )
}

export default Booklist