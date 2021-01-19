import React from 'react';
import { useSelector } from 'react-redux';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { selectSignedIn } from '../Features/userSlice';

const Navbar =() =>{
    const isSignedIn = useSelector(selectSignedIn);
    
}

const NavBar = () => {
    return (
       <div>
           <h1>
               Blog App
           </h1>
           
       </div>
    )
}

export default NavBar
