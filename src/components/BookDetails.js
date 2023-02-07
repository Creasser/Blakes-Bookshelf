import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function BookDetails(){
const [book, setBook] = useState(null)
const params = useParams()


useEffect(() => {
    fetch(`http://localhost:4000/books/${params.id}`)
    .then(r => r.json())
    .then(data => setBook(data))
}, [params.id])


if (!book) return <h1>Loading...</h1>

    return(
        <div>
            <h1>{book.title}</h1>
            <img src={book.image}></img>
            <h4>{book.author}</h4>
            <p>{book.summary}</p>
            <p>{`Pages: ${book.pageCount}`}</p>
            <a href={book.link}>Click Here to Purchase</a>
            <br />
            <Link to="/bookshelf">Return to Bookshelf</Link>
        </div>
    )
}

export default BookDetails