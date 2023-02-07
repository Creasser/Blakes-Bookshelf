import React from "react";
import Book from "./Book";


function Bookshelf({ books }){

    //need to create a new component that will take some of the book info and create a card for it
    //on the card I want it to show the title, author, and coverimg. (possibly the page count)
    //will need to have state to hold the books component, will need to determine where it will need to be. more than likely it will be the app component. 

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