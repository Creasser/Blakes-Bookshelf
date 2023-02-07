import React from "react";
import { Link } from "react-router-dom";

function Book({ author, cover, pages, id }){

    function handlePageChange(){

    }

    return (
        <div className="book" onClick={handlePageChange}>
            <img src={cover} className='bookCover'></img>
            <h4>{author}</h4>
            <h4>{`Pages: ${pages}`}</h4>
            <Link to={`/bookshelf/${id}`}>See more</Link>
        </div>
    )
}

export default Book