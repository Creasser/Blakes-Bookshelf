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

function handleSubmit(e){
    e.preventDefault()
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
                className="formInput"
                onChange={handleChange}>
                </input>
                <input 
                type="text"
                name="author"
                value={newBook.author}
                placeholder='Enter Author'
                className="formInput"
                onChange={handleChange}>
                </input>
                <input 
                type="text"
                name="image"
                value={newBook.image}
                placeholder='Enter Image'
                className="formInput"
                onChange={handleChange}>
                </input>
                <input 
                type="text"
                name="summary"
                value={newBook.summary}
                placeholder='Enter Summary'
                className="formInput"
                onChange={handleChange}>
                </input>
                <input 
                type="text"
                name="pageCount"
                value={newBook.pageCount}
                placeholder='Enter Page Count'
                className="formInput"
                onChange={handleChange}>
                </input>
                <input 
                type="text"
                name="link"
                value={newBook.link}
                placeholder='Enter Link to Purchase'
                className="formInput"
                onChange={handleChange}>
                </input>
                <input
                type='submit'
                name="submit"
                value='Add Book'
                className="submitBtn">
                </input>
            </form>
        </div>
    )
}

export default NewBook