

// BookList.js

// imported needed hooks and components
import React, { useState, useEffect } from 'react';
import Book from './Book';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';


function BookList() {

  // created useState for state variables
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState('Fiction');
  const [popularMode, setPopularMode] = useState(false);

  const navigate = useNavigate();  //for navigation process
  const searchRef = useRef(null);

  setTimeout(() => {  // scrolldown behavior and to reach needed part
    searchRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, 100);

  useEffect(() => {   // default books before search,added
    fetchBooks('fiction', 'Scroll less, read more! ');
  }, []);

  const fetchRatingsForBooks = async (bookDocs) => {
    const ratedBooks = await Promise.all(
      bookDocs.slice(0, 10).map(async (book) => {
        const bookId = book.key.split('/').pop();
        try {
          const res = await fetch(`https://openlibrary.org/works/${bookId}/ratings.json`);
          const data = await res.json();
          const avgRating = data?.summary?.average;
          return {
            ...book,
            rating: avgRating ? parseFloat(avgRating.toFixed(1)) : null
          };
        } catch (error) {
          console.error('Rating fetch failed for:', book.title);
          return { ...book, rating: null };
        }
      })
    );

    return ratedBooks;
  };

  const fetchBooks = async (query, genreName = '') => {
    try {
      setLoading(true);
      setPopularMode(false); // Reset popular mode
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      const data = await response.json();
      const ratedBooks = await fetchRatingsForBooks(data.docs);
      setBooks(ratedBooks);
      setGenre(genreName || query);
    } catch (err) {
      console.error('Failed to fetch books:', err);
    } finally {
      setLoading(false);
    }
  };
// handle search text in input
  const handleSearch = () => {
    if (searchText.trim() !== '') {
      fetchBooks(searchText, `Search: "${searchText}"`);
    }
  };
// handle trending books which display the books more 4 ratings and filterout
  const showPopularBooks = () => {
    const popular = books.filter((book) => book.rating && book.rating >= 4);
    setBooks(popular);
    setGenre('Trending Books');
    setPopularMode(true);
  };

const reduxBooks = useSelector((state) => state.books);
const allBooks = [...reduxBooks, ...books]; 

  return (
    <div className="booklist-style">
      <div className="nav-catagory">
        <br />
        {/* genre handling */}
        <h1>✦•┈๑⋅⋯ Genre of Books ⋯⋅๑┈·✦</h1>  
        <nav>
          <ul>
            <li onClick={() => fetchBooks('fiction', 'Fiction')}>Fiction</li>
            <li onClick={() => fetchBooks('fantasy', 'Fantasy')}>Fantasy</li>
            <li onClick={() => fetchBooks('mystery', 'Mystery/Thriller')}>Mystery/Thriller</li>
            <li onClick={() => fetchBooks('romance', 'Romance')}>Romance</li>
            <li onClick={() => fetchBooks('historical fiction', 'Historical Fiction')}>Historical Fiction</li>
            <li onClick={() => fetchBooks('children', "Children’s Books")}>Children’s Books</li>
            <li onClick={() => fetchBooks('horror', 'Horror')}>Horror</li>
          </ul>
        </nav>
      </div>

      {/* Search box */}
      <div className="search-box" ref={searchRef}>
        <h2>Search by Title or Author</h2>
        <div className="search-input">
          <input
            type="text"
            placeholder="Enter your book title..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>🔍︎ Search</button>
        </div>
        <div>
          {/* trensding books */}
          <button className="popular-books" onClick={showPopularBooks}>
            Popular Books
          </button>

           {/* add books */}
          <button className="popular-books" onClick={() => navigate('/add')}>
            Add Book
          </button>

          

          
        </div>
      </div>

      {/* Genre Title */}
      <h1 className="head-body">
        Books You Looked Up: <br />
        <span style={{ color: "aliceblue", fontSize: "30px", textAlign: "center", paddingLeft: "550px" }}>{genre}</span>
      </h1>

      {/* Loading or Book List */}
      {loading ? (
        <div className='loading-books'>
          <p style={{marginTop:'10px',paddingLeft:'100px'}}>Wait few minutes to get books...</p>
          <img src='https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif' alt="loading" />
        </div>
      ) : (
        <div className="book-items">

              {/* render section */}

          {allBooks.length === 0 ? (
                 <p>No books found.</p>
           ) : (
                 allBooks.map((book) => (
                       <Book key={book.key} book={book} rating={book.rating} />
              ))
            )}
          
        </div>
      )}
    </div>
  );
}

export default BookList;
