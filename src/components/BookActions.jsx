
//BookAdder must add the new book to the BookTable, which is a 
//separate component. BookAdder should also have a form to input 
//the book details and a button to submit the form. 
//When the form is submitted, the new book should be added to the 
//Book Table and displayed on the page.

import { useState } from 'react';
import { BookTable } from './BookTable.jsx';

//form to collect inputted books
//put them in a table

//function 1: book adder. put in details about book
export function BookAdder({onAdd}) {
  const [book, setBook] = useState({
    name: '',
    author: '',
    genre: '',
    rating: 1,
    description: '',
    link: '',
  });

  function handleChange(e) {
    const {name, value} = e.target;
    setBook(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    //notify parent of new book
    onAdd && onAdd(book);
    //reset form
    setBook({
      name: '',
      author: '',
      genre: '',
      rating: 1,
      description: '',
      link: '',
    });
  }

  //after creating our functions, we return the form with the new book that was
  //added by the user.
  return (
    <form onSubmit={handleSubmit} className="newBookForm">
      <div className="newBook">
        <label>Book Name:</label>
        <input id="bookName" type="text" name="name" value={book.name} onChange={handleChange}/>
        <label>Author:</label>
        <input id="author" type="text" name="author" value={book.author} onChange={handleChange}/>
        <label>Genre:</label>
        <input id="genre" type="text" name="genre" value={book.genre} onChange={handleChange}/>
        <label>Rating:</label>
        <input id="rating" type="number" name="rating" min="1" max="5" value={book.rating} onChange={handleChange} />
        <label>Description:</label>
        <textarea id="description" name="description" value={book.description} onChange={handleChange}></textarea>
        <label>Link:</label>
        <input id="link" type="url"name="link" value={book.link} onChange={handleChange}/>
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
}

//render the adder and the table.
//must have the addBook function to add the new book to the table.
export function BookManager() {
  const [books, setBooks] = useState([]);

  function addBook(newBook) {
    setBooks(prev => [...prev, newBook]);
  }

  function deleteBook(idx) {
    setBooks(prev => prev.filter((_, i) => i !== idx));
  }

  function editBook(idx, updatedBook) {
    setBooks(prev => {
      const newBooks = [...prev];
      newBooks[idx] = updatedBook;
      return newBooks;
    });
  }

  return (
    <div className="book-manager">
      <BookAdder onAdd={addBook} />
      <BookTable books={books} onDelete={deleteBook} onEdit={editBook} />
    </div>
  );
}


