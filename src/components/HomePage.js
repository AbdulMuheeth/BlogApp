import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, setSignedIn, setUserData } from '../Features/userSlice';


const HomePage = () => {

    const dispatch = useDispatch();
    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    }
    const logout = (response) => {
        dispatch(setSignedIn(false));
    }

    const isSignedIn = useSelector(selectSignedIn)// used to access the redux state useSelector

    return (
        <div style={{display:isSignedIn?"none" : ""}}>
            {!isSignedIn ? 
            
            <div className="text-light my-5 container  d-flex flex-column justify-content-center">
            <h2>Blog</h2>
            <p>high quality online resourses for reaing blogs. Just signup and start Reading some quality blogs.</p>
            <GoogleLogin clientId="827482064879-43b2l6uqn2q20uo3321dlgou1ij4edp7.apps.googleusercontent.com" 
            
            render={(renderprops) =>(
            <button 
            onClick={renderprops.onClick}
            disabled={renderprops.disabled}
            className='bg-info text-white'
            >Login with Google
            
            </button>
            )}

            onSuccess={login}
            isSignedIn={true}
            onFailure={logout}
            cookiPolicy={"single_host_origin"} //basically stores in the local history.
            />
        </div>

                :

            ""
        }
        </div>
    )
}

export default HomePage

// client id - 827482064879-43b2l6uqn2q20uo3321dlgou1ij4edp7.apps.googleusercontent.com

// client Secret - VbIluyMU68gfUzLmQGapXbLn