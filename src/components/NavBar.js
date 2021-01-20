import { Avatar } from '@material-ui/core';
import React,{useState} from 'react';
import { GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { selectSignedIn, selectUserData, setInput, setSignedIn, setUserData } from '../Features/userSlice';



const NavBar = () => {

    const dispatch = useDispatch();

    const [inputValue,setInputValue] = useState("tech")
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);

    const logout = (reponse) => {
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
        
    }
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setInput(inputValue))
        console.log(inputValue)
    };

    return (
       <div>
        {isSignedIn ? (

            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Blog App</a>
                
                {isSignedIn && (
                    <div >
                    <input className="pb-1 h-25" 
                    placeholder="Search for a blog" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value) }
                    />
                    <button className="btn btn-outline-light" 
                    onClick={handleClick}>Search</button>
                    </div>) }

                {isSignedIn &&( <div > 
                <Avatar style={{margin:"0",padding:"0px"}} src={userData?.imageUrl} alt={userData?.name}/> </div> )}
                <h6 className="d-flex justify-content-left"> {userData?.givenName}</h6>
                <GoogleLogout clientId="827482064879-43b2l6uqn2q20uo3321dlgou1ij4edp7.apps.
                googleusercontent.com" 
                render={(renderprops) =>(
                    <button 
                    onClick={renderprops.onClick}
                    disabled={renderprops.disabled}
                    className='bg-info text-white'
                    >
                        Logout
                    </button>
                    )}
                    buttonText = "Logout"
                    onLogoutSuccess={logout}
                />
            </div>
            </nav>


        )
        :
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Blog App</a>
                    <h5 className="text-info">User not Available</h5>
                </div>
        </nav>
    }
        </div>
        
    )
}

export default NavBar
