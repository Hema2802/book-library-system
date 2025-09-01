<<<<<<< HEAD

// importing hooks and components
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../utils/bookSlice';
import { Link, useNavigate } from 'react-router-dom';

// what details i need to add book

const AddBookPage = () => {
  const [bookData, setBookData] = useState({ 
    title: '', 
    author_name: '', 
    genre: '', 
    description: '',
    rating:'',
    published:'',
    cover_i:'' 
  });   
  // dispatch and navigation

  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle input value
  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };
// handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // if any field is not filled 
    if (!bookData.title || !bookData.author_name || !bookData.genre || !bookData.description || !bookData.rating || !bookData.published || !bookData.cover_i) {
      setError('All fields are required!');
      return;
    }
    // all fields are filled -dispatch and navigation
    dispatch(addBook({ ...bookData, key: `local-${Date.now()}` }));
    //console.log(dispatch(addBook({ ...bookData, key: `local-${Date.now()}` })))
    navigate('/browse'); // Redirect to BookList
  };

  return (
    <div className="form-container">
        <div className='form-box'>
          {/* heading */}
              <h2 className='head-form'>❯❯❯❯ Add a New Book ❯❯❯❯</h2>  
              {error && <p className="error">{error}</p>}

              {/* handle submit the form */}
              <form onSubmit={handleSubmit}>

                <div className='form-elements'>
                  {/* title */}
                <div>

                  <label htmlFor="title" ><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Title &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; </span></label>
                  <input name="title" placeholder="Enter Title of the Book"  value={bookData.title} onChange={handleChange} />
                </div>

                <div>
                 {/* author name */}
                 <label htmlFor="author_name" ><span>Author Name&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;</span> </label>
                  <input name="author_name" placeholder="Author"  value={bookData.author_name} onChange={handleChange} />
                </div>

                <div>
                    {/* published year */}
                    <label htmlFor="year" ><span>Published On &nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;</span> </label>
                    <input name="published" type='number' placeholder="Published year"  value={bookData.published} onChange={handleChange} />

                </div>

                <div>
                  {/* genre */}
                  <label htmlFor="genre" ><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Genere &nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span> </label>
                  <input name="genre" placeholder="Genre"  value={bookData.genre} onChange={handleChange} />
                </div>

                <div>
                  {/* rating */}
                 
                  <label htmlFor="rating"><span> Ratings :&nbsp;&nbsp;&nbsp;</span> </label>
                  <input type="number" id="rating" name="rating" min="0" max="5" step="0.1" placeholder="0-5" value={bookData.rating} onChange={handleChange} required ></input>
                 
                  </div>
                  
                  <div>
                    
                  </div>

                  <div>

                  <label htmlFor="cover_i" ><span>Image URL:</span></label>
                  <input
                      type="text"
                      id="cover_i"
                      name="cover_i"
                      placeholder="https://example.com/image.jpg"
                      value={bookData.cover_i}
                      onChange={handleChange}
                  />
                  </div>

                  
                  {/* description */}

                  <label htmlFor="description" className='descrition-addedBook' >Description : </label>
                  <textarea name="description" required placeholder="Give short intro of your Book..." value={bookData.description} onChange={handleChange} />
                 
                  </div>
                 <div className='btns-addpage'>

                  {/* add button */}
                 <button type="submit" className='add-btn' onClick={handleSubmit}>Add Book ✚</button>
                 {/* back to home button */}
                <Link to="/">
                <button className='add-btn'>Back to Home ❮❮</button>
                </Link>
                 
                 </div>
                 
            </form>

        </div>
      
    </div>
  );
};

export default AddBookPage;
=======

// importing hooks and components
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../utils/bookSlice';
import { Link, useNavigate } from 'react-router-dom';

// what details i need to add book

const AddBookPage = () => {
  const [bookData, setBookData] = useState({ 
    title: '', 
    author_name: '', 
    genre: '', 
    description: '',
    rating:'',
    published:'',
    cover_i:'' 
  });   
  // dispatch and navigation

  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle input value
  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };
// handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // if any field is not filled 
    if (!bookData.title || !bookData.author_name || !bookData.genre || !bookData.description || !bookData.rating || !bookData.published || !bookData.cover_i) {
      setError('All fields are required!');
      return;
    }
    // all fields are filled -dispatch and navigation
    dispatch(addBook({ ...bookData, key: `local-${Date.now()}` }));
    //console.log(dispatch(addBook({ ...bookData, key: `local-${Date.now()}` })))
    navigate('/browse'); // Redirect to BookList
  };

  return (
    <div className="form-container">
        <div className='form-box'>
          {/* heading */}
              <h2 className='head-form'>❯❯❯❯ Add a New Book ❯❯❯❯</h2>  
              {error && <p className="error">{error}</p>}

              {/* handle submit the form */}
              <form onSubmit={handleSubmit}>

                <div className='form-elements'>
                  {/* title */}
                <div>

                  <label htmlFor="title" ><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Title &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; </span></label>
                  <input name="title" placeholder="Enter Title of the Book"  value={bookData.title} onChange={handleChange} />
                </div>

                <div>
                 {/* author name */}
                 <label htmlFor="author_name" ><span>Author Name&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;</span> </label>
                  <input name="author_name" placeholder="Author"  value={bookData.author_name} onChange={handleChange} />
                </div>

                <div>
                    {/* published year */}
                    <label htmlFor="year" ><span>Published On &nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;</span> </label>
                    <input name="published" type='number' placeholder="Published year"  value={bookData.published} onChange={handleChange} />

                </div>

                <div>
                  {/* genre */}
                  <label htmlFor="genre" ><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Genere &nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span> </label>
                  <input name="genre" placeholder="Genre"  value={bookData.genre} onChange={handleChange} />
                </div>

                <div>
                  {/* rating */}
                 
                  <label htmlFor="rating"><span> Ratings :&nbsp;&nbsp;&nbsp;</span> </label>
                  <input type="number" id="rating" name="rating" min="0" max="5" step="0.1" placeholder="0-5" value={bookData.rating} onChange={handleChange} required ></input>
                 
                  </div>
                  
                  <div>
                    
                  </div>

                  <div>

                  <label htmlFor="cover_i" ><span>Image URL:</span></label>
                  <input
                      type="text"
                      id="cover_i"
                      name="cover_i"
                      placeholder="https://example.com/image.jpg"
                      value={bookData.cover_i}
                      onChange={handleChange}
                  />
                  </div>

                  
                  {/* description */}

                  <label htmlFor="description" className='descrition-addedBook' >Description : </label>
                  <textarea name="description" required placeholder="Give short intro of your Book..." value={bookData.description} onChange={handleChange} />
                 
                  </div>
                 <div className='btns-addpage'>

                  {/* add button */}
                 <button type="submit" className='add-btn' onClick={handleSubmit}>Add Book ✚</button>
                 {/* back to home button */}
                <Link to="/">
                <button className='add-btn'>Back to Home ❮❮</button>
                </Link>
                 
                 </div>
                 
            </form>

        </div>
      
    </div>
  );
};

export default AddBookPage;
>>>>>>> b63fd2c6263252ab5897b49648971d70fe0a43e5
