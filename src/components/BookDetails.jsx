<<<<<<< HEAD

// importing Hooks and components


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [edition, setEdition] = useState(null);
  const [ebookAccess, setEbookAccess] = useState(null);
  const [error, setError] = useState(null);
  const [languages, setLanguages] = useState([]);

  const books = useSelector((state) => state.books);


  useEffect(() => {

    const localBook = books.find((b) => b.key === id);

    if (localBook) {
      setBook(localBook);   //fetching added book details
    } else {
    fetchBookDetails();
    }  // fetching book details using useEffect hook
  }, []);

  const fetchBookDetails = async () => {
    try {
      // 1. Fetch book data from works API
      const response = await fetch(`https://openlibrary.org/works/${id}.json`);

      const data = await response.json();
      console.log(data)
      setBook(data);

    //   fetch author data

      if (data.authors && data.authors.length > 0) {
        const authorKey = data.authors[0].author.key;
        const authorRes = await fetch(`https://openlibrary.org${authorKey}.json`);
        const authorData = await authorRes.json();
        console.log(authorData);
        data.authors[0].name = authorData.name; // Add name to book data
      }

      setBook(data);

      // 2. Fetch edition data
      const editionRes = await fetch(`https://openlibrary.org/works/${id}/editions.json?limit=1`);
      const editionData = await editionRes.json();
      console.log(editionData)
      setEdition(editionData.entries[0]);

      // 3. Fetch ebook access via search API using title
      if (data.title) {
        const searchRes = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(data.title)}`);
        const searchData = await searchRes.json();
        console.log(searchData)
        const matchedBook = searchData.docs.find(doc => doc.key.includes(id));
        console.log(matchedBook)
        setEbookAccess(matchedBook?.ebook_access || "Unknown");
        setLanguages(matchedBook?.language || []);
      }

      
    } catch (err) {  // error handling if failed to fetch data
      console.error("Failed to fetch book details:", err);
      setError("Unable to load book details.");
    }
  };

  if (error)   // error comes 
      return <div>{error}</div>;
  if (!book)   
      return 
    // setting loading
          <div className='style-loading'>
          <h1>Loading...</h1>     
          <img src='https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif' alt=""/>
         </div>;

  return (
    <div className="book-details">
      <div className='title-author'>
        {/* book details to display in UI */}
        <h1 className="title-book">★ᯓ {book.title} ᯓ★</h1>
        <h3 className='author-name'>by {book.author_name || (book.authors && book.authors[0]?.name) || "Unknown Author"}</h3>
      </div>

      <div className="book-container">
        <div className='book-info'>
          {/* book cover */}
          <img
            className='book-Cover'
            src={
              typeof book.cover_i === 'string' && book.cover_i.startsWith('http')
            ? book.cover_i
            : `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`  // display the cover of the book
                   }
             
            alt={book.title}
          />
          {/* additional intersting details  */}
          <div className='additional-info'>
            {/* category of the book */}
            <p><strong>Category: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </strong> {book.genre || book.subjects?.[0] || "N/A"}</p>
            
            {/* time period - published */}
            <p><strong>Time-period:&nbsp;&nbsp;&nbsp;&nbsp;</strong> {book.subject_times || "N/A"}</p>
            
            {/* published on */}
            <p><strong>Published-On:&nbsp;&nbsp;</strong> {book.published || book.first_publish_date || "N/A"}</p>
            
            {/* pages count */}
            <p><strong>Pages:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> {edition?.number_of_pages || "N/A"}</p>
            
            {/* languages available  */}
            <p><strong>Languages:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> {languages.length > 0 ? languages.join(', ').toUpperCase() : "N/A"}</p>
            
            {/* publisher of the book */}
            <p><strong>Publisher:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> {edition?.publishers?.[0] || "N/A"}</p>
            
            {/* ebook access */}
            <p><strong>eBook Access:&nbsp;&nbsp;&nbsp;&nbsp;</strong> {ebookAccess || "N/A"}</p>
          </div>
        </div>
{/* description of the book */}
        <div className="book-data">
          <p><strong>Description:</strong></p>
          <div
            className='book-desc'
            dangerouslySetInnerHTML={{
              __html:
                book.description?.value ||
                book.description ||
                "No description available.",
            }}
          />
        </div>
      </div>
      {/* button for back to home */}
      <Link to="/">
            <button className='return-home'>Back to Home 🏠︎</button>
      </Link>
      
    </div>
  );
}

export default BookDetails;
=======

// importing Hooks and components


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [edition, setEdition] = useState(null);
  const [ebookAccess, setEbookAccess] = useState(null);
  const [error, setError] = useState(null);
  const [languages, setLanguages] = useState([]);

  const books = useSelector((state) => state.books);


  useEffect(() => {

    const localBook = books.find((b) => b.key === id);

    if (localBook) {
      setBook(localBook);   //fetching added book details
    } else {
    fetchBookDetails();
    }  // fetching book details using useEffect hook
  }, []);

  const fetchBookDetails = async () => {
    try {
      // 1. Fetch book data from works API
      const response = await fetch(`https://openlibrary.org/works/${id}.json`);

      const data = await response.json();
      console.log(data)
      setBook(data);

    //   fetch author data

      if (data.authors && data.authors.length > 0) {
        const authorKey = data.authors[0].author.key;
        const authorRes = await fetch(`https://openlibrary.org${authorKey}.json`);
        const authorData = await authorRes.json();
        console.log(authorData);
        data.authors[0].name = authorData.name; // Add name to book data
      }

      setBook(data);

      // 2. Fetch edition data
      const editionRes = await fetch(`https://openlibrary.org/works/${id}/editions.json?limit=1`);
      const editionData = await editionRes.json();
      console.log(editionData)
      setEdition(editionData.entries[0]);

      // 3. Fetch ebook access via search API using title
      if (data.title) {
        const searchRes = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(data.title)}`);
        const searchData = await searchRes.json();
        console.log(searchData)
        const matchedBook = searchData.docs.find(doc => doc.key.includes(id));
        console.log(matchedBook)
        setEbookAccess(matchedBook?.ebook_access || "Unknown");
        setLanguages(matchedBook?.language || []);
      }

      
    } catch (err) {  // error handling if failed to fetch data
      console.error("Failed to fetch book details:", err);
      setError("Unable to load book details.");
    }
  };

  if (error)   // error comes 
      return <div>{error}</div>;
  if (!book)   
      return 
    // setting loading
          <div className='style-loading'>
          <h1>Loading...</h1>     
          <img src='https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif' alt=""/>
         </div>;

  return (
    <div className="book-details">
      <div className='title-author'>
        {/* book details to display in UI */}
        <h1 className="title-book">★ᯓ {book.title} ᯓ★</h1>
        <h3 className='author-name'>by {book.author_name || (book.authors && book.authors[0]?.name) || "Unknown Author"}</h3>
      </div>

      <div className="book-container">
        <div className='book-info'>
          {/* book cover */}
          <img
            className='book-Cover'
            src={
              typeof book.cover_i === 'string' && book.cover_i.startsWith('http')
            ? book.cover_i
            : `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`  // display the cover of the book
                   }
             
            alt={book.title}
          />
          {/* additional intersting details  */}
          <div className='additional-info'>
            {/* category of the book */}
            <p><strong>Category: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </strong> {book.genre || book.subjects?.[0] || "N/A"}</p>
            
            {/* time period - published */}
            <p><strong>Time-period:&nbsp;&nbsp;&nbsp;&nbsp;</strong> {book.subject_times || "N/A"}</p>
            
            {/* published on */}
            <p><strong>Published-On:&nbsp;&nbsp;</strong> {book.published || book.first_publish_date || "N/A"}</p>
            
            {/* pages count */}
            <p><strong>Pages:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> {edition?.number_of_pages || "N/A"}</p>
            
            {/* languages available  */}
            <p><strong>Languages:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> {languages.length > 0 ? languages.join(', ').toUpperCase() : "N/A"}</p>
            
            {/* publisher of the book */}
            <p><strong>Publisher:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> {edition?.publishers?.[0] || "N/A"}</p>
            
            {/* ebook access */}
            <p><strong>eBook Access:&nbsp;&nbsp;&nbsp;&nbsp;</strong> {ebookAccess || "N/A"}</p>
          </div>
        </div>
{/* description of the book */}
        <div className="book-data">
          <p><strong>Description:</strong></p>
          <div
            className='book-desc'
            dangerouslySetInnerHTML={{
              __html:
                book.description?.value ||
                book.description ||
                "No description available.",
            }}
          />
        </div>
      </div>
      {/* button for back to home */}
      <Link to="/">
            <button className='return-home'>Back to Home 🏠︎</button>
      </Link>
      
    </div>
  );
}

export default BookDetails;
>>>>>>> b63fd2c6263252ab5897b49648971d70fe0a43e5
