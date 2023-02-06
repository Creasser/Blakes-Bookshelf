import React, { useState } from "react";

function NewBook(){
    // create a controlled form
    // have the data in state so that i can pass it up to the app component and add it to the db.json file
const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    image: '',
    summary: '',
    pageCount: '',
    link: ''
})


    return (
        <div>
            New Book
        </div>
    )
}

export default NewBook