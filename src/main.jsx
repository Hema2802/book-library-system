
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Error from './components/Error.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import React from 'react'
import BookList from './components/BookList.jsx'
import BookDetails from '../src/components/BookDetails.jsx'
import AddBookPage from './components/AddBookPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrowseBooks from './components/BrowseBooks.jsx'




  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <BookList />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/book/:id",
          element: <BookDetails />
        },
        {
          path: "/add",
          element: <AddBookPage />
        },
        {
          path: "/browse",
          element: <BrowseBooks />
        },

      ],
      errorElement: <Error />
    }

]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={appRouter}/>
  </React.StrictMode>,
)

