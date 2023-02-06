import React from "react";

function Book({ title, author, cover, pages}){

    return (
        <div className="book">
            <h1 className="bookTitle">{title}</h1>
            <img src={cover} className='bookCover'></img>
            <h4>{author}</h4>
            <h4>{pages}</h4>
        </div>
    )
}

export default Book