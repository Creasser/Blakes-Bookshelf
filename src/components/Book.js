import React from "react";

function Book({ title, author, cover, pages}){

    return (
        <div className="book">
            <img src={cover} className='bookCover'></img>
            <h4>{author}</h4>
            <h4>{`Pages: ${pages}`}</h4>
        </div>
    )
}

export default Book