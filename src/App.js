import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import Bookshelf from './components/Bookshelf';
import NewBook from './components/NewBook';
import BookDetails from './components/BookDetails';


function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/books')
    .then(r => r.json())
    .then(data => setBooks(data))
  }, [])

  function addBook(addedBook){
    setBooks([...books, addedBook])
  }

  return (
    <div className='app'>
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/bookshelf/:id">
        <BookDetails />
      </Route>
      <Route exact path="/bookshelf">
        <Bookshelf books={books} />
      </Route>
      <Route exact path='/newbook'>
        <NewBook onAddBook={addBook} />
      </Route>
    </div>
  );
}

export default App;
