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


if (!book) return <h1 className="loading">Loading...</h1>

    return(
        <div className="bookDetails">
            <h1>{book.title}</h1>
            <img src={book.image}></img>
            <h2>{book.author}</h2>
            <p>{`Pages: ${book.pageCount}`}</p>
            <p id="summary">{book.summary}</p>
            <a className="bookLinks" href={book.link}>Click Here to Purchase</a>
            <br />
            <Link className="bookLinks" to="/bookshelf">Return to Bookshelf</Link>
        </div>
    )
}

export default BookDetails