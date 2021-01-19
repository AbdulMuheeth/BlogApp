import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../Features/userSlice'; // from this import we will get the default export of the file

export default configureStore({
    reducer:{ // always reducer is used as the one of the argument in configure store
        user:userReducer, //this the default userslice
    }
})