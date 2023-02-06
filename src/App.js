import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import Bookshelf from './components/Bookshelf';
//create NavBar component that will have links to the Home page, book page, and add book page
//create Home component, this component will just have general information about the website
//create BookShelf component: This component will display a small preview of all the books. When the book is clicked on, the user will be redirected to another page that shows only the book clicked on and more information about the book.
//will need to make a book component that can be resused for each book that is passed to create the book card

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/books')
    .then(r => r.json())
    .then(data => setBooks(data))
  }, [])

  

  return (
    <div className='app'>
      <NavBar />
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/bookshelf">
        <Bookshelf books={books} />
      </Route>
    </div>
  );
}

export default App;
