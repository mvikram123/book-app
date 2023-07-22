import React from 'react';

const Book = ({ book }) => {
  const { title, authors, description, previewLink, infoLink } = book;

  return (
    <div className="book-details">
      <h2>{title}</h2>
      <p>Authors: {authors.join(', ')}</p>
      <p>{description}</p>
      <a href={previewLink} target="_blank" rel="noopener noreferrer">
        <button>Read Now</button>
      </a>
      <a href={infoLink} target="_blank" rel="noopener noreferrer">
        <button>More Info</button>
      </a>
    </div>
  );
};

export default Book;