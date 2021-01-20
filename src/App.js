import React from 'react'
import { useSelector } from 'react-redux'
import Blog from './components/Blog'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import { setSignedIn } from './Features/userSlice'

const App = () => {
    const isSignedIn = useSelector(setSignedIn);
    return (
        <div className='text-light'>
            <NavBar/>
            <HomePage/>
            {isSignedIn ? <Blog/> : " "}
        </div>
    )
}

export default App
