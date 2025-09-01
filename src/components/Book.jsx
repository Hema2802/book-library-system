

// Book.jsx component
// importing
import React from 'react';
import { Link } from 'react-router-dom';


function Book({ book, rating }) {
  // create a book id
  const bookId = book.key.split('/').pop();

  return (
    <div className='book-items'>
      <div className="book-card">
        {/* book image */}
        <img
          className='book-imageCover'
          src={
            typeof book.cover_i === 'string' && book.cover_i.startsWith('http')
            ? book.cover_i 
            : `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`|| "https://islandpress.org/files/default_book_cover_2015.jpg"
             }
          alt={book.title}
        />
        {/* book content */}
        <div className='book-content'>
          <h3>{book.title}</h3>
          <p>{book.author_name}</p>
          {rating && <p>⭐ Rating: {rating}</p>}
          <h4>{book.ebook_access}</h4>
        </div>
        {/* view details button present in book card */}
        <Link to={`/book/${bookId}`} className='book-link'>
          <button className='view-details'>View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default Book;
