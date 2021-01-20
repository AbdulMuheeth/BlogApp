import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        isSignedIn: false,
        userData: null,
        searchInput:"tech",
        blogData: null,
    },
    reducers:{
        setSignedIn:(state,action) => {
            state.isSignedIn = action.payload;
        },
        setUserData:(state,action) => {
            state.userData = action.payload;
        },
        setInput:(state,action) => {
            state.searchInput = action.payload;
        },
        setBlogData:(state,action) =>{
            state.blogData = action.payload;
        },
    },
})

//first we will export the all reducers first

export const {setSignedIn, setUserData , setInput, setBlogData} = userSlice.actions; //here actions is nothing but the reducers but it is called with the name of the actions

//to access the state

export const selectSignedIn = (state) => state.user.isSignedIn
export const selectUserData = (state) => state.user.userData
export const selectUserInput = (state) => state.user.searchInput
export const selectBlogData = (state) => state.user.blogData

//export the default slicer of the userslice

export default userSlice.reducer; //****