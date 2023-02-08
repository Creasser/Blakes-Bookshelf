import React from "react";
import { Link } from "react-router-dom";

function Book({ author, cover, pages, id }){

    return (
        <div className="book">
            <img src={cover} className='bookCover'></img>
            <h4>{author}</h4>
            <h4>{`Pages: ${pages}`}</h4>
            <Link className="bookLinks" to={`/bookshelf/${id}`}>See more</Link>
        </div>
    )
}

export default Book