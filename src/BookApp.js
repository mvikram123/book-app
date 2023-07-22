//import ReactDOM from "react-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './components/Book';
import SearchBar from './components/SearchBar';


const BookApp = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async (query) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=harry+potter=${query}`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    // Fetch initial data (e.g., popular books, featured books, etc.)
    fetchBooks('reactjs');
  }, []);

  return (
    <div className="book-app">
      <SearchBar onSearch={fetchBooks} />
      <div className="book-list">
        {books.map((book) => (
          <Book key={book.id} book={book.volumeInfo} />
        ))}
      </div>
    </div>
  );
};

export default BookApp;
