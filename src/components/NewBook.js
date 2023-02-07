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

function handleChange(e){
    const name = e.target.name
    const value = e.target.value

    setNewBook({
        ...newBook,
        [name]: value
    })
}

console.log(newBook)
    return (
        <div>
            <form>
                <input 
                type="text"
                name="title"
                value={newBook.title}
                placeholder='Enter Book Title'
                onChange={handleChange}>
                </input>
                <input 
                type="text"
                name="author"
                value={newBook.author}
                placeholder='Enter Author'
                onChange={handleChange}>
                </input>
                <input 
                type="text"
                name="image"
                value={newBook.image}
                placeholder='Enter Image'
                onChange={handleChange}>
                </input>
                <input 
                type="text"
                name="summary"
                value={newBook.summary}
                placeholder='Enter Summary'
                onChange={handleChange}>
                </input>
                <input 
                type="text"
                name="pageCount"
                value={newBook.pageCount}
                placeholder='Enter Page Count'
                onChange={handleChange}>
                </input>
                <input 
                type="text"
                name="link"
                value={newBook.link}
                placeholder='Enter Link to Purchase'
                onChange={handleChange}>
                </input>
            </form>
        </div>
    )
}

export default NewBook