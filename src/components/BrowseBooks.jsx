<<<<<<< HEAD


// importing needed hooks and components
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const BrowseBooks = () => {

  const books = useSelector((state) => state.books); 

  return (
    <div className="browse-page">
      <h2 className='browse-heading'> ˙⋆✮ Books You've Added ✮⋆˙</h2>
      
      {/* button to return home page */}
      <Link to="/">
      <button className='browse-backbtn'>↩ Back to Home</button>
      </Link>

     {/* if there is no books  */}
      {books.length === 0 ? (
        <p style={{paddingLeft:'40px'}}>No books available. Try adding some!</p>
      ) : (
        <div >
        <ol className='total-list'>
          {books.map((book) => (
            

           
            <li key={book.key} style={{listStyleType:'none'}}>
                <div className='added-bookcard'>
                <h2 style={{textAlign:'center',paddingTop:'10px'}}>{book.title}</h2>
                <p style={{marginLeft:'90px'}}>by {book.author_name}</p> 
                <br/>
                <img  src={book.cover_i || 'https://islandpress.org/files/default_book_cover_2015.jpg'} alt="Book" style={{ width: '100px', marginLeft:'100px' }} /> 
                 
                {/* added book card details */}
               
                <div className='added-bookcontent'>
                <p style={{color:'red',fontWeight:'500'}}>Newly Added</p>
                <p><span>Published-On : </span>{book.published}</p> <br/> 
                <p><span>Catagory : </span>{book.genre}</p> <br/> 
                <p><span>Rate : </span>⭐({book.rating}/5)</p><br/> 
                <p><span>About : </span>{book.description}</p>

                
                </div>
                
                </div>
              
            </li>
           
          ))}
        </ol>

        </div>
         
      )}
    </div>
  );
};

export default BrowseBooks;
=======


// importing needed hooks and components
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const BrowseBooks = () => {

  const books = useSelector((state) => state.books); 

  return (
    <div className="browse-page">
      <h2 className='browse-heading'> ˙⋆✮ Books You've Added ✮⋆˙</h2>
      
      {/* button to return home page */}
      <Link to="/">
      <button className='browse-backbtn'>↩ Back to Home</button>
      </Link>

     {/* if there is no books  */}
      {books.length === 0 ? (
        <p style={{paddingLeft:'40px'}}>No books available. Try adding some!</p>
      ) : (
        <div >
        <ol className='total-list'>
          {books.map((book) => (
            

           
            <li key={book.key} style={{listStyleType:'none'}}>
                <div className='added-bookcard'>
                <h2 style={{textAlign:'center',paddingTop:'10px'}}>{book.title}</h2>
                <p style={{marginLeft:'90px'}}>by {book.author_name}</p> 
                <br/>
                <img  src={book.cover_i || 'https://islandpress.org/files/default_book_cover_2015.jpg'} alt="Book" style={{ width: '100px', marginLeft:'100px' }} /> 
                 
                {/* added book card details */}
               
                <div className='added-bookcontent'>
                <p style={{color:'red',fontWeight:'500'}}>Newly Added</p>
                <p><span>Published-On : </span>{book.published}</p> <br/> 
                <p><span>Catagory : </span>{book.genre}</p> <br/> 
                <p><span>Rate : </span>⭐({book.rating}/5)</p><br/> 
                <p><span>About : </span>{book.description}</p>

                
                </div>
                
                </div>
              
            </li>
           
          ))}
        </ol>

        </div>
         
      )}
    </div>
  );
};

export default BrowseBooks;
>>>>>>> b63fd2c6263252ab5897b49648971d70fe0a43e5
