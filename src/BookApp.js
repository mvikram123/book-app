// pages/Home.js
import React, { useState, useEffect } from 'react';
import Book from './components/Book';
import SearchBar from './components/SearchBar';

const BookApp = () => {
  const [bookData, setBookData] = useState([]);
  const [expandedBookId, setExpandedBookId] = useState(null);

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
      .then(response => response.json())
      .then(data => {
        const harryPotterBooks = data.items.map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors || [],
          description: item.volumeInfo.description || '',
          previewLink: item.volumeInfo.previewLink || '',
          infoLink: item.volumeInfo.infoLink || '',
        }));
        setBookData(harryPotterBooks);
      })
      .catch(error => {
        console.error('Error fetching Harry Potter books:', error);
      });

    fetch('https://www.googleapis.com/books/v1/volumes?q=sherlock+holmes')
      .then(response => response.json())
      .then(data => {
        const sherlockHolmesBooks = data.items.map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors || [],
          description: item.volumeInfo.description || '',
          previewLink: item.volumeInfo.previewLink || '',
          infoLink: item.volumeInfo.infoLink || '',
        }));
        setBookData(prevData => [...prevData, ...sherlockHolmesBooks]);
      })
      .catch(error => {
        console.error('Error fetching Sherlock Holmes books:', error);
      });
  }, []);

  const handleSearch = query => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(response => response.json())
      .then(data => {
        const searchedBooks = data.items.map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors || [],
          description: item.volumeInfo.description || '',
          previewLink: item.volumeInfo.previewLink || '',
          infoLink: item.volumeInfo.infoLink || '',
        }));
        setBookData(searchedBooks);
      })
      .catch(error => {
        console.error('Error fetching searched books:', error);
      });
  };

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      <div className="book-list">
        {bookData.map(book => (
          <Book
            key={book.id}
            book={book}
            expanded={expandedBookId === book.id}
            onClick={() => setExpandedBookId(book.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BookApp;
