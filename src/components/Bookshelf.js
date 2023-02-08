import React from "react";
import Book from "./Book";


function Bookshelf({ books }){
 
    //potentiall add a filter based on book size

    const bookElements = books.map((book) => {
        return <Book key={book.id} id={book.id} author={book.author} cover={book.image} pages={book.pageCount} />
    }) 

    return (
        <div className="bookshelf">
            {bookElements}
        </div>
    )
}

export default Bookshelf