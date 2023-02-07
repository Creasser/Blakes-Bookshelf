import React, { useState } from "react";

function BookDetails(){
const [book, setBook] = useState(null)



    return(
        <div>
            <h1>{book.title}</h1>
            <img src={book.image}></img>
            <h4>{book.author}</h4>
            <p>{book.summary}</p>
            <p>{`Pages: ${book.pageCount}`}</p>
            <a href={book.link}>Click Here to Purchase</a>
        </div>
    )
}

export default BookDetails