import React from "react";

function Book({ author, cover, pages }){

    function handlePageChange(){

    }

    return (
        <div className="book" onClick={handlePageChange}>
            <img src={cover} className='bookCover'></img>
            <h4>{author}</h4>
            <h4>{`Pages: ${pages}`}</h4>
        </div>
    )
}

export default Book