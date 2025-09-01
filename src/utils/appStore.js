<<<<<<< HEAD

// redux configuration


import {configureStore } from "@reduxjs/toolkit"

import bookReducer from "./bookSlice.js"


const appStore=configureStore({
    reducer:{
        books: bookReducer,

    },
});

=======

// redux configuration


import {configureStore } from "@reduxjs/toolkit"

import bookReducer from "./bookSlice.js"


const appStore=configureStore({
    reducer:{
        books: bookReducer,

    },
});

>>>>>>> b63fd2c6263252ab5897b49648971d70fe0a43e5
export default appStore;