
// redux configuration


import {configureStore } from "@reduxjs/toolkit"

import bookReducer from "./bookSlice.js"


const appStore=configureStore({
    reducer:{
        books: bookReducer,

    },
});

export default appStore;